'use client';

import { useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Product Manager",
    company: "TechFlow",
    content: "Pal+ has transformed how I manage my daily tasks. The seamless integration between apps is incredible - it feels like having a personal assistant.",
    avatar: "SC",
    rating: 5
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Remote Worker",
    company: "Freelance",
    content: "SleepPal and RemotePal have been game-changers for my work-life balance. I finally feel in control of my productivity and rest.",
    avatar: "MR",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Student",
    company: "University",
    content: "CartPal helps me save money and eat healthier. It's like having a smart shopping assistant that knows exactly what I need.",
    avatar: "ET",
    rating: 5
  }
];

export default function WhyPalWorks() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Pal Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We believe technology should make life simpler, not more complicated. 
            That's why we've built a suite of apps that work together seamlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Mission & Values */}
          <div className="space-y-8">
            {/* Mission Statement */}
            <div className="bg-dark/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To create intelligent, simple tools that enhance your daily life without adding complexity. 
                We focus on the small moments that make a big difference.
              </p>
            </div>

            {/* Value Propositions */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Seamless Integration</h4>
                  <p className="text-gray-300">All apps work together, sharing data intelligently to provide a unified experience.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Privacy First</h4>
                  <p className="text-gray-300">Your data stays yours. We use local processing and minimal data collection.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Continuous Learning</h4>
                  <p className="text-gray-300">Our apps learn from your patterns to become more helpful over time.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="space-y-6">
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">What Our Users Say</h3>
              <p className="text-gray-300">Join thousands of satisfied users</p>
            </div>

            {/* Active Testimonial */}
            <div className="bg-dark/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 relative">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonials[activeTestimonial].avatar}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonials[activeTestimonial].name}</h4>
                  <p className="text-gray-400 text-sm">{testimonials[activeTestimonial].role} at {testimonials[activeTestimonial].company}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {renderStars(testimonials[activeTestimonial].rating)}
              </div>

              <blockquote className="text-gray-300 leading-relaxed italic">
                "{testimonials[activeTestimonial].content}"
              </blockquote>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center lg:justify-start space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial 
                      ? 'bg-primary scale-125' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 