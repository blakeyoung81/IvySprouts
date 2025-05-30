"use client"

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Heart } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-soft-green-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-soft-green-600" />
              <span className="text-2xl font-bold text-gray-800">Ivy Sprouts</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-soft-green-600 transition-colors">
              Home
            </Link>
            <Link href="/store" className="text-gray-700 hover:text-soft-green-600 transition-colors">
              Store
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-soft-green-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-soft-green-600 transition-colors">
              Contact
            </Link>
            <Button asChild variant="outline">
              <Link href="/auth">Login</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-soft-green-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-soft-green-200">
              <Link 
                href="/" 
                className="block px-3 py-2 text-gray-700 hover:text-soft-green-600"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/store" 
                className="block px-3 py-2 text-gray-700 hover:text-soft-green-600"
                onClick={() => setIsOpen(false)}
              >
                Store
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-2 text-gray-700 hover:text-soft-green-600"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 text-gray-700 hover:text-soft-green-600"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <Button asChild variant="outline" className="w-full">
                  <Link href="/auth">Login</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 