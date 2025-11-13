const express = require('express');
const router = express.Router();
const { createAssignment, getAssignments, submitAssignment } = require('../controllers/assignmentsController');
const { authenticate, authorizeTeacher } = require('../middleware/auth');

router.post('/', authenticate, authorizeTeacher, createAssignment);
router.get('/', authenticate, getAssignments);
router.post('/:assignmentId/submit', authenticate, submitAssignment);

module.exports = router;
