# 🚀 Deployment Guide

Complete guide to deploy Smart School Management System to production.

## 📋 Pre-Deployment Checklist

### Backend
- [ ] Update MongoDB URI for production
- [ ] Set strong JWT_SECRET (minimum 32 characters)
- [ ] Configure CORS for production domain
- [ ] Set NODE_ENV=production
- [ ] Add rate limiting
- [ ] Enable HTTPS
- [ ] Set up error logging
- [ ] Configure backup strategy

### Frontend
- [ ] Update API URLs for production
- [ ] Build optimized production bundle
- [ ] Configure CDN (optional)
- [ ] Enable compression
- [ ] Set up analytics (optional)
- [ ] Test on multiple browsers

### Security
- [ ] Remove all console.logs
- [ ] Validate all user inputs
- [ ] Implement rate limiting
- [ ] Add CSRF protection
- [ ] Enable HTTPS only
- [ ] Set secure cookie flags
- [ ] Update dependencies

---

## 🌐 Deployment Options

### Option 1: Vercel (Frontend) + Railway (Backend)

#### Frontend on Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Set root directory to `frontend`
   - Add environment variables (if needed)
   - Deploy!

3. **Configure Environment**
   ```env
   VITE_API_URL=https://your-backend-url.railway.app
   ```

#### Backend on Railway

1. **Go to [railway.app](https://railway.app)**

2. **Create New Project**
   - Connect GitHub repository
   - Select `backend` directory

3. **Add Environment Variables**
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_atlas_uri
   JWT_SECRET=your_production_jwt_secret
   GEMINI_API_KEY=your_gemini_api_key
   NODE_ENV=production
   ```

4. **Deploy**
   - Railway will auto-deploy on push

---

### Option 2: Heroku (Full Stack)

#### Backend

1. **Install Heroku CLI**
   ```bash
   npm install -g heroku
   ```

2. **Login to Heroku**
   ```bash
   heroku login
   ```

3. **Create Heroku App**
   ```bash
   cd backend
   heroku create your-app-name-backend
   ```

4. **Set Environment Variables**
   ```bash
   heroku config:set MONGODB_URI=your_mongodb_uri
   heroku config:set JWT_SECRET=your_jwt_secret
   heroku config:set GEMINI_API_KEY=your_gemini_key
   heroku config:set NODE_ENV=production
   ```

5. **Deploy**
   ```bash
   git push heroku main
   ```

#### Frontend

1. **Build Frontend**
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy to Netlify/Vercel**
   - Drag and drop `dist` folder
   - Or use CLI deployment

---

### Option 3: DigitalOcean/AWS (VPS)

#### Setup Server

1. **Create Droplet/EC2 Instance**
   - Ubuntu 22.04 LTS
   - Minimum 2GB RAM

2. **SSH into Server**
   ```bash
   ssh root@your-server-ip
   ```

3. **Install Node.js**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

4. **Install MongoDB**
   ```bash
   wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
   echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
   sudo apt-get update
   sudo apt-get install -y mongodb-org
   sudo systemctl start mongod
   sudo systemctl enable mongod
   ```

5. **Install Nginx**
   ```bash
   sudo apt-get install nginx
   ```

6. **Clone Repository**
   ```bash
   git clone https://github.com/sunbyte16/smart-school-management.git
   cd smart-school-management
   ```

7. **Setup Backend**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Edit .env with production values
   nano .env
   ```

8. **Setup Frontend**
   ```bash
   cd ../frontend
   npm install
   npm run build
   ```

9. **Configure Nginx**
   ```bash
   sudo nano /etc/nginx/sites-available/smart-school
   ```

   Add:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       # Frontend
       location / {
           root /path/to/smart-school-management/frontend/dist;
           try_files $uri $uri/ /index.html;
       }

       # Backend API
       location /api {
           proxy_pass http://localhost:5000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

10. **Enable Site**
    ```bash
    sudo ln -s /etc/nginx/sites-available/smart-school /etc/nginx/sites-enabled/
    sudo nginx -t
    sudo systemctl restart nginx
    ```

11. **Setup PM2 for Backend**
    ```bash
    sudo npm install -g pm2
    cd /path/to/smart-school-management/backend
    pm2 start server.js --name smart-school-backend
    pm2 startup
    pm2 save
    ```

12. **Setup SSL with Let's Encrypt**
    ```bash
    sudo apt-get install certbot python3-certbot-nginx
    sudo certbot --nginx -d your-domain.com
    ```

---

## 🔒 Production Environment Variables

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/smart-school?retryWrites=true&w=majority
JWT_SECRET=your_super_secure_jwt_secret_minimum_32_characters_long
GEMINI_API_KEY=your_production_gemini_api_key
NODE_ENV=production
CORS_ORIGIN=https://your-frontend-domain.com
```

### Frontend
Update `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL || 'http://localhost:5000',
        changeOrigin: true
      }
    }
  }
});
```

---

## 📊 Monitoring & Maintenance

### Setup Monitoring

1. **Backend Logs**
   ```bash
   pm2 logs smart-school-backend
   ```

2. **MongoDB Monitoring**
   - Use MongoDB Atlas monitoring
   - Set up alerts for high usage

3. **Error Tracking**
   - Integrate Sentry or similar service
   - Monitor API response times

### Backup Strategy

1. **Database Backups**
   ```bash
   # Daily backup script
   mongodump --uri="your_mongodb_uri" --out=/backups/$(date +%Y%m%d)
   ```

2. **Code Backups**
   - Keep GitHub repository updated
   - Tag releases

### Updates

```bash
# Pull latest changes
git pull origin main

# Update backend
cd backend
npm install
pm2 restart smart-school-backend

# Update frontend
cd ../frontend
npm install
npm run build
```

---

## 🐛 Troubleshooting

### Common Issues

**CORS Errors**
- Update CORS_ORIGIN in backend .env
- Check Nginx proxy settings

**Database Connection Failed**
- Verify MongoDB URI
- Check IP whitelist in MongoDB Atlas
- Ensure network connectivity

**API Not Responding**
- Check PM2 status: `pm2 status`
- View logs: `pm2 logs`
- Restart: `pm2 restart smart-school-backend`

**Frontend Not Loading**
- Check Nginx configuration
- Verify build files exist
- Check browser console for errors

---

## 📞 Support

For deployment issues:
- Check logs first
- Review this guide
- Open an issue on GitHub
- Contact: skimar2233@gmail.com

---

**Made with ❤️ by 𝕊𝕦𝕟𝕚𝕝 𝕊𝕙𝕒𝕣𝕞𝕒**

© 2k25 𝕊𝕦𝕟𝕚𝕝 𝕊𝕙𝕒𝕣𝕞𝕒. All rights reserved.
