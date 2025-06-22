import Link from 'next/link'
import { Heart, Facebook, Instagram, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-soft-green-600" />
              <span className="text-2xl font-bold text-gray-800">Ivy Sprouts</span>
            </Link>
            <p className="text-gray-600 max-w-md">
              Joyful, meaningful early learning for little ones. Creating magical educational 
              experiences that nurture curiosity and growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/store" className="text-gray-600 hover:text-soft-green-600 transition-colors">
                  Browse Lessons
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-soft-green-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-soft-green-600 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-600 hover:text-soft-green-600 transition-colors">
                  My Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-600 hover:text-soft-green-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-600 hover:text-soft-green-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://www.youtube.com/@IvyLeagueSprouts" 
                className="text-gray-600 hover:text-soft-green-600 transition-colors"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Ivy Sprouts. All rights reserved. Made with ❤️ for little learners.
          </p>
        </div>
      </div>
    </footer>
  )
} 