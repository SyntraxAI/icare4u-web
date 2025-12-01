"use client"; // This tells Next.js this component has interaction (clicking the menu)

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <img
                src="/logo-horizontal.jpg"
                alt="iCare4u Health Solutions Logo"
                style={{ height: '56px', width: 'auto' }}
                className="object-contain"
              />
            </Link>
          </div>

          {/* DESKTOP MENU (Hidden on Mobile) */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-700 hover:text-brand-blue font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-brand-blue font-medium transition-colors">
              About
            </Link>
            <Link href="/services/wound-care" className="text-gray-700 hover:text-brand-blue font-medium transition-colors">
              Wound Care
            </Link>
            <Link href="/services/weight-loss" className="text-gray-700 hover:text-brand-blue font-medium transition-colors">
              Weight Loss
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-brand-blue font-medium transition-colors">
              Contact
            </Link>
            
            {/* Desktop Call Action */}
            <a 
              href="tel:+17255505447" 
              className="bg-brand-blue hover:bg-brand-dark text-white font-bold py-2 px-6 rounded-full transition duration-300 shadow-md hover:shadow-lg"
            >
              Call (725) 550-5447
            </a>
          </div>

          {/* MOBILE MENU BUTTON (Visible only on Mobile) */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-brand-blue focus:outline-none p-2"
            >
              {/* Hamburger Icon (Open) / X Icon (Close) */}
              {isOpen ? (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0 top-20">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link 
              href="/" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-brand-blue hover:bg-blue-50"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-brand-blue hover:bg-blue-50"
            >
              About Us
            </Link>
            <Link 
              href="/services/wound-care" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-brand-blue hover:bg-blue-50"
            >
              Wound Care
            </Link>
            <Link 
              href="/services/weight-loss" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-brand-blue hover:bg-blue-50"
            >
              Weight Loss
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-brand-blue hover:bg-blue-50"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}