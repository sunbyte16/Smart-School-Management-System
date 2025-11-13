const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Google OAuth
router.post('/google', async (req, res) => {
  try {
    const { credential, email, name, picture } = req.body;

    // Check if user exists
    let user = await User.findOne({ email });

    if (!user) {
      // Create new user
      user = new User({
        name,
        email,
        password: Math.random().toString(36).slice(-8), // Random password for OAuth users
        role: 'student', // Default role
        googleId: credential,
        avatar: picture
      });
      await user.save();
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.json({
      token,
      user: { id: user._id, name: user.name, email: user.email, role: user.role, grade: user.grade }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GitHub OAuth
router.post('/github', async (req, res) => {
  try {
    const { code } = req.body;

    // Exchange code for access token
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code
      })
    });

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // Get user data
    const userResponse = await fetch('https://api.github.com/user', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    const githubUser = await userResponse.json();

    // Check if user exists
    let user = await User.findOne({ email: githubUser.email });

    if (!user) {
      user = new User({
        name: githubUser.name || githubUser.login,
        email: githubUser.email,
        password: Math.random().toString(36).slice(-8),
        role: 'student',
        githubId: githubUser.id,
        avatar: githubUser.avatar_url
      });
      await user.save();
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.json({
      token,
      user: { id: user._id, name: user.name, email: user.email, role: user.role, grade: user.grade }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// LinkedIn OAuth
router.post('/linkedin', async (req, res) => {
  try {
    const { code } = req.body;

    // Exchange code for access token
    const tokenResponse = await fetch('https://www.linkedin.com/oauth/v2/accessToken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        client_id: process.env.LINKEDIN_CLIENT_ID,
        client_secret: process.env.LINKEDIN_CLIENT_SECRET,
        redirect_uri: process.env.LINKEDIN_REDIRECT_URI
      })
    });

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // Get user data
    const userResponse = await fetch('https://api.linkedin.com/v2/me', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    const linkedinUser = await userResponse.json();

    // Get email
    const emailResponse = await fetch('https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    const emailData = await emailResponse.json();
    const email = emailData.elements[0]['handle~'].emailAddress;

    // Check if user exists
    let user = await User.findOne({ email });

    if (!user) {
      user = new User({
        name: `${linkedinUser.localizedFirstName} ${linkedinUser.localizedLastName}`,
        email,
        password: Math.random().toString(36).slice(-8),
        role: 'student',
        linkedinId: linkedinUser.id
      });
      await user.save();
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.json({
      token,
      user: { id: user._id, name: user.name, email: user.email, role: user.role, grade: user.grade }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
