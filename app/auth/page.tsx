import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart, Mail } from 'lucide-react'
import Link from 'next/link'

export default function AuthPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link href="/" className="flex items-center justify-center space-x-2 mb-8">
            <Heart className="h-8 w-8 text-soft-green-600" />
            <span className="text-2xl font-bold text-gray-800">Ivy Sprouts</span>
          </Link>
          <h2 className="text-3xl font-bold text-gray-900">
            Welcome Back!
          </h2>
          <p className="mt-2 text-gray-600">
            Sign in to access your learning dashboard
          </p>
        </div>

        <Card className="lesson-card">
          <CardHeader>
            <CardTitle>Authentication</CardTitle>
            <CardDescription>
              Choose your preferred sign-in method
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full bg-soft-green-600 hover:bg-soft-green-700">
              <Mail className="h-4 w-4 mr-2" />
              Sign in with Email
            </Button>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Or</span>
              </div>
            </div>

            <Button variant="outline" className="w-full">
              Continue as Guest
            </Button>

            <p className="text-xs text-gray-500 text-center">
              By signing in, you agree to our{' '}
              <Link href="/terms" className="text-soft-green-600 hover:underline">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="text-soft-green-600 hover:underline">
                Privacy Policy
              </Link>
            </p>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link href="/signup" className="text-soft-green-600 hover:underline font-medium">
              Sign up for free
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
} 