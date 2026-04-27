# MallSphere

AI‑powered interactive sales deck + premium mall experience built with Next.js App Router.

## Tech stack

- **Frontend**: Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, Framer Motion, GSAP
- **Backend**: Next.js Route Handlers (`src/app/api/*`)
- **Database (optional)**: Prisma + MongoDB (used by `/api/inquiries` when `DATABASE_URL` is set)

## Entry points

- **UI**: `src/app/page.tsx` (composes all sections)
- **Layout**: `src/app/layout.tsx`
- **API routes**:
  - `POST /api/ai/chat` → `src/app/api/ai/chat/route.ts` (currently mock responses)
  - `GET /api/properties` → `src/app/api/properties/route.ts` (mock data)
  - `GET/POST /api/inquiries` → `src/app/api/inquiries/route.ts` (MongoDB via Prisma if configured)

## Local setup

### 1) Install

```bash
cd luxe-mall
npm install
```

### 2) Environment variables

```bash
copy .env.example .env.local
```

Edit `.env.local` as needed.

### 3) (Optional) Enable MongoDB persistence for inquiries

If you want `/api/inquiries` to save to MongoDB:

```bash
npm run db:generate
npm run db:push
```

### 4) Run

```bash
npm run dev
```

Open `http://localhost:3000`.

## Useful scripts

- `npm run dev`: start dev server
- `npm run build`: production build (webpack)
- `npm start`: start production server (after build)
- `npm run type-check`: TypeScript check
- `npm run lint`: ESLint (flat config)
- `npm run format`: format `src/`
- `npm run db:generate`: regenerate Prisma Client
- `npm run db:push`: sync Prisma schema to MongoDB

## Expected UI

Single landing page with:

- Cinematic hero section
- Animated stats section
- Brand showcase
- Events section
- Leasing inquiry form (submits to `/api/inquiries`)
- Floating AI assistant (talks to `/api/ai/chat`)

## Manual test checklist

- **Home renders**: no red errors in console
- **AI chat**: open bottom-right widget → send “leasing” → gets a response
- **Inquiry form**: submit → success state shown
- **API sanity**:
  - `GET http://localhost:3000/api/properties`
  - `GET http://localhost:3000/api/inquiries`

## Deployment (recommended: Vercel)

This repo is a single Next.js app (UI + API routes) so you can deploy it as **one Vercel project**.

### Vercel env vars

- `DATABASE_URL` (optional, for inquiries persistence)
- `OPENAI_API_KEY` (optional, only if you wire real OpenAI calls)
- `NEXT_PUBLIC_API_URL` (optional; usually leave unset on Vercel so it uses same-origin `/api`)

### Deploy steps

1. Push to GitHub
2. Import repo in Vercel
3. Set env vars
4. Deploy

## GitHub push commands

```bash
git init
git add .
git commit -m "Final production-ready version"
git branch -M main
git remote add origin https://github.com/pnoorahammad/MallSphere-AI-Powered-Interactive-Sales-Deck-for-Mega-Retail-Destinations.git
git push -u origin main
```
