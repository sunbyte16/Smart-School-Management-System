const Assignment = require('../models/Assignment');

exports.createAssignment = async (req, res) => {
  try {
    const { title, description, dueDate, grade } = req.body;
    
    const assignment = new Assignment({
      title,
      description,
      dueDate,
      grade,
      createdBy: req.user.id
    });

    await assignment.save();
    res.status(201).json(assignment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAssignments = async (req, res) => {
  try {
    const { grade } = req.query;
    const query = grade ? { grade } : {};

    const assignments = await Assignment.find(query)
      .populate('createdBy', 'name')
      .sort({ dueDate: -1 });

    res.json(assignments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.submitAssignment = async (req, res) => {
  try {
    const { assignmentId } = req.params;
    const { content } = req.body;

    const assignment = await Assignment.findById(assignmentId);
    if (!assignment) {
      return res.status(404).json({ message: 'Assignment not found' });
    }

    assignment.submissions.push({
      student: req.user.id,
      content,
      submittedAt: new Date()
    });

    await assignment.save();
    res.json(assignment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
