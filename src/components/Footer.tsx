'use client';

import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="">
       

          {/* Newsletter */}
          <div className='max-w-md mx-auto'>
            <h3 className="text-lg font-bold text-gray-200 mb-4">Subscribe Now</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-200"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Food Blog. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
