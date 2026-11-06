import { randomBytes } from 'node:crypto';

export default function handler(req, res) {
  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;

  if (!clientId) {
    res.status(500).send('Missing GITHUB_OAUTH_CLIENT_ID environment variable.');
    return;
  }

  const state = randomBytes(16).toString('hex');
  const redirectUri = `https://${req.headers.host}/api/callback`;
  const scope = 'repo,user';
  const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}&state=${state}`;

  res.setHeader('Set-Cookie', `oauth_state=${state}; HttpOnly; Secure; SameSite=Lax; Path=/api; Max-Age=600`);
  res.writeHead(302, { Location: authUrl });
  res.end();
}
