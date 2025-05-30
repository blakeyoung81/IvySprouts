"use client"

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-bright-purple-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image 
                src="/images/ivysprout_smile_wide.png" 
                alt="Ivy Sprouts Logo" 
                width={40} 
                height={40}
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold text-gray-800">Ivy Sprouts</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-bright-purple-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="/course" className="text-gray-700 hover:text-bright-green-600 transition-colors font-medium">
              Mrs. Jeni's Class
            </Link>
            <Link href="/store" className="text-gray-700 hover:text-bright-pink-600 transition-colors font-medium">
              Store
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-bright-yellow-600 transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-bright-purple-600 transition-colors font-medium">
              Contact
            </Link>
            <Button asChild className="bg-bright-purple-500 hover:bg-bright-purple-600 text-white">
              <Link href="/auth">Join Class</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-bright-purple-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-bright-purple-200">
              <Link 
                href="/" 
                className="block px-3 py-2 text-gray-700 hover:text-bright-purple-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/course" 
                className="block px-3 py-2 text-gray-700 hover:text-bright-green-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Mrs. Jeni's Class
              </Link>
              <Link 
                href="/store" 
                className="block px-3 py-2 text-gray-700 hover:text-bright-pink-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Store
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-2 text-gray-700 hover:text-bright-yellow-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 text-gray-700 hover:text-bright-purple-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <Button asChild className="w-full bg-bright-purple-500 hover:bg-bright-purple-600 text-white">
                  <Link href="/auth">Join Class</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 