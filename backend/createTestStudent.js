/**
 * Create Test Student Script
 * 
 * Made with ❤️ by 𝕊𝕦𝕟𝕚𝕝 𝕊𝕙𝕒𝕣𝕞𝕒
 * © 2k25 𝕊𝕦𝕟𝕚𝕝 𝕊𝕙𝕒𝕣𝕞𝕒. All rights reserved.
 */

require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
  grade: String
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

async function createTestStudents() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    const students = [
      {
        name: 'John Doe',
        email: 'john.doe@student.com',
        password: await bcrypt.hash('Student@123', 10),
        role: 'student',
        grade: '10th'
      },
      {
        name: 'Jane Smith',
        email: 'jane.smith@student.com',
        password: await bcrypt.hash('Student@123', 10),
        role: 'student',
        grade: '10th'
      },
      {
        name: 'Mike Johnson',
        email: 'mike.johnson@student.com',
        password: await bcrypt.hash('Student@123', 10),
        role: 'student',
        grade: '9th'
      }
    ];

    for (const studentData of students) {
      const existing = await User.findOne({ email: studentData.email });
      if (!existing) {
        const student = new User(studentData);
        await student.save();
        console.log(`✅ Created student: ${studentData.name} (${studentData.email})`);
      } else {
        console.log(`⚠️  Student already exists: ${studentData.email}`);
      }
    }

    // Get all students to show their IDs
    const allStudents = await User.find({ role: 'student' });
    console.log('\n📋 All Students:');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    allStudents.forEach(student => {
      console.log(`👤 ${student.name}`);
      console.log(`   ID: ${student._id}`);
      console.log(`   Email: ${student.email}`);
      console.log(`   Grade: ${student.grade}`);
      console.log('');
    });
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('\n💡 Use these Student IDs to mark attendance!\n');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

createTestStudents();
