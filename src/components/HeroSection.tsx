'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-12 leading-tight">
          Smart little helpers for your everyday life.
        </h1>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link 
            href="/apps" 
            className="btn-primary text-lg"
          >
            Explore Apps
          </Link>
          <Link 
            href="/download" 
            className="btn-secondary text-lg"
          >
            Download Now
          </Link>
        </div>
      </div>
    </section>
  );
} 