const Attendance = require('../models/Attendance');

exports.markAttendance = async (req, res) => {
  try {
    const { studentId, date, status, notes } = req.body;
    
    const attendance = new Attendance({
      student: studentId,
      date,
      status,
      markedBy: req.user.id,
      notes
    });

    await attendance.save();
    res.status(201).json(attendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAttendance = async (req, res) => {
  try {
    const { studentId, startDate, endDate } = req.query;
    
    const query = {};
    if (studentId) query.student = studentId;
    if (startDate && endDate) {
      query.date = { $gte: new Date(startDate), $lte: new Date(endDate) };
    }

    const attendance = await Attendance.find(query)
      .populate('student', 'name email grade')
      .populate('markedBy', 'name')
      .sort({ date: -1 });

    res.json(attendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
