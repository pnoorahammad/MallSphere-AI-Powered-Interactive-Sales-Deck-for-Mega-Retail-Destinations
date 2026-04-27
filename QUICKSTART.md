# 🚀 MallSphere - Quick Start Guide

Get up and running in **5 minutes** ⚡

## 1️⃣ Install Dependencies (2 minutes)

```bash
cd luxe-mall
npm install
```

## 2️⃣ Setup Environment (1 minute)

```bash
cp .env.example .env.local
```

For local development, you can use mock data. Skip OpenAI setup for now.

## 3️⃣ Start Development Server (1 minute)

```bash
npm run dev
```

## 4️⃣ Open Your Browser (1 minute)

Navigate to: **http://localhost:3000**

## ✅ You're Live!

You should see:
- 🎬 Cinematic hero section
- 📊 Animated statistics  
- 🎨 Brand showcase
- 🎭 Events section
- 🏪 Leasing form
- 💬 AI chat assistant

## 🎮 Try These Features

### 1. Hero Section
- Click "Explore Experience" or "Schedule Demo"
- Use video controls (top right)

### 2. Animated Numbers
- Scroll down to see statistics animate
- GSAP-powered counter effects

### 3. Brand Cards
- Hover over brand cards to see animations
- Smooth scale and color transitions

### 4. Event Booking
- View upcoming events
- Click "Book Now" on any event

### 5. Leasing Form
- Fill in the inquiry form
- Submit to test API
- Check console for response

### 6. AI Chat
- Click the gold button (bottom right)
- Ask about "leasing", "events", "brands"
- Get intelligent responses

## 📁 Key Files to Know

| File | Purpose |
|------|---------|
| `src/app/page.tsx` | Main page with all sections |
| `src/components/sections/` | Individual page sections |
| `src/app/api/` | Backend API routes |
| `src/lib/api.ts` | API client |
| `src/hooks/` | Custom animation hooks |
| `tailwind.config.ts` | Styling & animations |

## 🎨 Customize Content

### Change Logo/Branding
```typescript
// src/components/layout/Navbar.tsx - Line 35
<span className="bg-gradient-to-r from-luxury-gold to-amber-400 bg-clip-text text-transparent">
  MallSphere  // ← Change this
</span>
```

### Add Your Own Stats
```typescript
// src/components/sections/StatsSection.tsx - Around line 18
const stats = [
  { value: 50, label: "Your Label", suffix: "+" },
  // Add more stats here
];
```

### Modify Colors
```javascript
// tailwind.config.ts
colors: {
  "luxury-gold": "#d4af37",  // Change hex code
  // ...
}
```

## 🔌 Connect to Your APIs

### Change API Endpoint
```typescript
// src/lib/api.ts - Line 4
const API_BASE_URL = "YOUR_API_URL_HERE";
```

### Test API Submissions
1. Fill the leasing form
2. Click "Send Inquiry"
3. Check browser console (F12)
4. See API response

## 🤖 Enable Real AI Chat

1. Get OpenAI API key from https://platform.openai.com/api-keys
2. Add to `.env.local`:
   ```env
   OPENAI_API_KEY=sk_test_your_key_here
   ```
3. Uncomment the actual OpenAI code in `src/app/api/ai/chat/route.ts`
4. Restart dev server

## 📱 Test Responsiveness

- **Desktop:** Full features, optimized layout
- **Tablet:** Responsive grid, touch-friendly
- **Mobile:** Single column, large buttons

Open DevTools (F12) and use device emulation!

## 🧪 Test Different Sections

### Quick Navigation
```bash
# Hero Section (default)
http://localhost:3000#home

# Stats Section
http://localhost:3000#experience

# Brands Section
http://localhost:3000#brands

# Events Section
http://localhost:3000#events

# Leasing Section
http://localhost:3000#leasing
```

## 🔍 Debug Information

### View Component Props
```bash
# React DevTools Browser Extension
Open DevTools → React tab → Inspect components
```

### Check API Responses
```bash
# Network tab
F12 → Network → Make a request → See response
```

### Console Logs
```bash
# Browser console
F12 → Console → See any errors/logs
```

## 💡 Useful Commands

```bash
# Format code
npm run format

# Check types
npm run type-check

# Lint code
npm run lint

# Database operations
npx prisma db push       # Sync schema
npx prisma studio       # Open database UI
npx prisma generate     # Update client
```

## 🎬 Next: Add Your Content

1. **Update Property Info**
   - Edit `src/app/api/properties/route.ts`
   - Change property name, location, metrics

2. **Add Real Events**
   - Update events in `EventsSection.tsx`
   - Link to real event data

3. **Connect Database**
   - Setup MongoDB Atlas
   - Update `.env.local` with connection string
   - Run Prisma migrations

4. **Deploy Online**
   - Push to GitHub
   - Connect to Vercel
   - See DEPLOYMENT.md for full steps

## 🆘 Troubleshooting

### Port 3000 Already in Use
```bash
# Use different port
npm run dev -- -p 3001
```

### CSS/Styling Not Applied
```bash
# Rebuild Tailwind
npm run build
npm run dev
```

### Components Not Animating
- Check browser console for errors (F12)
- Make sure Framer Motion is installed: `npm list framer-motion`
- Check GSAP: `npm list gsap`

### API Errors
- Verify `.env.local` is configured
- Check API route file exists
- Review browser Network tab

## 📚 Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [GSAP Docs](https://greensock.com/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

## 🎓 Project Structure

```
luxe-mall/
├── src/
│   ├── app/page.tsx          ← Main page
│   ├── components/           ← React components
│   ├── hooks/               ← Custom hooks
│   ├── lib/                 ← Utilities
│   └── app/api/             ← Backend APIs
├── prisma/                  ← Database
└── public/                  ← Static files
```

## 🚀 Quick Wins to Try

- [ ] Change the hero tagline
- [ ] Modify the brand cards
- [ ] Update the statistics
- [ ] Test the leasing form
- [ ] Chat with AI assistant
- [ ] Resize browser to test responsive
- [ ] Open DevTools and inspect elements
- [ ] Check console for no errors
- [ ] Test dark mode (Tailwind)
- [ ] Change the accent color (gold)

## ✨ Success Checklist

- ✅ `npm install` completed
- ✅ `.env.local` created
- ✅ `npm run dev` running
- ✅ Browser shows http://localhost:3000
- ✅ Page loads without errors
- ✅ Animations play smoothly
- ✅ All sections visible
- ✅ Forms interactive
- ✅ AI chat opens/closes
- ✅ Ready to customize!

---

## 🎉 You're Ready!

Your MallSphere platform is live and ready to customize.

**Need help?** Check:
- PROJECT_SUMMARY.md (detailed overview)
- DEPLOYMENT.md (deployment guide)
- ARCHITECTURE.md (technical details)

**Happy coding! 🚀**
