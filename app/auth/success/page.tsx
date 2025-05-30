import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle, Users, PlayCircle, Mail } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-bright-green-50 via-bright-yellow-50 to-bright-pink-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-bright-green-500 rounded-full p-4 shadow-lg">
              <CheckCircle className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to <span className="text-bright-purple-600">Mrs. Jeni's Class!</span>
          </h1>
          <p className="text-xl text-gray-700">
            🎉 Congratulations! Your registration is complete and your 7-day free trial has started.
          </p>
        </div>

        <Card className="lesson-card shadow-lg">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Image 
                src="/images/ivysprout_smile_wide.png" 
                alt="Ivy Sprouts Logo" 
                width={32} 
                height={32}
                className="w-8 h-8"
              />
            </div>
            <CardTitle className="text-2xl text-bright-purple-600">What Happens Next?</CardTitle>
            <CardDescription className="text-lg">
              Here's what to expect in the coming days
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-bright-green-50 rounded-lg border border-bright-green-200">
                <div className="w-8 h-8 bg-bright-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-bright-green-700 mb-1">Check Your Email</h3>
                  <p className="text-sm text-bright-green-600">
                    You'll receive a welcome email with your account details and first lesson access within the next few minutes.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-bright-yellow-50 rounded-lg border border-bright-yellow-200">
                <div className="w-8 h-8 bg-bright-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-bright-yellow-700 mb-1">Your Monthly Box Ships Soon</h3>
                  <p className="text-sm text-bright-yellow-600">
                    Your first monthly learning box will ship within 3-5 business days. It includes all the materials for this month's lessons!
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-bright-pink-50 rounded-lg border border-bright-pink-200">
                <div className="w-8 h-8 bg-bright-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-bright-pink-700 mb-1">Start Learning Today</h3>
                  <p className="text-sm text-bright-pink-600">
                    Access your first lessons immediately! No need to wait for the box - many activities can start right now.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-bright-purple-50 rounded-lg border border-bright-purple-200">
                <div className="w-8 h-8 bg-bright-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-bright-purple-700 mb-1">Weekly Newsletter</h3>
                  <p className="text-sm text-bright-purple-600">
                    Every Monday, you'll receive Mrs. Jeni's weekly newsletter with bonus activities, parenting tips, and encouragement.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-bright-green-100 to-bright-yellow-100 p-6 rounded-lg border border-bright-green-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                <Mail className="h-5 w-5 text-bright-green-600 mr-2" />
                Remember: Your 7-Day Free Trial
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                You won't be charged anything until your trial period ends. If you're not completely satisfied, 
                you can cancel anytime during the trial with no charges.
              </p>
              <p className="text-xs text-gray-600">
                After the trial, your subscription will be $50/month. Cancel anytime from your account settings.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-bright-purple-500 hover:bg-bright-purple-600 text-white shadow-lg">
            <Link href="/course">
              <Users className="mr-2 h-6 w-6" />
              Start Learning Now
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-2 border-bright-green-500 text-bright-green-600 hover:bg-bright-green-50">
            <Link href="/">
              <PlayCircle className="mr-2 h-6 w-6" />
              Watch Welcome Video
            </Link>
          </Button>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Questions? Contact us at{' '}
            <a href="mailto:hello@ivysprouts.com" className="text-bright-purple-600 hover:underline font-medium">
              hello@ivysprouts.com
            </a>{' '}
            or visit our{' '}
            <Link href="/contact" className="text-bright-purple-600 hover:underline font-medium">
              support center
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
} 