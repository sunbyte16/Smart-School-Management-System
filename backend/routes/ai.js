const express = require('express');
const router = express.Router();
const aiService = require('../services/aiService');
const { authenticate } = require('../middleware/auth');

router.post('/chat', authenticate, async (req, res) => {
  try {
    const { messages } = req.body;
    const response = await aiService.chat(messages);
    res.json({ response });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/lesson-plan', authenticate, async (req, res) => {
  try {
    const { topic, grade } = req.body;
    const lessonPlan = await aiService.generateLessonPlan(topic, grade);
    res.json({ lessonPlan });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/quiz', authenticate, async (req, res) => {
  try {
    const { topic, grade, numQuestions } = req.body;
    const quiz = await aiService.generateQuiz(topic, grade, numQuestions);
    res.json({ quiz });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
