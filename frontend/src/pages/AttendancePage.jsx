import { useState, useEffect } from 'react';
import { attendanceAPI } from '../services/api';

function AttendancePage({ user }) {
  const [attendance, setAttendance] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    studentId: '',
    date: new Date().toISOString().split('T')[0],
    status: 'present',
    notes: ''
  });

  useEffect(() => {
    fetchAttendance();
  }, []);

  const fetchAttendance = async () => {
    try {
      const response = await attendanceAPI.get();
      setAttendance(response.data);
    } catch (error) {
      console.error('Error fetching attendance:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await attendanceAPI.mark(formData);
      alert('✅ Attendance marked successfully!');
      fetchAttendance();
      setFormData({ ...formData, studentId: '', notes: '' });
    } catch (error) {
      console.error('Attendance error:', error);
      const errorMsg = error.response?.data?.message || error.message || 'Unknown error';
      alert(`❌ Error marking attendance: ${errorMsg}\n\nPlease check:\n• Student ID is correct\n• You are logged in as a teacher\n• All required fields are filled`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Attendance Management</h1>

      {user.role === 'teacher' && (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-xl font-bold mb-4">Mark Attendance</h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <p className="text-sm text-blue-800 font-semibold mb-2">📋 Available Student IDs (2nd Year):</p>
            <div className="text-xs text-blue-700 space-y-1">
              <p>• Sunil Kumar (236M1A05C1): <code className="bg-blue-100 px-2 py-1 rounded">6915ef9f73e3bc28b26b690c</code></p>
              <p>• P.Ajay (236M1A0589): <code className="bg-blue-100 px-2 py-1 rounded">6915ef9f73e3bc28b26b690f</code></p>
              <p>• P.Nitin (236M1A0592): <code className="bg-blue-100 px-2 py-1 rounded">6915efa073e3bc28b26b6912</code></p>
              <p>• Pranav (236M1A0584): <code className="bg-blue-100 px-2 py-1 rounded">6915efa073e3bc28b26b6915</code></p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Student ID <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Student ID (e.g., 6915ee979889df0c1ead049e)"
                value={formData.studentId}
                onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="present">✅ Present</option>
                <option value="absent">❌ Absent</option>
                <option value="late">⏰ Late</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Notes (Optional)
              </label>
              <textarea
                placeholder="Add any additional notes..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              📝 Mark Attendance
            </button>
          </form>
        </div>
      )}

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Attendance Records</h2>
        {loading ? (
          <p>Loading...</p>
        ) : attendance.length === 0 ? (
          <p className="text-gray-600">No attendance records found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left">Date</th>
                  <th className="px-4 py-2 text-left">Student</th>
                  <th className="px-4 py-2 text-left">Status</th>
                  <th className="px-4 py-2 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                {attendance.map((record) => (
                  <tr key={record._id} className="border-t">
                    <td className="px-4 py-2">{new Date(record.date).toLocaleDateString()}</td>
                    <td className="px-4 py-2">{record.student?.name || 'N/A'}</td>
                    <td className="px-4 py-2">
                      <span className={`px-2 py-1 rounded text-sm ${
                        record.status === 'present' ? 'bg-green-100 text-green-800' :
                        record.status === 'absent' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {record.status}
                      </span>
                    </td>
                    <td className="px-4 py-2">{record.notes || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default AttendancePage;
