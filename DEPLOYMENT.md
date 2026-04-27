# 🚀 MallSphere - Deployment Guide

Complete step-by-step instructions for deploying MallSphere to production.

## 📋 Pre-Deployment Checklist

- [ ] Node.js 18+ installed
- [ ] Git repository initialized
- [ ] GitHub account created
- [ ] MongoDB Atlas account
- [ ] Vercel account (for frontend)
- [ ] Render/Railway account (for backend)
- [ ] Cloudinary account (for media)
- [ ] OpenAI API key (optional)

## 🔧 Local Development Setup

```bash
# 1. Clone repository
git clone <your-repo-url>
cd luxe-mall

# 2. Install dependencies
npm install

# 3. Create environment file
cp .env.example .env.local

# 4. Update .env.local with your credentials
DATABASE_URL=mongodb+srv://user:pass@cluster.mongodb.net/mallsphere
OPENAI_API_KEY=sk_test_xxx
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# 5. Setup database
npx prisma db push
npx prisma generate

# 6. Start dev server
npm run dev
```

## 📦 MongoDB Atlas Setup

### Create Cluster
1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up / Log in
3. Click "Create" → Select "M0 Free"
4. Choose region (closest to your users)
5. Create cluster

### Create Database User
1. Go to "Database Access"
2. Click "Add New Database User"
3. Set username & auto-generate password
4. Add this user to admin database
5. Copy password securely

### Get Connection String
1. Go to "Clusters" → "Connect"
2. Choose "Drivers"
3. Copy connection string
4. Replace `<password>` with actual password
5. Replace `myFirstDatabase` with `mallsphere`

Connection string format:
```
mongodb+srv://username:password@cluster-name.mongodb.net/mallsphere?retryWrites=true&w=majority
```

### Add IP Whitelist
1. Go to "Network Access"
2. Click "Add IP Address"
3. For development: Add your IP
4. For production: Add 0.0.0.0/0 (all IPs)

## 🌐 Frontend Deployment (Vercel)

### Step 1: Prepare GitHub Repository

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial MallSphere commit"

# Add remote
git remote add origin https://github.com/yourusername/mallsphere.git

# Push to main
git branch -M main
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Choose "Import Git Repository"
4. Select your GitHub repo
5. Configure project:
   - Framework: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: `.next`

### Step 3: Add Environment Variables

In Vercel Dashboard → Settings → Environment Variables:

```
NEXT_PUBLIC_API_URL=https://your-api-domain.com/api
DATABASE_URL=mongodb+srv://prod_user:pass@cluster.mongodb.net/mallsphere
OPENAI_API_KEY=sk_live_xxx
NEXTAUTH_SECRET=your-32-char-secret-key
NEXTAUTH_URL=https://your-domain.vercel.app
```

### Step 4: Deploy

Click "Deploy" button. Vercel will:
- Build your Next.js app
- Run optimizations
- Deploy to CDN globally
- Assign preview URLs

## 🛠️ Backend Deployment (Render.com)

### Step 1: Create Render Account

1. Go to [render.com](https://render.com)
2. Sign up with GitHub
3. Create new "Web Service"

### Step 2: Connect GitHub

1. Select your repository
2. Choose main branch
3. Set name: `mallsphere-api`

### Step 3: Configure Build Settings

- **Runtime:** Node
- **Build Command:** `npm install`
- **Start Command:** `npm start`
- **Region:** Choose closest to users

### Step 4: Add Environment Variables

In Render Dashboard → Environment:

```
DATABASE_URL=mongodb+srv://prod_user:pass@cluster.mongodb.net/mallsphere
OPENAI_API_KEY=sk_live_xxx
NODE_ENV=production
NEXTAUTH_SECRET=your-32-char-secret
```

### Step 5: Deploy

- Click "Create Web Service"
- Render builds and deploys automatically
- Get your API URL (e.g., `https://mallsphere-api.onrender.com`)

## 📨 Email Service Setup (SendGrid - Optional)

### Create Account
1. Go to [sendgrid.com](https://sendgrid.com)
2. Sign up
3. Create API key

### Add to Environment

```env
SENDGRID_API_KEY=SG.xxx
SENDGRID_FROM_EMAIL=noreply@mallsphere.com
```

### Use in Code

```javascript
// In API routes
import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

await sgMail.send({
  to: 'recipient@example.com',
  from: process.env.SENDGRID_FROM_EMAIL,
  subject: 'New Inquiry',
  html: '<p>You have a new inquiry...</p>'
});
```

## 📸 Cloudinary Setup (Optional)

### Create Account
1. Go to [cloudinary.com](https://cloudinary.com)
2. Sign up
3. Copy credentials

### Add to Environment

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### Use in Code

```javascript
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Upload file
const result = await cloudinary.uploader.upload(filePath);
```

## 🔗 Connect Frontend to Backend

Update `.env.local` (frontend):

```env
NEXT_PUBLIC_API_URL=https://mallsphere-api.onrender.com/api
```

This ensures all API calls go to your production backend.

## ✅ Post-Deployment Checklist

- [ ] Frontend loads at https://your-domain.vercel.app
- [ ] API responds at https://mallsphere-api.onrender.com/api/properties
- [ ] Database connection working
- [ ] Environment variables set correctly
- [ ] CORS configured (if needed)
- [ ] SSL certificates working
- [ ] Custom domain configured (optional)
- [ ] Analytics/monitoring set up

## 🧪 Testing Production

```bash
# Test API
curl https://mallsphere-api.onrender.com/api/properties

# Test inquiries
curl -X POST https://mallsphere-api.onrender.com/api/inquiries \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com"}'

# Test AI chat
curl -X POST https://mallsphere-api.onrender.com/api/ai/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Tell me about leasing"}'
```

## 🔍 Monitoring & Debugging

### Vercel Logs
```bash
# View logs
vercel logs <deployment-url>
```

### Render Logs
- Dashboard → Logs tab
- Real-time streaming of server output

### MongoDB Monitoring
- Atlas Dashboard → Monitoring
- View query performance
- Check database usage

## 🆘 Troubleshooting

### 502 Bad Gateway

**Cause:** Backend not responding

**Fix:**
```bash
# Check Render logs for errors
# Verify environment variables
# Restart service in Render dashboard
```

### Database Connection Failed

**Cause:** IP not whitelisted or credentials wrong

**Fix:**
```bash
# Verify connection string
# Check MongoDB Atlas whitelist
# Test connection locally first
```

### CORS Errors

**Add CORS headers to API:**
```javascript
// src/app/api/route.ts
export async function POST(request) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'Content-Type': 'application/json',
  };
  // ... rest of handler
}
```

## 📊 Performance Optimization

### Image Optimization
Use Next.js Image component:
```jsx
import Image from 'next/image';

<Image
  src="/hero.jpg"
  alt="Hero"
  width={1920}
  height={1080}
  priority
/>
```

### Video Optimization
```html
<video preload="metadata" muted autoPlay>
  <source src="/hero.mp4" type="video/mp4" />
</video>
```

### Bundle Analysis
```bash
npm run build
npm install --save-dev @next/bundle-analyzer

# Update next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({})

# Run analysis
ANALYZE=true npm run build
```

## 🚀 Custom Domain Setup

### Vercel Custom Domain
1. Vercel Dashboard → Settings → Domains
2. Add your domain
3. Update DNS records (CNAME)
4. SSL auto-configured

### Configure in .env
```env
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
NEXTAUTH_URL=https://yourdomain.com
```

## 📈 Setup Analytics

### Google Analytics
1. Create GA4 property
2. Get measurement ID
3. Add to _document or _app:

```jsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout() {
  return (
    <>
      <GoogleAnalytics gaId="G-xxxxxxxxxx" />
      {/* ... */}
    </>
  )
}
```

## 🔐 Security Best Practices

- [ ] Never commit `.env` file
- [ ] Use environment variables for secrets
- [ ] Enable HTTPS (auto on Vercel)
- [ ] Add rate limiting
- [ ] Validate all inputs
- [ ] Use parameterized queries (Prisma does this)
- [ ] Keep dependencies updated

## 📞 Support

For deployment issues:
- Vercel Docs: https://vercel.com/docs
- Render Docs: https://render.com/docs
- MongoDB Docs: https://docs.mongodb.com/

---

**Deployment Guide Complete! 🎉**
