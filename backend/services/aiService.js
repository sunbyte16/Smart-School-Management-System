const axios = require('axios');

class AIService {
  constructor() {
    this.geminiKey = process.env.GEMINI_API_KEY;
    this.openaiKey = process.env.OPENAI_API_KEY;
    this.useMock = process.env.USE_MOCK_AI === 'true';
    this.useGemini = !!this.geminiKey && !this.useMock;
    
    if (this.useMock) {
      console.log('AI Service initialized with: Mock AI (Demo Mode)');
    } else if (this.useGemini) {
      this.apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';
      this.apiKey = this.geminiKey;
      console.log('AI Service initialized with: Gemini 1.5 Flash');
    } else {
      this.apiUrl = 'https://api.openai.com/v1/chat/completions';
      this.apiKey = this.openaiKey;
      console.log('AI Service initialized with: OpenAI');
    }
  }

  async chat(messages) {
    try {
      // Use mock responses if enabled
      if (this.useMock) {
        return await this.chatMock(messages);
      }
      
      if (this.useGemini) {
        return await this.chatGemini(messages);
      } else {
        return await this.chatOpenAI(messages);
      }
    } catch (error) {
      console.error('AI Service Error:', error.response?.data || error.message);
      
      // Fallback to mock if API fails
      console.log('Falling back to mock AI responses...');
      return await this.chatMock(messages);
    }
  }

  async chatMock(messages) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const lastMessage = messages[messages.length - 1].content.toLowerCase();
    
    // Generate contextual responses based on keywords
    if (lastMessage.includes('machine learning') || lastMessage.includes('ml') || lastMessage.includes('ai')) {
      return `📚 **Machine Learning - Comprehensive Notes**

**What is Machine Learning?**
Machine Learning (ML) is a subset of Artificial Intelligence that enables computers to learn from data without being explicitly programmed. It focuses on developing algorithms that can identify patterns and make decisions.

**Types of Machine Learning:**

1. **Supervised Learning**
   - Uses labeled training data
   - Examples: Classification, Regression
   - Algorithms: Linear Regression, Decision Trees, Neural Networks
   - Use cases: Email spam detection, Price prediction

2. **Unsupervised Learning**
   - Works with unlabeled data
   - Examples: Clustering, Dimensionality Reduction
   - Algorithms: K-Means, PCA, Hierarchical Clustering
   - Use cases: Customer segmentation, Anomaly detection

3. **Reinforcement Learning**
   - Learns through trial and error
   - Agent receives rewards/penalties
   - Examples: Game playing, Robotics
   - Use cases: Self-driving cars, Game AI

**Key Concepts:**
• **Training Data:** Dataset used to train the model
• **Features:** Input variables used for prediction
• **Labels:** Output/target variable (in supervised learning)
• **Model:** Mathematical representation of patterns
• **Overfitting:** Model performs well on training but poorly on new data
• **Underfitting:** Model is too simple to capture patterns

**Popular Algorithms:**
- Linear Regression
- Logistic Regression
- Decision Trees
- Random Forest
- Support Vector Machines (SVM)
- Neural Networks
- K-Nearest Neighbors (KNN)

**Applications:**
✓ Image Recognition
✓ Natural Language Processing
✓ Recommendation Systems
✓ Fraud Detection
✓ Medical Diagnosis
✓ Autonomous Vehicles

**Getting Started:**
1. Learn Python programming
2. Study statistics and linear algebra
3. Practice with datasets (Kaggle, UCI ML Repository)
4. Use libraries: scikit-learn, TensorFlow, PyTorch

Would you like me to explain any specific concept in more detail?`;
    } else if (lastMessage.includes('notes') || lastMessage.includes('explain') || lastMessage.includes('what is')) {
      const topic = lastMessage.replace(/notes|explain|what is|about|create|on|the/gi, '').trim();
      return `📝 **Notes on ${topic.toUpperCase()}**

Here's a comprehensive overview:

**Definition:**
${topic.charAt(0).toUpperCase() + topic.slice(1)} is an important concept that involves understanding key principles and applications.

**Key Points:**
• Fundamental concepts and definitions
• Historical background and development
• Main principles and theories
• Practical applications
• Current trends and future directions

**Important Concepts:**
1. Core fundamentals
2. Advanced topics
3. Real-world applications
4. Best practices

**Study Tips:**
✓ Review regularly
✓ Practice with examples
✓ Connect concepts to real-world scenarios
✓ Create mind maps
✓ Discuss with peers

Would you like me to dive deeper into any specific aspect?`;
    } else if (lastMessage.includes('photosynthesis')) {
      return '🌱 **Photosynthesis Explained**\n\nPhotosynthesis is the process by which plants convert light energy into chemical energy. Plants use sunlight, water (H₂O), and carbon dioxide (CO₂) to produce glucose (C₆H₁₂O₆) and oxygen (O₂).\n\n**Equation:** 6CO₂ + 6H₂O + Light Energy → C₆H₁₂O₆ + 6O₂\n\n**Two Stages:**\n1. Light-dependent reactions (in thylakoids)\n2. Light-independent reactions/Calvin Cycle (in stroma)\n\nThis process occurs in chloroplasts and is essential for life on Earth!';
    } else if (lastMessage.includes('math') || lastMessage.includes('equation') || lastMessage.includes('algebra')) {
      return '🔢 **Mathematics Help**\n\nMathematics is the study of numbers, quantities, and shapes. To solve equations:\n\n**Steps:**\n1. Identify the unknown variable\n2. Use inverse operations to isolate it\n3. Perform the same operation on both sides\n4. Simplify and verify your answer\n\n**Key Concepts:**\n• Order of Operations (PEMDAS)\n• Properties of Equality\n• Factoring and Expanding\n• Graphing Functions\n\nWhat specific math topic would you like help with?';
    } else if (lastMessage.includes('history') || lastMessage.includes('war')) {
      return '📜 **History Study Guide**\n\nHistory helps us understand how past events shape our present. When studying historical events:\n\n**Consider:**\n• Causes and context\n• Key figures and leaders\n• Major events and battles\n• Lasting impact on society\n• Multiple perspectives\n\n**Study Tips:**\n✓ Create timelines\n✓ Make connections between events\n✓ Analyze primary sources\n✓ Understand cause and effect\n\nWhat historical period interests you?';
    } else if (lastMessage.includes('science') || lastMessage.includes('experiment')) {
      return '🔬 **Science Fundamentals**\n\nScience is the systematic study of the natural world through observation and experimentation.\n\n**Scientific Method:**\n1. Make observations\n2. Form a hypothesis\n3. Design and conduct experiments\n4. Analyze data\n5. Draw conclusions\n6. Communicate results\n\n**Branches of Science:**\n• Physics - Study of matter and energy\n• Chemistry - Study of substances and reactions\n• Biology - Study of living organisms\n• Earth Science - Study of our planet\n\nWhat scientific concept would you like to explore?';
    } else if (lastMessage.includes('programming') || lastMessage.includes('code') || lastMessage.includes('python')) {
      return '💻 **Programming Basics**\n\nProgramming is the process of creating instructions for computers to follow.\n\n**Key Concepts:**\n• Variables and Data Types\n• Control Structures (if/else, loops)\n• Functions and Methods\n• Object-Oriented Programming\n• Algorithms and Data Structures\n\n**Popular Languages:**\n- Python (beginner-friendly)\n- JavaScript (web development)\n- Java (enterprise applications)\n- C++ (system programming)\n\n**Getting Started:**\n1. Choose a language\n2. Practice daily\n3. Build projects\n4. Read documentation\n5. Join coding communities\n\nWhat programming topic interests you?';
    } else if (lastMessage.includes('hello') || lastMessage.includes('hi') || lastMessage.includes('hey')) {
      return `👋 Hello! I'm your AI educational assistant. I'm here to help you learn and understand various topics.\n\n**I can help you with:**\n• Explaining complex concepts\n• Creating study notes\n• Generating lesson plans\n• Making quizzes\n• Answering homework questions\n• Providing study strategies\n\n**Popular Topics:**\n- Machine Learning & AI\n- Mathematics\n- Science (Physics, Chemistry, Biology)\n- History\n- Programming\n- And much more!\n\nWhat would you like to learn about today?`;
    } else {
      return `🤖 **AI Educational Assistant**\n\nI'm here to help you learn! I can assist with:\n\n📚 **Subjects:**\n• Mathematics & Algebra\n• Science (Physics, Chemistry, Biology)\n• History & Social Studies\n• Computer Science & Programming\n• Machine Learning & AI\n• Language Arts\n\n✨ **Services:**\n• Explain concepts in simple terms\n• Create detailed study notes\n• Generate practice quizzes\n• Help with homework\n• Provide study tips and strategies\n\n**Try asking me:**\n- "Explain machine learning"\n- "Create notes about photosynthesis"\n- "Help me with algebra"\n- "What is the scientific method?"\n\nWhat topic would you like to explore?`;
    }
  }

  async chatOpenAI(messages) {
    const response = await axios.post(
      this.apiUrl,
      {
        model: 'gpt-3.5-turbo',
        messages: messages,
        temperature: 0.7,
        max_tokens: 1000
      },
      {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data.choices[0].message.content;
  }

  async chatGemini(messages) {
    // Convert OpenAI format to Gemini format
    const prompt = messages.map(m => `${m.role}: ${m.content}`).join('\n');
    
    const response = await axios.post(
      `${this.apiUrl}?key=${this.apiKey}`,
      {
        contents: [{
          parts: [{
            text: prompt
          }]
        }]
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data.candidates[0].content.parts[0].text;
  }

  async generateLessonPlan(topic, grade) {
    if (this.useMock) {
      await new Promise(resolve => setTimeout(resolve, 1500));
      return `📚 LESSON PLAN: ${topic} (${grade} Grade)

🎯 LEARNING OBJECTIVES:
• Understand the fundamental concepts of ${topic}
• Apply knowledge through practical examples
• Develop critical thinking skills related to ${topic}

📖 LESSON STRUCTURE:

1. INTRODUCTION (10 minutes)
   - Hook: Engage students with a real-world example
   - Review prior knowledge
   - State learning objectives

2. MAIN CONTENT (25 minutes)
   - Explain key concepts of ${topic}
   - Use visual aids and demonstrations
   - Interactive discussion with students
   - Provide examples and non-examples

3. PRACTICE ACTIVITIES (15 minutes)
   - Group work: Students work in pairs
   - Individual practice problems
   - Hands-on activities related to ${topic}

4. ASSESSMENT (5 minutes)
   - Quick quiz or exit ticket
   - Check for understanding
   - Address misconceptions

5. CLOSURE (5 minutes)
   - Summarize key points
   - Preview next lesson
   - Assign homework

📝 MATERIALS NEEDED:
• Whiteboard and markers
• Handouts with practice problems
• Visual aids or multimedia resources

🏠 HOMEWORK:
Complete worksheet on ${topic} and prepare questions for next class.

✨ Created by Smart School AI Assistant`;
    }

    const messages = [
      {
        role: 'system',
        content: 'You are an experienced teacher assistant helping create lesson plans.'
      },
      {
        role: 'user',
        content: `Create a detailed lesson plan for ${grade} grade students on the topic: ${topic}`
      }
    ];

    return await this.chat(messages);
  }

  async generateQuiz(topic, grade, numQuestions = 5) {
    if (this.useMock) {
      await new Promise(resolve => setTimeout(resolve, 1500));
      return `📝 QUIZ: ${topic} (${grade} Grade)
${numQuestions} Multiple Choice Questions

Question 1: What is the main concept of ${topic}?
A) Option A - Basic definition
B) Option B - Advanced concept
C) Option C - Related topic
D) Option D - Incorrect option
✓ Correct Answer: A

Question 2: Which of the following best describes ${topic}?
A) First characteristic
B) Second characteristic
C) Third characteristic
D) Fourth characteristic
✓ Correct Answer: B

Question 3: How does ${topic} apply in real-world scenarios?
A) Practical application 1
B) Practical application 2
C) Practical application 3
D) Theoretical concept only
✓ Correct Answer: A

Question 4: What is an important principle related to ${topic}?
A) Fundamental principle
B) Secondary principle
C) Unrelated concept
D) Common misconception
✓ Correct Answer: A

Question 5: Which statement about ${topic} is TRUE?
A) Incorrect statement
B) Partially correct statement
C) Completely correct statement
D) Misleading statement
✓ Correct Answer: C

📊 Answer Key: 1-A, 2-B, 3-A, 4-A, 5-C

✨ Generated by Smart School AI Assistant`;
    }

    const messages = [
      {
        role: 'system',
        content: 'You are an educational quiz generator.'
      },
      {
        role: 'user',
        content: `Generate ${numQuestions} multiple choice questions for ${grade} grade students on: ${topic}`
      }
    ];

    return await this.chat(messages);
  }
}

module.exports = new AIService();
