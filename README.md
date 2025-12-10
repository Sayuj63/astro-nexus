# 🌌 Cosmic Astrology

A dark, cosmic-themed astrology landing page built with Next.js that combines animated space visuals, zodiac content, and an AI astrologer chat into a high-end, futuristic experience.

## ✨ Features

- **Cosmic Theme**: Deep space background with purple-neon highlights
- **Brand Colors**: Carefully curated color palette for immersive experience
- **Responsive Design**: Built with Tailwind CSS v4
- **Component Architecture**: Organized component structure for scalability
- **TypeScript**: Full type safety throughout the application

## 🎨 Brand Colors

- **Deep Space Black** (`#0a0a0f`) - Background base
- **Electric Purple** (`#8b5cf6`) - Primary accent / buttons  
- **Magenta Pink** (`#ec4899`) - Secondary glow and gradients
- **Neon Blue / Cyan** (`#06b6d4`) - Rocket flame, highlights
- **Soft Violet** (`#a855f7`) - Card hovers and gradients
- **Warm Orange** (`#f97316`) - Planet accents (use sparingly)

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Tailwind config with cosmic theme
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
└── components/
    ├── ColorPalette.tsx # Brand color reference
    └── index.ts         # Component exports
```

## 🛠 Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Package Manager**: npm

## ✅ Implemented Features

- [x] **Scroll Expansion Hero** - Interactive video/image that expands on scroll
- [x] **Animated Particles Background** - WebGL-powered cosmic particles
- [x] **Aurora Text Effect** - Animated gradient text with cosmic colors
- [x] **Responsive Design** - Mobile and desktop optimized
- [x] **Cosmic Theme Integration** - All components use brand colors
- [x] **Component Architecture** - Modular, reusable components

## 🎯 Next Steps

- [ ] Add `herovideo.mp4` to `/public` folder for video hero
- [ ] Zodiac sign cards with hover effects
- [ ] AI astrologer chat interface
- [ ] Responsive navigation
- [ ] Interactive cosmic elements
- [ ] More scroll animations

## 🌟 Development

The project is initialized and ready for development. The cosmic theme is configured with custom colors and gradients. Start building components in the `src/components` directory.

## 📝 Notes

This project uses Tailwind CSS v4 with the new `@theme inline` syntax for custom color definitions. All brand colors are available as Tailwind utilities (e.g., `bg-deep-space`, `text-electric-purple`).

## 🎬 Hero Video Setup ✅

✅ **Video Ready!** Your `herovideo.mp4` is configured and ready to use!

The hero section now features:
- Your custom cosmic video that expands on scroll
- Animated particle background behind the video
- Aurora text effect over the expanding video
- Smooth scroll-to-expand interaction

## 🎨 Components Overview

### CosmicHero
Main hero section combining:
- **Particles Background**: Animated WebGL particles with cosmic colors
- **Scroll Expansion**: Interactive media that expands as user scrolls
- **Aurora Text**: Animated gradient text effect
- **Feature Cards**: Hover effects with cosmic styling

### UI Components
- `ScrollExpandMedia`: Core scroll-to-expand functionality
- `Particles`: WebGL particle system with OGL
- `AuroraText`: Animated gradient text component

All components are fully typed with TypeScript and use your cosmic brand colors.