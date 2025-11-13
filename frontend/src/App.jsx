/**
 * Smart School Management System - Frontend Application
 * 
 * ❤️ Crafted by 𝕊𝕦𝕟𝕚𝕝 𝕊𝕙𝕒𝕣𝕞𝕒
 * © 2k25 𝕊𝕦𝕟𝕚𝕝 𝕊𝕙𝕒𝕣𝕞𝕒. All rights reserved.
 * 
 * GitHub: https://github.com/sunbyte16
 * LinkedIn: https://www.linkedin.com/in/sunil-kumar-bb88bb31a/
 * Portfolio: https://lively-dodol-cc397c.netlify.app
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AttendancePage from './pages/AttendancePage';
import AssignmentsPage from './pages/AssignmentsPage';
import AIChatPage from './pages/AIChatPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    if (token && userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogin = (userData, token) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {user && <Navbar user={user} onLogout={handleLogout} />}
        <div className="flex-grow">
          <Routes>
            <Route 
              path="/login" 
              element={!user ? <Login onLogin={handleLogin} /> : <Navigate to="/dashboard" />} 
            />
            <Route 
              path="/dashboard" 
              element={user ? <Dashboard user={user} /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/attendance" 
              element={user ? <AttendancePage user={user} /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/assignments" 
              element={user ? <AssignmentsPage user={user} /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/ai-chat" 
              element={user ? <AIChatPage user={user} /> : <Navigate to="/login" />} 
            />
            <Route path="/" element={<Navigate to={user ? "/dashboard" : "/login"} />} />
          </Routes>
        </div>
        {user && <Footer />}
      </div>
    </Router>
  );
}

export default App;
