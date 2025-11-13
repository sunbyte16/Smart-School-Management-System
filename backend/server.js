/**
 * Smart School Management System - Backend Server
 * 
 * Made with ❤️ by 𝕊𝕦𝕟𝕚𝕝 𝕊𝕙𝕒𝕣𝕞𝕒
 * © 2k25 𝕊𝕦𝕟𝕚𝕝 𝕊𝕙𝕒𝕣𝕞𝕒. All rights reserved.
 * 
 * GitHub: https://github.com/sunbyte16
 * LinkedIn: https://www.linkedin.com/in/sunil-kumar-bb88bb31a/
 * Portfolio: https://lively-dodol-cc397c.netlify.app
 */

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const authRoutes = require('./routes/auth');
const oauthRoutes = require('./routes/oauth');
const attendanceRoutes = require('./routes/attendance');
const assignmentsRoutes = require('./routes/assignments');
const aiRoutes = require('./routes/ai');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/oauth', oauthRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/assignments', assignmentsRoutes);
app.use('/api/ai', aiRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Smart School API is running',
    author: '𝕊𝕦𝕟𝕚𝕝 𝕊𝕙𝕒𝕣𝕞𝕒',
    copyright: '© 2k25 𝕊𝕦𝕟𝕚𝕝 𝕊𝕙𝕒𝕣𝕞𝕒. All rights reserved.',
    github: 'https://github.com/sunbyte16',
    linkedin: 'https://www.linkedin.com/in/sunil-kumar-bb88bb31a/',
    portfolio: 'https://lively-dodol-cc397c.netlify.app'
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`© 2k25 𝕊𝕦𝕟𝕚𝕝 𝕊𝕙𝕒𝕣𝕞𝕒. All rights reserved.`);
});
