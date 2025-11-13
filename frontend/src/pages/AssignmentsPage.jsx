import { useState, useEffect } from 'react';
import { assignmentsAPI } from '../services/api';

function AssignmentsPage({ user }) {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dueDate: '',
    grade: ''
  });

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const response = await assignmentsAPI.getAll();
      setAssignments(response.data);
    } catch (error) {
      console.error('Error fetching assignments:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateAssignment = async (e) => {
    e.preventDefault();
    try {
      await assignmentsAPI.create(formData);
      alert('Assignment created successfully!');
      setShowCreateForm(false);
      setFormData({ title: '', description: '', dueDate: '', grade: '' });
      fetchAssignments();
    } catch (error) {
      alert('Error creating assignment');
    }
  };

  const handleSubmitAssignment = async (assignmentId) => {
    const content = prompt('Enter your submission:');
    if (content) {
      try {
        await assignmentsAPI.submit(assignmentId, content);
        alert('Assignment submitted successfully!');
        fetchAssignments();
      } catch (error) {
        alert('Error submitting assignment');
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Assignments</h1>
        {user.role === 'teacher' && (
          <button
            onClick={() => setShowCreateForm(!showCreateForm)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            {showCreateForm ? 'Cancel' : 'Create Assignment'}
          </button>
        )}
      </div>

      {showCreateForm && user.role === 'teacher' && (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-xl font-bold mb-4">Create New Assignment</h2>
          <form onSubmit={handleCreateAssignment} className="space-y-4">
            <input
              type="text"
              placeholder="Assignment Title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
            <textarea
              placeholder="Description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg"
              rows="4"
              required
            />
            <input
              type="date"
              value={formData.dueDate}
              onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
            <input
              type="text"
              placeholder="Grade (e.g., 10th)"
              value={formData.grade}
              onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Create Assignment
            </button>
          </form>
        </div>
      )}

      <div className="space-y-4">
        {loading ? (
          <p>Loading...</p>
        ) : assignments.length === 0 ? (
          <p className="text-gray-600">No assignments found.</p>
        ) : (
          assignments.map((assignment) => (
            <div key={assignment._id} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{assignment.title}</h3>
                  <p className="text-gray-600 text-sm">
                    Grade: {assignment.grade} | Due: {new Date(assignment.dueDate).toLocaleDateString()}
                  </p>
                </div>
                {user.role === 'student' && (
                  <button
                    onClick={() => handleSubmitAssignment(assignment._id)}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  >
                    Submit
                  </button>
                )}
              </div>
              <p className="text-gray-700">{assignment.description}</p>
              {assignment.submissions?.length > 0 && (
                <p className="text-sm text-gray-500 mt-2">
                  {assignment.submissions.length} submission(s)
                </p>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default AssignmentsPage;
