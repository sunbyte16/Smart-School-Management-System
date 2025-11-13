<div align="center">

# 🎓 AI-Powered Smart School Management System

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-16+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.0-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express-4.18-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![AI](https://img.shields.io/badge/AI-Gemini%20%7C%20OpenAI-FF6F00?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)

[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](CONTRIBUTING.md)
[![GitHub Stars](https://img.shields.io/github/stars/sunbyte16/smart-school-management?style=for-the-badge)](https://github.com/sunbyte16/smart-school-management/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/sunbyte16/smart-school-management?style=for-the-badge)](https://github.com/sunbyte16/smart-school-management/network/members)

**A comprehensive full-stack school management system with AI-powered features for modern education**

[Features](#-features) • [Demo](#-demo) • [Installation](#-installation) • [Usage](#-usage) • [API](#-api-documentation) • [Contributing](#-contributing)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Usage](#-usage)
- [API Documentation](#-api-documentation)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🌟 Overview

The **AI-Powered Smart School Management System** is a modern, full-stack web application designed to streamline educational institution management. It combines traditional school management features with cutting-edge AI capabilities to enhance teaching and learning experiences.

### 🎯 Key Highlights

- 🔐 **Secure Authentication** - JWT-based authentication system
- 👥 **Role-Based Access** - Separate interfaces for Teachers and Students
- 📊 **Attendance Tracking** - Real-time attendance management
- 📝 **Assignment Management** - Create, submit, and track assignments
- 🤖 **AI Assistant** - Powered by Google Gemini or OpenAI
- 🎨 **Modern UI** - Beautiful, responsive design with Tailwind CSS
- ⚡ **Fast & Efficient** - Built with React and Node.js for optimal performance

---

## ✨ Features

### 👨‍🏫 For Teachers

- ✅ Mark and manage student attendance
- 📚 Create and distribute assignments
- 🤖 Generate lesson plans using AI
- 📝 Create quizzes automatically with AI
- 💬 Get teaching assistance from AI chatbot
- 📊 View student submissions and progress

### 👨‍🎓 For Students

- 📅 View attendance records
- 📖 Access and submit assignments
- 🤖 Get homework help from AI assistant
- 💡 Interactive learning support
- 📈 Track academic progress

### 🤖 AI-Powered Features

- **Smart Chat Assistant** - Get instant answers to educational queries
- **Lesson Plan Generator** - Create comprehensive lesson plans in seconds
- **Quiz Generator** - Automatically generate quizzes with multiple-choice questions
- **Educational Support** - Context-aware assistance for teaching and learning

---

## 🛠️ Tech Stack

### Frontend
![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/-Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/-React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white)
![Axios](https://img.shields.io/badge/-Axios-5A29E4?style=flat-square&logo=axios&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/-Express-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/-Mongoose-880000?style=flat-square&logo=mongoose&logoColor=white)
![JWT](https://img.shields.io/badge/-JWT-000000?style=flat-square&logo=json-web-tokens&logoColor=white)

### AI Integration
![Google Gemini](https://img.shields.io/badge/-Google_Gemini-4285F4?style=flat-square&logo=google&logoColor=white)
![OpenAI](https://img.shields.io/badge/-OpenAI-412991?style=flat-square&logo=openai&logoColor=white)

---

## 🏗️ Modern Architecture

<div align="center">

```mermaid
graph TB
    subgraph "Client Layer"
        A[React Frontend<br/>Vite + Tailwind CSS]
    end
    
    subgraph "API Gateway"
        B[Express.js Server<br/>RESTful API]
    end
    
    subgraph "Authentication"
        C[JWT Middleware<br/>Role-Based Access]
    end
    
    subgraph "Business Logic"
        D[Controllers]
        E[Services]
    end
    
    subgraph "Data Layer"
        F[MongoDB<br/>Mongoose ODM]
    end
    
    subgraph "External Services"
        G[Google Gemini AI<br/>OpenAI API]
    end
    
    A -->|HTTP/HTTPS| B
    B --> C
    C --> D
    D --> E
    E --> F
    E --> G
    
    style A fill:#61DAFB,stroke:#333,stroke-width:2px,color:#000
    style B fill:#339933,stroke:#333,stroke-width:2px,color:#fff
    style C fill:#000000,stroke:#333,stroke-width:2px,color:#fff
    style D fill:#FF6B6B,stroke:#333,stroke-width:2px,color:#fff
    style E fill:#4ECDC4,stroke:#333,stroke-width:2px,color:#fff
    style F fill:#47A248,stroke:#333,stroke-width:2px,color:#fff
    style G fill:#4285F4,stroke:#333,stroke-width:2px,color:#fff
```

</div>

### 🔄 Architecture Layers

#### 🎨 **Presentation Layer**
- **React Components** - Modular, reusable UI components
- **React Router** - Client-side routing and navigation
- **Tailwind CSS** - Utility-first styling
- **Axios** - HTTP client for API communication

#### 🔐 **Security Layer**
- **JWT Authentication** - Stateless token-based auth
- **Role-Based Access Control** - Teacher/Student permissions
- **Password Hashing** - bcrypt encryption
- **Protected Routes** - Middleware authorization

#### ⚙️ **Application Layer**
- **RESTful API** - Standard HTTP methods
- **MVC Pattern** - Model-View-Controller architecture
- **Service Layer** - Business logic separation
- **Error Handling** - Centralized error management

#### 💾 **Data Layer**
- **MongoDB** - NoSQL document database
- **Mongoose ODM** - Schema validation and modeling
- **Data Models** - User, Attendance, Assignment schemas
- **Indexing** - Optimized query performance

#### 🤖 **AI Integration Layer**
- **Google Gemini API** - Natural language processing
- **OpenAI API** - Alternative AI provider
- **Service Abstraction** - Unified AI interface
- **Context Management** - Conversation history

### 🔗 Data Flow

```
User Request → React Component → API Service → Express Route 
→ Auth Middleware → Controller → Service Layer → Database/AI API 
→ Response → React Component → UI Update
```

---

## 🚀 Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- ![Node.js](https://img.shields.io/badge/Node.js-v16+-339933?style=flat-square&logo=node.js) Node.js (v16 or higher)
- ![MongoDB](https://img.shields.io/badge/MongoDB-v6.0+-47A248?style=flat-square&logo=mongodb) MongoDB (local or Atlas)
- ![npm](https://img.shields.io/badge/npm-v8+-CB3837?style=flat-square&logo=npm) npm or yarn package manager

### Step 1: Clone the Repository

```bash
git clone https://github.com/sunbyte16/smart-school-management.git
cd smart-school-management
```

### Step 2: Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
copy .env.example .env
```

### Step 3: Configure Environment Variables

Edit `backend/.env` with your credentials:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key_here

# Choose ONE AI provider:
# Option 1: Google Gemini (Free tier available)
GEMINI_API_KEY=your_gemini_api_key

# Option 2: OpenAI (Requires credits)
# OPENAI_API_KEY=your_openai_api_key

NODE_ENV=development
```

#### 🔑 Getting API Keys

**Google Gemini API (Recommended - Free):**
1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy and paste into `.env`

**OpenAI API:**
1. Visit [OpenAI Platform](https://platform.openai.com/api-keys)
2. Create an account and add billing
3. Generate API key
4. Copy and paste into `.env`

### Step 4: Frontend Setup

```bash
# Navigate to frontend directory (from root)
cd frontend

# Install dependencies
npm install
```

### Step 5: Start the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

### Step 6: Access the Application

🌐 Open your browser and navigate to:
- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000

### Step 7: Demo Login Credentials

🔐 **Test the application with demo account:**

```
📧 Email:    skimar2233@gmail.com
🔑 Password: Admin@123
👤 Role:     Teacher (Full Access)
```

**Login at:** http://localhost:3000

---

## ⚙️ Configuration

### MongoDB Setup

**Option 1: MongoDB Atlas (Cloud - Recommended)**
1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Get connection string
4. Add to `.env` file

**Option 2: Local MongoDB**
```bash
# Install MongoDB locally
# Update .env with: MONGODB_URI=mongodb://localhost:27017/smart-school
```

### Environment Variables Reference

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `PORT` | Backend server port | No | 5000 |
| `MONGODB_URI` | MongoDB connection string | Yes | - |
| `JWT_SECRET` | Secret key for JWT tokens | Yes | - |
| `GEMINI_API_KEY` | Google Gemini API key | Yes* | - |
| `OPENAI_API_KEY` | OpenAI API key | Yes* | - |
| `NODE_ENV` | Environment mode | No | development |

*Either GEMINI_API_KEY or OPENAI_API_KEY is required

---

## 📖 Usage

### 1️⃣ Register an Account

- Navigate to http://localhost:3000
- Click "Register"
- Choose role: **Teacher** or **Student**
- Fill in details and submit

### 2️⃣ Login

- Enter your email and password
- Click "Login"

### 3️⃣ Explore Features

#### For Teachers:
- **Dashboard:** Overview of your classes
- **Attendance:** Mark student attendance
- **Assignments:** Create and manage assignments
- **AI Assistant:** Generate lesson plans and quizzes

#### For Students:
- **Dashboard:** View your academic overview
- **Attendance:** Check your attendance records
- **Assignments:** View and submit assignments
- **AI Assistant:** Get homework help

---

## 📡 API Documentation

### Authentication Endpoints

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "Sunil Sharma",
  "email": "Sunil@gmail.com",
  "password": "password123",
  "role": "teacher",
  "grade": "10th"
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "Ajay@gmail.com",
  "password": "password123"
}
```

### Attendance Endpoints

#### Mark Attendance (Teachers Only)
```http
POST /api/attendance
Authorization: Bearer {token}
Content-Type: application/json

{
  "studentId": "user_id",
  "date": "2024-01-15",
  "status": "present",
  "notes": "Optional notes"
}
```

#### Get Attendance Records
```http
GET /api/attendance?studentId={id}&startDate={date}&endDate={date}
Authorization: Bearer {token}
```

### Assignment Endpoints

#### Create Assignment (Teachers Only)
```http
POST /api/assignments
Authorization: Bearer {token}
Content-Type: application/json

{
  "title": "Math Homework",
  "description": "Complete exercises 1-10",
  "dueDate": "2024-01-20",
  "grade": "10th"
}
```

#### Get All Assignments
```http
GET /api/assignments?grade={grade}
Authorization: Bearer {token}
```

#### Submit Assignment (Students)
```http
POST /api/assignments/{assignmentId}/submit
Authorization: Bearer {token}
Content-Type: application/json

{
  "content": "Assignment submission content"
}
```

### AI Assistant Endpoints

#### Chat with AI
```http
POST /api/ai/chat
Authorization: Bearer {token}
Content-Type: application/json

{
  "messages": [
    {"role": "user", "content": "Explain photosynthesis"}
  ]
}
```

#### Generate Lesson Plan
```http
POST /api/ai/lesson-plan
Authorization: Bearer {token}
Content-Type: application/json

{
  "topic": "Photosynthesis",
  "grade": "10th"
}
```

#### Generate Quiz
```http
POST /api/ai/quiz
Authorization: Bearer {token}
Content-Type: application/json

{
  "topic": "World War II",
  "grade": "10th",
  "numQuestions": 5
}
```

---

## 📸 Screenshots

<div align="center">

### 🔐 Login & Registration Page
*Beautiful gradient interface with OAuth integration options*

![Login Page](./Login%20Page.png)

---

### 🏠 Dashboard - Teacher View
*Clean, card-based dashboard with quick access to all features*

![Dashboard](./Dashboard.png)

---

### 📊 Attendance Management
*Mark and track student attendance with ease*

![Attendance Management](./Attendance%20Management.png)

---

### 🤖 AI Assistant
*Intelligent educational assistant with chat, lesson plans, and quiz generation*

![AI Assistant](./AI%20Assistant.png)

</div>

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

### How to Contribute

1. **Fork the Project**
2. **Create your Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your Changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the Branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 📞 Contact

<div align="center">

### Made with ❤️ by **�𝕦�𝕟𝕚𝕝 �𝕙𝕒�𝕣𝕞𝕒**

[![GitHub](https://img.shields.io/badge/GitHub-sunbyte16-181717?style=for-the-badge&logo=github)](https://github.com/sunbyte16)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Sunil_Kumar-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/sunil-kumar-bb88bb31a/)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit_Now-FF6B6B?style=for-the-badge&logo=google-chrome&logoColor=white)](https://lively-dodol-cc397c.netlify.app)

**⭐ If you found this project helpful, please give it a star!**

</div>

---

## 🙏 Acknowledgments

- [React Documentation](https://reactjs.org/)
- [Node.js Documentation](https://nodejs.org/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Google Gemini AI](https://ai.google.dev/)
- [OpenAI](https://openai.com/)

---

<div align="center">

### 🌟 Star this repository if you find it helpful! 🌟

**Made with ❤️ by 𝕊𝕦𝕟𝕚𝕝 𝕊𝕙𝕒𝕣𝕞𝕒**

![Visitors](https://visitor-badge.laobi.icu/badge?page_id=sunbyte16.smart-school-management)
![GitHub stars](https://img.shields.io/github/stars/sunbyte16/smart-school-management?style=social)
![GitHub forks](https://img.shields.io/github/forks/sunbyte16/smart-school-management?style=social)

---

### 📱 Connect With Me

[![GitHub](https://img.shields.io/badge/GitHub-sunbyte16-181717?style=for-the-badge&logo=github)](https://github.com/sunbyte16)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Sunil_Kumar-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/sunil-kumar-bb88bb31a/)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit_Now-FF6B6B?style=for-the-badge&logo=google-chrome&logoColor=white)](https://lively-dodol-cc397c.netlify.app)

---

### Made with ❤️ by **𝕊���𝕝 𝕊�𝕒ight𝕣𝕞𝕒**

**© 2k25 𝕊𝕦𝕟𝕚𝕝 𝕊𝕙𝕒𝕣𝕞𝕒. All rights reserved.**

</div>
#   S m a r t - S c h o o l - M a n a g e m e n t - S y s t e m  
 