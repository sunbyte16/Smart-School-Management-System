import { Link } from 'react-router-dom';

function Dashboard({ user }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Welcome, {user.name}!</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/attendance" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <div className="text-blue-600 text-4xl mb-4">📊</div>
          <h2 className="text-xl font-bold mb-2">Attendance</h2>
          <p className="text-gray-600">
            {user.role === 'teacher' ? 'Mark and view student attendance' : 'View your attendance records'}
          </p>
        </Link>

        <Link to="/assignments" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <div className="text-green-600 text-4xl mb-4">📝</div>
          <h2 className="text-xl font-bold mb-2">Assignments</h2>
          <p className="text-gray-600">
            {user.role === 'teacher' ? 'Create and manage assignments' : 'View and submit assignments'}
          </p>
        </Link>

        <Link to="/ai-chat" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <div className="text-purple-600 text-4xl mb-4">🤖</div>
          <h2 className="text-xl font-bold mb-2">AI Assistant</h2>
          <p className="text-gray-600">
            Get help with lesson planning, quiz generation, and more
          </p>
        </Link>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Quick Stats</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded">
            <div className="text-3xl font-bold text-blue-600">--</div>
            <div className="text-gray-600">Total Attendance</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded">
            <div className="text-3xl font-bold text-green-600">--</div>
            <div className="text-gray-600">Assignments</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded">
            <div className="text-3xl font-bold text-purple-600">{user.grade || 'N/A'}</div>
            <div className="text-gray-600">Grade</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
