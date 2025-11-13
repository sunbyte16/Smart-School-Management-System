import { Link } from 'react-router-dom';

function Navbar({ user, onLogout }) {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold">Smart School</h1>
            <div className="flex space-x-4">
              <Link to="/dashboard" className="hover:text-blue-200">Dashboard</Link>
              <Link to="/attendance" className="hover:text-blue-200">Attendance</Link>
              <Link to="/assignments" className="hover:text-blue-200">Assignments</Link>
              <Link to="/ai-chat" className="hover:text-blue-200">AI Assistant</Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm">
              {user.name} ({user.role})
            </span>
            <button 
              onClick={onLogout}
              className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
        </div>
        <div className="text-center text-xs pb-2 opacity-75">
          © 2k25 𝕊𝕦𝕟𝕚𝕝 𝕊𝕙𝕒𝕣𝕞𝕒. All rights reserved.
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
