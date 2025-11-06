'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900/95 backdrop-blur-md border-b border-cyan-500/10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16 sm:h-20">
      {/* Logo/Brand */}
      <div className="flex-shrink-0 flex items-center gap-2 group cursor-pointer">
        <div className="relative w-8 h-8 sm:w-10 sm:h-10">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg opacity-75 group-hover:opacity-100 transition-opacity blur-sm"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xs sm:text-sm">IS</span>
          </div>
        </div>
        <span className="hidden sm:inline text-lg font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
          Imaginary Space
        </span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-1">
        <Link href="/" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors duration-200 relative group">
          Home
          <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </Link>
        
        <a href="#about" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors duration-200 relative group">
          About
          <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </a>
        
        <a href="#services" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors duration-200 relative group">
          Services
          <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </a>
      </div>

      {/* CTA Button + Mobile Menu Toggle */}
      <div className="flex items-center gap-3 sm:gap-4">
        <button className="hidden sm:inline-flex px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-lg transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40">
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-cyan-300 hover:bg-slate-800/50 transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    {/* Mobile Navigation Menu */}
    <div className="md:hidden border-t border-cyan-500/10 bg-slate-900/50 backdrop-blur-sm hidden" id="mobile-menu">
      <div className="px-4 py-4 space-y-2">
        <Link href="/" className="block px-4 py-3 text-sm font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-800/50 rounded-lg transition-colors">
          Home
        </Link>
        
        <a href="#about" className="block px-4 py-3 text-sm font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-800/50 rounded-lg transition-colors">
          About
        </a>
        
        <a href="#services" className="block px-4 py-3 text-sm font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-800/50 rounded-lg transition-colors">
          Services
        </a>

        <button className="w-full mt-4 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-lg transition-all duration-200 shadow-lg shadow-cyan-500/20">
          Get Started
        </button>
      </div>
    </div>
  </div>

  {/* Animated gradient line */}
  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
</nav>
  );
}