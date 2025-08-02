'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark/30 backdrop-blur-sm border-t border-gray-800/50 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Your Pals</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Smart little helpers for your everyday life. Discover our suite of apps designed to make your daily tasks easier and more efficient.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/apps" className="text-gray-300 hover:text-white transition-colors">
                  All Apps
                </Link>
              </li>
              <li>
                <Link href="/download" className="text-gray-300 hover:text-white transition-colors">
                  Download
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-gray-300 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800/50 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Pal Apps. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 