# Pal Apps Website

A modern, responsive website for Pal Apps - a unified platform offering smart, simple tools designed to help people with everyday tasks.

## 🚀 Features

- **Modern Design**: Clean, dark-themed UI with high-contrast elements
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Component-Based**: Modular, reusable components for easy maintenance
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first styling with custom brand colors

## 🎨 Brand Colors

- **Primary**: #4978F2 (Blue)
- **Secondary**: #7666F3 (Purple)
- **Accent**: #5ABDA7 (Teal)
- **Dark**: #1A1B23 (Dark background)

## 📁 Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout with Header/Footer
│   ├── page.tsx        # Homepage
│   └── globals.css     # Global styles
├── components/         # Reusable UI components
│   ├── Header.tsx     # Navigation header
│   ├── Footer.tsx     # Site footer
│   ├── HeroSection.tsx # Main hero section
│   ├── AppsSection.tsx # Apps grid section
│   └── AppCard.tsx    # Individual app card
├── data/              # Data and types
│   └── apps.ts        # App information and interfaces
└── lib/               # Utility functions (future use)
```

## 🛠️ Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Inter Font** - Clean, modern typography

## 🚀 Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Pal Apps

The website showcases various Pal apps:

- **SleepPal** - Stops your audio when you fall asleep
- **CartPal** - Build your grocery list based on what you actually eat
- **ChorePal** - Helps roommates or couples split chores
- **RemotePal** - The assistant for working from home
- **FitPal** - Your personal fitness companion (coming soon)

## 🔮 Future Features

- Individual app landing pages
- Demo versions of apps
- Pal+ subscription system
- User account management
- Mobile app download links
- Firebase/Stripe integrations

## 📄 License

This project is private and proprietary to Pal Apps.
