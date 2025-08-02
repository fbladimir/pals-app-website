'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/60 backdrop-blur-md border-b border-gray-800/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white">
            Your Pals
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <Link 
              href="/apps" 
              className="text-white hover:text-gray-300 transition-colors"
            >
              Explore Apps
            </Link>
            <Link 
              href="/download" 
              className="btn-secondary"
            >
              Download Now
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
} 