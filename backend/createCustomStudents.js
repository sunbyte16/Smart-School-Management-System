/**
 * Create Custom Students Script
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
  grade: String,
  studentId: String
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

async function createCustomStudents() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    const students = [
      {
        name: 'Sunil Kumar',
        email: 'sunil.kumar@student.com',
        password: await bcrypt.hash('Student@123', 10),
        role: 'student',
        grade: '2nd Year',
        studentId: '236M1A05C1'
      },
      {
        name: 'P.Ajay',
        email: 'p.ajay@student.com',
        password: await bcrypt.hash('Student@123', 10),
        role: 'student',
        grade: '2nd Year',
        studentId: '236M1A0589'
      },
      {
        name: 'P.Nitin',
        email: 'p.nitin@student.com',
        password: await bcrypt.hash('Student@123', 10),
        role: 'student',
        grade: '2nd Year',
        studentId: '236M1A0592'
      },
      {
        name: 'Pranav',
        email: 'pranav@student.com',
        password: await bcrypt.hash('Student@123', 10),
        role: 'student',
        grade: '2nd Year',
        studentId: '236M1A0584'
      }
    ];

    console.log('\n🎓 Creating Custom Students...\n');

    for (const studentData of students) {
      const existing = await User.findOne({ email: studentData.email });
      if (!existing) {
        const student = new User(studentData);
        await student.save();
        console.log(`✅ Created: ${studentData.name}`);
        console.log(`   Student ID: ${studentData.studentId}`);
        console.log(`   MongoDB ID: ${student._id}`);
        console.log(`   Email: ${studentData.email}`);
        console.log(`   Grade: ${studentData.grade}`);
        console.log('');
      } else {
        console.log(`⚠️  Already exists: ${studentData.email}`);
      }
    }

    // Get all students
    const allStudents = await User.find({ role: 'student' });
    console.log('\n📋 ALL STUDENTS IN DATABASE:');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    allStudents.forEach(student => {
      console.log(`👤 ${student.name}`);
      console.log(`   Student ID: ${student.studentId || 'N/A'}`);
      console.log(`   MongoDB ID: ${student._id}`);
      console.log(`   Email: ${student.email}`);
      console.log(`   Grade: ${student.grade}`);
      console.log('');
    });
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('\n💡 Use MongoDB IDs to mark attendance!\n');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

createCustomStudents();
