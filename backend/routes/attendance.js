const express = require('express');
const router = express.Router();
const { markAttendance, getAttendance } = require('../controllers/attendanceController');
const { authenticate, authorizeTeacher } = require('../middleware/auth');

router.post('/', authenticate, authorizeTeacher, markAttendance);
router.get('/', authenticate, getAttendance);

module.exports = router;
