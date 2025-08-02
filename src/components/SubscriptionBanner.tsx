'use client';

import Link from 'next/link';

export default function SubscriptionBanner() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Main Banner Container */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 border border-primary/30 backdrop-blur-sm">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
            
            {/* Content */}
            <div className="relative px-8 py-12 text-center">
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Subscribe to Pal+
              </h2>

              {/* Subtitle */}
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Unlock all apps and get premium features across the entire Pal ecosystem. 
                One subscription, unlimited possibilities.
              </p>

              {/* Features List */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-300">All Apps Included</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-gray-300">Premium Features</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-gray-300">Priority Support</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/subscribe" 
                  className="btn-primary text-lg px-8 py-4 shadow-xl hover:shadow-2xl"
                >
                  Start Free Trial
                </Link>
                <Link 
                  href="/pricing" 
                  className="text-white/80 hover:text-white transition-colors font-medium"
                >
                  View Pricing →
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-sm text-gray-400">
                  ✓ 30-day free trial • ✓ Cancel anytime • ✓ No setup fees
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 