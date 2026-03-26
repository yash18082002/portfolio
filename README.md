# Yash Agarwal Portfolio - Next.js

A modern, animated portfolio built with Next.js 14, featuring Vercel Analytics and Speed Insights.

## Features

- ⚡ **Next.js 14** with App Router
- 📊 **Vercel Analytics** - Track page views, unique visitors, referrers
- 🚀 **Vercel Speed Insights** - Monitor Core Web Vitals
- 🌙 **Dark/Light Theme** with fun Star Wars messages
- ✨ **Smooth Animations** - Cursor follower, scroll reveals
- 📱 **Fully Responsive** - Mobile menu, adaptive layouts

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel

1. Push to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com/new)
3. Analytics is automatically enabled!

Or use the CLI:
```bash
npm i -g vercel
vercel
```

### Enable Analytics

Analytics is already integrated! Just deploy to Vercel and it will automatically start collecting data.

To view analytics:
1. Go to your Vercel Dashboard
2. Select your project
3. Click on "Analytics" tab

## Project Structure

```
├── app/
│   ├── globals.css      # All styles
│   ├── layout.tsx       # Root layout with Analytics
│   └── page.tsx         # Main portfolio page
├── public/
│   └── Resume_YashAgarwal.pdf  # Your resume (add this!)
├── next.config.js
├── package.json
└── tsconfig.json
```

## Customization

### Update Content
Edit the data arrays in `app/page.tsx`:
- `experiences` - Work history
- `education` - Academic background
- `projects` - Featured projects
- `skills` - Technical skills

### Update Colors
Edit CSS variables in `app/globals.css`:
- `--dark-accent` / `--light-accent` - Primary colors
- `--dark-bg` / `--light-bg` - Background colors

## Analytics Notes

The project uses:
- `@vercel/analytics` - For page views and visitor tracking
- `@vercel/speed-insights` - For Core Web Vitals monitoring

Both are automatically enabled when deployed to Vercel with no additional configuration needed.
