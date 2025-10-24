'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img src="/logo.svg" alt="TheTasteWhisperer" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-900 hover:text-gray-600 transition-colors">Home</Link>
            <Link href="/about" className="text-gray-900 hover:text-gray-600 transition-colors">About</Link>
            <Link href="/privacy" className="text-gray-900 hover:text-gray-600 transition-colors">Privacy</Link>
            <Link href="/contact" className="text-gray-900 hover:text-gray-600 transition-colors">Contact</Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-gray-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="block px-3 py-2 text-gray-900 hover:text-gray-600">Home</Link>
              <Link href="/about" className="block px-3 py-2 text-gray-900 hover:text-gray-600">About</Link>
              <Link href="/privacy" className="block px-3 py-2 text-gray-900 hover:text-gray-600">Privacy</Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-900 hover:text-gray-600">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
