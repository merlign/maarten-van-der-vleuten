import { timingSafeEqual } from 'node:crypto';

const ALLOWED_ADMIN_ORIGINS = [
  'https://maarten-van-der-vleuten.vercel.app',
  'https://www.maartenvandervleuten.com',
  'https://maartenvandervleuten.com'
];

const sendText = (res, status, text) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.status(status).send(text);
};

const readCookie = (req, name) => {
  const match = (req.headers.cookie || '').split(';').map((c) => c.trim()).find((c) => c.startsWith(`${name}=`));
  return match ? match.slice(name.length + 1) : '';
};

const sameString = (a, b) => {
  const bufA = Buffer.from(String(a));
  const bufB = Buffer.from(String(b));
  return bufA.length === bufB.length && timingSafeEqual(bufA, bufB);
};

export default async function handler(req, res) {
  const { code, state, error, error_description: errorDescription } = req.query;
  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
  const clientSecret = process.env.GITHUB_OAUTH_CLIENT_SECRET;

  res.setHeader('Set-Cookie', 'oauth_state=; HttpOnly; Secure; SameSite=Lax; Path=/api; Max-Age=0');

  if (error) {
    sendText(res, 400, `Authentication error: ${errorDescription || error}`);
    return;
  }

  if (!clientId || !clientSecret) {
    sendText(res, 500, 'Missing GITHUB_OAUTH_CLIENT_ID or GITHUB_OAUTH_CLIENT_SECRET environment variable.');
    return;
  }

  const expectedState = readCookie(req, 'oauth_state');
  if (!code || !state || !expectedState || !sameString(state, expectedState)) {
    sendText(res, 400, 'Authentication error: invalid or missing state. Please try logging in again.');
    return;
  }

  const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code })
  });
  const tokenData = await tokenResponse.json();

  if (tokenData.error || !tokenData.access_token) {
    sendText(res, 400, `Authentication error: ${tokenData.error_description || tokenData.error || 'no token received'}`);
    return;
  }

  const message = 'authorization:github:success:' + JSON.stringify({ token: tokenData.access_token, provider: 'github' });
  const inlineJson = (value) => JSON.stringify(value).replace(/</g, '\\u003c');

  const html = `<!doctype html>
<html>
  <body>
    <script>
      (function() {
        var allowedOrigins = ${inlineJson(ALLOWED_ADMIN_ORIGINS)};
        var message = ${inlineJson(message)};
        function receiveMessage(e) {
          if (allowedOrigins.indexOf(e.origin) === -1) return;
          window.opener.postMessage(message, e.origin);
          window.removeEventListener('message', receiveMessage, false);
        }
        window.addEventListener('message', receiveMessage, false);
        window.opener.postMessage('authorizing:github', '*');
      })();
    </script>
  </body>
</html>`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(html);
}
