import { useState } from 'react';
import AIChat from '../components/AIChat';
import { aiAPI } from '../services/api';

function AIChatPage({ user }) {
  const [activeTab, setActiveTab] = useState('chat');
  const [lessonPlan, setLessonPlan] = useState('');
  const [quiz, setQuiz] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    topic: '',
    grade: user.grade || '',
    numQuestions: 5
  });

  const generateLessonPlan = async () => {
    if (!formData.topic || !formData.grade) {
      alert('Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      const response = await aiAPI.generateLessonPlan(formData.topic, formData.grade);
      setLessonPlan(response.data.lessonPlan);
    } catch (error) {
      alert('Error generating lesson plan');
    } finally {
      setLoading(false);
    }
  };

  const generateQuiz = async () => {
    if (!formData.topic || !formData.grade) {
      alert('Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      const response = await aiAPI.generateQuiz(formData.topic, formData.grade, formData.numQuestions);
      setQuiz(response.data.quiz);
    } catch (error) {
      alert('Error generating quiz');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">AI Assistant</h1>

      <div className="bg-white rounded-lg shadow-lg">
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab('chat')}
            className={`px-6 py-3 font-semibold ${
              activeTab === 'chat' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'
            }`}
          >
            Chat
          </button>
          <button
            onClick={() => setActiveTab('lesson')}
            className={`px-6 py-3 font-semibold ${
              activeTab === 'lesson' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'
            }`}
          >
            Lesson Plan
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-6 py-3 font-semibold ${
              activeTab === 'quiz' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'
            }`}
          >
            Quiz Generator
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'chat' && <AIChat />}

          {activeTab === 'lesson' && (
            <div>
              <div className="space-y-4 mb-6">
                <input
                  type="text"
                  placeholder="Topic (e.g., Photosynthesis)"
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Grade (e.g., 10th)"
                  value={formData.grade}
                  onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <button
                  onClick={generateLessonPlan}
                  disabled={loading}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
                >
                  {loading ? 'Generating...' : 'Generate Lesson Plan'}
                </button>
              </div>
              {lessonPlan && (
                <div className="bg-gray-50 p-4 rounded-lg whitespace-pre-wrap">
                  {lessonPlan}
                </div>
              )}
            </div>
          )}

          {activeTab === 'quiz' && (
            <div>
              <div className="space-y-4 mb-6">
                <input
                  type="text"
                  placeholder="Topic (e.g., World War II)"
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Grade (e.g., 10th)"
                  value={formData.grade}
                  onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <input
                  type="number"
                  placeholder="Number of Questions"
                  value={formData.numQuestions}
                  onChange={(e) => setFormData({ ...formData, numQuestions: parseInt(e.target.value) })}
                  className="w-full px-4 py-2 border rounded-lg"
                  min="1"
                  max="20"
                />
                <button
                  onClick={generateQuiz}
                  disabled={loading}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
                >
                  {loading ? 'Generating...' : 'Generate Quiz'}
                </button>
              </div>
              {quiz && (
                <div className="bg-gray-50 p-4 rounded-lg whitespace-pre-wrap">
                  {quiz}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AIChatPage;
