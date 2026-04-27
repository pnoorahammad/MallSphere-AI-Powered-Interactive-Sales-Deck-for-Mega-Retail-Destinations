# 🏗️ MallSphere - Architecture Document

Complete technical architecture for the MallSphere platform.

##┌─ System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌──────────────────┐  ┌──────────────────┐  ┌─────────────┐   │
│  │   Hero Section   │  │  Stats Section   │  │   Brands    │   │
│  │  (Video + CTA)   │  │  (Animations)    │  │    Grid     │   │
│  └──────────────────┘  └──────────────────┘  └─────────────┘   │
│                                                                   │
│  ┌──────────────────┐  ┌──────────────────┐  ┌─────────────┐   │
│  │  Events Cards    │  │  Leasing Form    │  │   CTA Sec   │   │
│  └──────────────────┘  └──────────────────┘  └─────────────┘   │
│                                                                   │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │             AI Chat Assistant (Floating)                   │ │
│  │  ┌──────────────┐         ┌──────────────────────────────┐ │ │
│  │  │  User Input  │────────→│  OpenAI API (GPT-4)          │ │ │
│  │  └──────────────┘         └──────────────────────────────┘ │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
                            ↓
                    [Axios HTTP Client]
                            ↓
┌─────────────────────────────────────────────────────────────────┐
│                   API LAYER (Next.js Routes)                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  POST /api/inquiries      GET /api/properties                   │
│  POST /api/ai/chat        POST /api/properties                  │
│  GET /api/events          POST /api/sponsorships                │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────────┐
│                  BUSINESS LOGIC LAYER                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌────────────────────┐  ┌────────────────────┐                │
│  │  Inquiry Handler   │  │  Property Service  │                │
│  └────────────────────┘  └────────────────────┘                │
│                                                                   │
│  ┌────────────────────┐  ┌────────────────────┐                │
│  │  AI Service        │  │  Event Service     │                │
│  │  (OpenAI)          │  │  (CRUD)            │                │
│  └────────────────────┘  └────────────────────┘                │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────────┐
│                  DATA ACCESS LAYER (Prisma ORM)                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  User Repository  │  Property Repository  │  Event Repository   │
│  Inquiry Repo     │  Brand Repository     │  Venue Repository    │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────────┐
│                   DATABASE LAYER (MongoDB)                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌──────────┐  ┌────────────┐  ┌─────────┐  ┌──────────────┐  │
│  │ users    │  │ properties │  │ events  │  │ inquiries    │  │
│  └──────────┘  └────────────┘  └─────────┘  └──────────────┘  │
│                                                                   │
│  ┌──────────┐  ┌────────────┐  ┌──────────┐  ┌──────────────┐  │
│  │ brands   │  │ venues     │  │ content  │  │ sponsorships │  │
│  └──────────┘  └────────────┘  └──────────┘  └──────────────┘  │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

## 📊 Data Flow Diagram

### User Inquiry Flow
```
User Form Input
    ↓
Client Validation
    ↓
POST /api/inquiries
    ↓
Server Validation
    ↓
Save to MongoDB
    ↓
Send Email (SendGrid)
    ↓
Return Success Response
    ↓
Show Confirmation Message
```

### AI Chat Flow
```
User Message
    ↓
POST /api/ai/chat
    ↓
Validate Message
    ↓
Send to OpenAI API
    ↓
Get Response
    ↓
Cache Response (Optional)
    ↓
Return to Client
    ↓
Display in Chat UI
```

## 🗄️ Database Schema

### Collections Structure

**users**
```javascript
{
  id: ObjectId,
  email: string (unique),
  name: string,
  role: enum['user', 'admin', 'sponsor', 'tenant'],
  company: string,
  phone: string,
  avatar: string (URL),
  createdAt: Date,
  updatedAt: Date
}
```

**properties**
```javascript
{
  id: ObjectId,
  name: string,
  location: string,
  area: number (sqft),
  yearOpened: number,
  stories: number,
  annualVisitors: number,
  annualRevenue: number,
  heroVideo: string (Cloudinary URL),
  images: string[] (URLs),
  createdAt: Date,
  updatedAt: Date
}
```

**inquiries**
```javascript
{
  id: ObjectId,
  name: string,
  email: string,
  phone: string,
  company: string,
  spaceType: enum['Retail', 'F&B', 'Office'],
  message: string,
  status: enum['new', 'contacted', 'qualified', 'won', 'lost'],
  venueId: ObjectId (ref),
  userId: ObjectId (ref),
  createdAt: Date,
  updatedAt: Date
}
```

**events**
```javascript
{
  id: ObjectId,
  title: string,
  description: string,
  startDate: Date,
  endDate: Date,
  location: string,
  eventType: enum['Concert', 'Fashion', 'Festival'],
  capacity: number,
  ticketPrice: number,
  image: string (URL),
  propertyId: ObjectId (ref),
  creatorId: ObjectId (ref),
  createdAt: Date,
  updatedAt: Date
}
```

## 🔄 Component Interaction

### Hero Section
```
HeroSection
├── Video Player (Pexels API)
├── Animated Text (Framer Motion)
├── CTA Buttons
│   ├── "Explore Experience"
│   └── "Schedule Demo"
├── Controls
│   ├── Play/Pause
│   └── Mute/Unmute
└── Scroll Indicator (GSAP Animation)
```

### Stats Section
```
StatsSection
├── Section Header
├── Stats Grid (4 columns)
│   ├── Stat Card
│   │   ├── Counter (useCounter hook)
│   │   ├── Label
│   │   └── Animation Line
│   └── (repeated x4)
└── CTA Button
```

### AI Assistant
```
AIAssistant
├── Floating Button
├── Chat Window
│   ├── Header
│   ├── Messages Container
│   │   ├── User Message
│   │   ├── Assistant Message
│   │   └── Thinking Indicator
│   └── Input Area
│       ├── Text Input
│       └── Send Button
└── (Uses aiAPI.chat hook)
```

## 🔌 API Integration Points

### External APIs

**OpenAI API**
```
Endpoint: https://api.openai.com/v1/chat/completions
Auth: Bearer {OPENAI_API_KEY}
Model: gpt-4-turbo
```

**Cloudinary API**
```
Endpoint: https://api.cloudinary.com/v1_1/{CLOUD_NAME}
Auth: API Key + Secret
Operations: Upload, Transform, Serve
```

**SendGrid API** (Optional)
```
Endpoint: https://api.sendgrid.com/v3/mail/send
Auth: Bearer {SENDGRID_API_KEY}
Usage: Transactional emails
```

## 🚀 Performance Optimizations

### Frontend
- Code splitting by route
- Image lazy loading
- CSS-in-JS optimization
- Service Worker caching
- Compression (Brotli)

### Backend
- Database indexing on frequently queried fields
- API response caching
- Request deduplication
- Query pagination
- Connection pooling

### Media
- Cloudinary CDN
- Image optimization
- WebP format support
- Lazy loading attributes

## 🔐 Security Layers

```
┌────────────────────────────┐
│  HTTPS/SSL Encryption      │
├────────────────────────────┤
│  CORS Policy               │
├────────────────────────────┤
│  Rate Limiting             │
├────────────────────────────┤
│  Input Validation          │
├────────────────────────────┤
│  SQL Injection Prevention   │
│  (via Prisma ORM)          │
├────────────────────────────┤
│  XSS Protection            │
├────────────────────────────┤
│  CSRF Tokens               │
├────────────────────────────┤
│  Environment Variables     │
│  (Secrets Management)      │
└────────────────────────────┘
```

## 📈 Scalability Plan

### Phase 1 (Current)
- Single MongoDB cluster
- Vercel serverless functions
- Basic caching

### Phase 2
- Read replicas for MongoDB
- Redis cache layer
- CDN for static assets

### Phase 3
- Microservices architecture
- Message queuing (Bull/RabbitMQ)
- Advanced analytics

### Phase 4
- Machine learning models
- Multi-region deployment
- Advanced personalization

## 🧪 Testing Strategy

### Unit Tests
```javascript
// Jest + React Testing Library
describe('HeroSection', () => {
  it('renders video player', () => {
    render(<HeroSection />);
    expect(screen.getByRole('region')).toBeInTheDocument();
  });
});
```

### Integration Tests
```javascript
// Test API + Database
describe('POST /api/inquiries', () => {
  it('saves inquiry to database', async () => {
    const response = await fetch('/api/inquiries', {
      method: 'POST',
      body: JSON.stringify(testData)
    });
    expect(response.ok).toBe(true);
  });
});
```

### E2E Tests
```javascript
// Playwright
test('complete inquiry submission flow', async ({ page }) => {
  await page.goto('/');
  await page.click('#leasing-section');
  await page.fill('[name="name"]', 'John Doe');
  await page.click('button:has-text("Send Inquiry")');
  await expect(page).toContainText('Thank you');
});
```

## 🎯 Deployment Architecture

```
┌─────────────────────┐
│   GitHub Repo       │
│   (Source Control)  │
└──────────┬──────────┘
           │
      ┌────┴────┐
      │          │
      ↓          ↓
  [Vercel]   [Render]
  Frontend   Backend
      │          │
      ↓          ↓
  Vercel CDN  Render Server
   (Global)    (Regional)
      │          │
      └────┬─────┘
           ↓
    [MongoDB Atlas]
    (Multi-region)
```

## 📞 Service Dependencies

- **Next.js** - Framework
- **React** - UI Library
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Frontend Animations
- **GSAP** - Scroll Animations
- **Prisma** - ORM
- **MongoDB** - Database
- **OpenAI** - AI/LLM
- **Vercel** - Frontend Hosting
- **Render** - Backend Hosting
- **Cloudinary** - Media CDN

---

**Architecture Document Complete ✅**
