// Node.js Express server for Discord OAuth to Firebase custom token
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const admin = require('firebase-admin');

// ---- FILL THESE IN ----
const DISCORD_CLIENT_ID = '1427627697579753503';
const DISCORD_CLIENT_SECRET = 'qLx9K0SAw0il_em98D5vJFCGB5lj3PoT';
const DISCORD_REDIRECT_URI = 'http://localhost:5000/auth/discord/callback'; // or your deployed URL
const FIREBASE_SERVICE_ACCOUNT = require('./serviceAccountKey.json'); // Download from Firebase Console
// -----------------------

admin.initializeApp({ credential: admin.credential.cert(FIREBASE_SERVICE_ACCOUNT) });

const app = express();
app.use(cors());

// Step 1: Redirect user to Discord OAuth
app.get('/auth/discord', (req, res) => {
  const params = new URLSearchParams({
    client_id: DISCORD_CLIENT_ID,
    redirect_uri: DISCORD_REDIRECT_URI,
    response_type: 'code',
    scope: 'identify email',
    prompt: 'consent',
  });
  res.redirect(`https://discord.com/api/oauth2/authorize?${params.toString()}`);
});

// Step 2: Discord callback
app.get('/auth/discord/callback', async (req, res) => {
  const code = req.query.code;
  if (!code) return res.status(400).send('No code');
  try {
    // Exchange code for access token
    const tokenRes = await axios.post('https://discord.com/api/oauth2/token', new URLSearchParams({
      client_id: DISCORD_CLIENT_ID,
      client_secret: DISCORD_CLIENT_SECRET,
      grant_type: 'authorization_code',
      code,
      redirect_uri: DISCORD_REDIRECT_URI,
      scope: 'identify email',
    }), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
    const { access_token } = tokenRes.data;
    // Get user info
    const userRes = await axios.get('https://discord.com/api/users/@me', {
      headers: { Authorization: `Bearer ${access_token}` },
    });
    const discordUser = userRes.data;
    // Create Firebase custom token
    const firebaseToken = await admin.auth().createCustomToken(discordUser.id, {
      email: discordUser.email,
      username: discordUser.username,
      avatar: discordUser.avatar,
      discriminator: discordUser.discriminator,
    });
    // Redirect to frontend with token
    res.redirect(`http://localhost:5173/login?firebaseToken=${firebaseToken}`); // Change to your frontend URL
  } catch (err) {
    res.status(500).send('OAuth error: ' + err.message);
  }
});

app.listen(5000, () => console.log('Discord OAuth server running on http://localhost:5000'));
