# Contributing to Smart School Management System

First off, thank you for considering contributing to Smart School Management System! 🎉

## 🤝 How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with:
- Clear title and description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Your environment (OS, Node version, etc.)

### Suggesting Features

We love new ideas! Please create an issue with:
- Clear description of the feature
- Why it would be useful
- Possible implementation approach

### Pull Requests

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Make your changes**
   - Follow the existing code style
   - Add comments for complex logic
   - Update documentation if needed

4. **Test your changes**
   ```bash
   # Backend tests
   cd backend
   npm test

   # Frontend tests
   cd frontend
   npm test
   ```

5. **Commit your changes**
   ```bash
   git commit -m "Add: Amazing new feature"
   ```
   
   Use conventional commits:
   - `Add:` for new features
   - `Fix:` for bug fixes
   - `Update:` for updates to existing features
   - `Docs:` for documentation changes
   - `Style:` for formatting changes
   - `Refactor:` for code refactoring

6. **Push to your fork**
   ```bash
   git push origin feature/AmazingFeature
   ```

7. **Open a Pull Request**

## 📋 Development Guidelines

### Code Style

- Use meaningful variable and function names
- Keep functions small and focused
- Add JSDoc comments for functions
- Use ES6+ features
- Follow React best practices

### File Structure

```
backend/
├── config/       # Configuration files
├── controllers/  # Route controllers
├── middleware/   # Custom middleware
├── models/       # Database models
├── routes/       # API routes
└── services/     # Business logic

frontend/
└── src/
    ├── components/  # Reusable components
    ├── pages/       # Page components
    └── services/    # API services
```

### Commit Messages

Write clear, concise commit messages:
```
Add: User authentication with JWT
Fix: Attendance marking bug for multiple students
Update: AI service to use Gemini 2.0
Docs: Add API documentation for assignments
```

## 🧪 Testing

Before submitting a PR:
- Test all features manually
- Ensure no console errors
- Check responsive design
- Verify API endpoints work
- Test with different user roles

## 📝 Documentation

Update documentation when:
- Adding new features
- Changing API endpoints
- Modifying environment variables
- Updating dependencies

## ❓ Questions?

Feel free to:
- Open an issue for questions
- Contact the maintainer
- Join our community discussions

---

**Made with ❤️ by 𝕊𝕦𝕟𝕚𝕝 𝕊𝕙𝕒𝕣𝕞𝕒**

© 2k25 𝕊𝕦𝕟𝕚𝕝 𝕊𝕙𝕒𝕣𝕞𝕒. All rights reserved.
