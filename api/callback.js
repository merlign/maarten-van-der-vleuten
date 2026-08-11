export default async function handler(req, res) {
  const { code, error, error_description: errorDescription } = req.query;
  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
  const clientSecret = process.env.GITHUB_OAUTH_CLIENT_SECRET;

  if (error) {
    res.status(400).send(`Authentication error: ${errorDescription || error}`);
    return;
  }

  if (!clientId || !clientSecret) {
    res.status(500).send('Missing GITHUB_OAUTH_CLIENT_ID or GITHUB_OAUTH_CLIENT_SECRET environment variable.');
    return;
  }

  const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code })
  });
  const tokenData = await tokenResponse.json();

  if (tokenData.error) {
    res.status(400).send(`Authentication error: ${tokenData.error_description || tokenData.error}`);
    return;
  }

  const payload = JSON.stringify({ token: tokenData.access_token, provider: 'github' });

  const html = `
    <!doctype html>
    <html>
      <body>
        <script>
          (function() {
            function receiveMessage(e) {
              window.opener.postMessage(
                'authorization:github:success:${payload}',
                e.origin
              );
              window.removeEventListener('message', receiveMessage, false);
            }
            window.addEventListener('message', receiveMessage, false);
            window.opener.postMessage('authorizing:github', '*');
          })();
        </script>
      </body>
    </html>
  `;

  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
}
