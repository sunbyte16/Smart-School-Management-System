import axios from 'axios';

const API_URL = '/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData)
};

export const attendanceAPI = {
  mark: (data) => api.post('/attendance', data),
  get: (params) => api.get('/attendance', { params })
};

export const assignmentsAPI = {
  create: (data) => api.post('/assignments', data),
  getAll: (params) => api.get('/assignments', { params }),
  submit: (assignmentId, content) => api.post(`/assignments/${assignmentId}/submit`, { content })
};

export const aiAPI = {
  chat: (messages) => api.post('/ai/chat', { messages }),
  generateLessonPlan: (topic, grade) => api.post('/ai/lesson-plan', { topic, grade }),
  generateQuiz: (topic, grade, numQuestions) => api.post('/ai/quiz', { topic, grade, numQuestions })
};

export const oauthAPI = {
  google: (credential, email, name, picture) => api.post('/oauth/google', { credential, email, name, picture }),
  github: (code) => api.post('/oauth/github', { code }),
  linkedin: (code) => api.post('/oauth/linkedin', { code })
};

export default api;
