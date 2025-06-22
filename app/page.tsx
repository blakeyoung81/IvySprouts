import { VideoPlayer } from '@/components/video-player'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Play, BookOpen, Users, Sparkles, Mail, ArrowRight, CheckCircle, Star, Youtube } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { supabase } from '@/lib/supabase'

export default async function Home() {
  // Fetch daily video (placeholder for now)
  const { data: dailyVideo, error } = await supabase
    .from('products')
    .select('*')
    .eq('slug', 'week-0-welcome')
    .single()

  if (error) {
    console.error('Error fetching daily video:', error)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section - Improved */}
      <section className="relative bg-gradient-to-br from-bright-green-50 via-bright-yellow-50 to-bright-pink-50 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 items-center">
            <div className="text-center lg:text-left lg:col-span-2">
              {/* Social Proof Badge */}
              <div className="inline-flex items-center bg-white rounded-full px-4 py-2 shadow-sm mb-6">
                <Star className="h-4 w-4 text-yellow-400 mr-2" />
                <span className="text-sm font-medium text-gray-700">Trusted by 500+ families</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Prepare Your Child for 
                <span className="text-bright-purple-600"> School Success</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Join Mrs. Jenni's interactive virtual preschool! Just 10 minutes a day to build confidence, 
                social skills, and school readiness through play-based learning.
              </p>
              
              {/* Value Props */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-bright-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Ages 2-5 Perfect Fit</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-bright-yellow-400 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">10 Min Daily Lessons</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-bright-pink-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Monthly Learning Box</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-bright-purple-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Cancel Anytime</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-bright-purple-600 hover:bg-bright-purple-700 text-white shadow-lg">
                  <Link href="/auth" className="flex items-center">
                    <Play className="mr-2 h-5 w-5" />
                    Start Free Trial - $24/month
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-bright-purple-300 text-bright-purple-600 hover:bg-bright-purple-50">
                  <Link href="#sample-lesson">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Watch Sample Lesson
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-red-300 text-red-600 hover:bg-red-50">
                  <a href="https://www.youtube.com/@IvyLeagueSprouts" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <Youtube className="mr-2 h-5 w-5" />
                    Watch on YouTube
                  </a>
                </Button>
              </div>
              
              <p className="text-sm text-gray-500 mt-4">
                7-day free trial • No credit card required • Cancel anytime
              </p>
            </div>
            
            {/* Hero Image/Video */}
            <div className="relative lg:col-span-1">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 w-full max-w-md mx-auto">
                <div className="aspect-video bg-gradient-to-br from-bright-purple-100 to-bright-pink-100 rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg border border-bright-purple-100">
                      <Play className="h-10 w-10 text-bright-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Meet Mrs. Jenni!</h3>
                    <p className="text-gray-600">See how our virtual classroom works</p>
                  </div>
                </div>
                {/* Divider */}
                <div className="w-full h-0.5 bg-gradient-to-r from-bright-purple-100 via-bright-green-100 to-bright-pink-100 my-6 rounded-full" />
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Ready to Start Learning?</h3>
                  <p className="text-gray-600 mb-6">Join thousands of families building school readiness together!</p>
                  <Button className="w-full bg-bright-green-500 hover:bg-bright-green-600 py-4 text-lg font-semibold shadow-md">
                    <Users className="mr-2 h-5 w-5" />
                    Join Mrs. Jenni's Class
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - New */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Learning Adventure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start with our digital plan or get the complete experience with monthly learning boxes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Digital Plan */}
            <Card className="relative border-2 border-gray-200 hover:border-bright-green-300 transition-all">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-bright-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="h-8 w-8 text-bright-green-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Digital Plan</CardTitle>
                <CardDescription className="text-gray-600">Perfect for getting started</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">$24</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-bright-green-500 mr-3" />
                    <span className="text-gray-700">All video lessons</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-bright-green-500 mr-3" />
                    <span className="text-gray-700">Downloadable activities</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-bright-green-500 mr-3" />
                    <span className="text-gray-700">Progress tracking</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-bright-green-500 mr-3" />
                    <span className="text-gray-700">Weekly newsletter</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-bright-green-500 hover:bg-bright-green-600">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            {/* Complete Plan - Most Popular */}
            <Card className="relative border-2 border-bright-purple-300 hover:border-bright-purple-400 transition-all transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-bright-purple-500 text-white px-4 py-1">Most Popular</Badge>
              </div>
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-bright-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-bright-purple-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Complete Plan</CardTitle>
                <CardDescription className="text-gray-600">Full learning experience</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">$44</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-bright-purple-500 mr-3" />
                    <span className="text-gray-700">Everything in Digital</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-bright-purple-500 mr-3" />
                    <span className="text-gray-700">Monthly learning box</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-bright-purple-500 mr-3" />
                    <span className="text-gray-700">Ivy Doll included</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-bright-purple-500 mr-3" />
                    <span className="text-gray-700">Parent community</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-bright-purple-500 hover:bg-bright-purple-600">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="relative border-2 border-gray-200 hover:border-bright-yellow-300 transition-all">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-bright-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-bright-yellow-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Premium Plan</CardTitle>
                <CardDescription className="text-gray-600">Personalized learning</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">$64</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-bright-yellow-500 mr-3" />
                    <span className="text-gray-700">Everything in Complete</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-bright-yellow-500 mr-3" />
                    <span className="text-gray-700">Monthly 1-on-1 call</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-bright-yellow-500 mr-3" />
                    <span className="text-gray-700">Custom recommendations</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-bright-yellow-500 mr-3" />
                    <span className="text-gray-700">Priority support</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-bright-yellow-500 hover:bg-bright-yellow-600">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's in Your Monthly Box Section */}
      <section className="py-16 bg-gradient-to-br from-bright-pink-50 via-bright-purple-50 to-bright-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              📦 What's in Your <span className="text-bright-pink-600">Monthly Box?</span>
            </h2>
            <p className="text-lg text-gray-600">Every month, receive a carefully curated box of learning materials!</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-white shadow-xl border-2 border-bright-yellow-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-bright-purple-600">
                    <Sparkles className="h-6 w-6" />
                    August Welcome Box
                  </CardTitle>
                  <CardDescription className="text-lg">Everything you need for Month 1: At School</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-soft-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-gray-700 text-sm">📝 Personalized welcome note from Mrs. Jeni</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-soft-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-gray-700 text-sm">🎭 Playdough for creative expression</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-soft-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-gray-700 text-sm">📋 Printed activity packet with instructions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-soft-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-gray-700 text-sm">👁️ Fluffy balls and googly eyes (make a classroom buddy!)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-soft-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-gray-700 text-sm">�� Special Ivy Doll (class mascot)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-soft-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-gray-700 text-sm">📅 Daily learning notes for the month</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-soft-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-gray-700 text-sm">🎁 Monthly surprise item</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-soft-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-gray-700 text-sm">🖍️ Crayons and fun stickers</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-soft-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-gray-700 text-sm">👨‍👩‍👧‍👦 Parent tips and guidance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-soft-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-gray-700 text-sm">📧 Weekly newsletter with bonus activities</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-bright-green-200">
                <h3 className="text-2xl font-bold text-bright-green-600 mb-3">🎯 Perfectly Age-Appropriate</h3>
                <p className="text-gray-700">All materials are carefully selected for 2-5 year olds, promoting safe exploration and learning.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-bright-yellow-200">
                <h3 className="text-2xl font-bold text-bright-yellow-600 mb-3">📚 Curriculum-Aligned</h3>
                <p className="text-gray-700">Each box supports the month's learning objectives and video lessons.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-bright-pink-200">
                <h3 className="text-2xl font-bold text-bright-pink-600 mb-3">💝 Always a Surprise</h3>
                <p className="text-gray-700">Every month includes a special surprise item to delight your little learner!</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-bright-purple-200">
                <h3 className="text-2xl font-bold text-bright-purple-600 mb-3">📧 Weekly Newsletter</h3>
                <p className="text-gray-700">Get weekly tips, bonus activities, and encouragement delivered to your inbox!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Lesson Section */}
      <section id="sample-lesson" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See Mrs. Jenni in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch a sample lesson to see how we make learning fun and engaging for your little one
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-bright-purple-600">
                  <Play className="h-6 w-6" />
                  Sample Lesson: Welcome to School
                </CardTitle>
                <CardDescription>
                  A free preview of how Mrs. Jenni teaches school readiness skills
                </CardDescription>
              </CardHeader>
              <CardContent>
                {dailyVideo ? (
                  <VideoPlayer 
                    videoUrl={dailyVideo.video_url || ''} 
                    title={dailyVideo.title}
                  />
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-bright-purple-100 to-bright-pink-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                        <Play className="h-10 w-10 text-bright-purple-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Sample Lesson Coming Soon!</h3>
                      <p className="text-gray-600">Mrs. Jenni's welcome lesson</p>
                    </div>
                  </div>
                )}
                <div className="mt-6 text-center">
                  <Button asChild size="lg" className="bg-bright-purple-500 hover:bg-bright-purple-600">
                    <Link href="/auth">
                      <ArrowRight className="mr-2 h-5 w-5" />
                      Start Your Free Trial Now
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything Your Child Needs to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive curriculum covers all the essential skills for school readiness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-bright-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-bright-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">12 Monthly Themes</h3>
              <p className="text-gray-600">From "At School" to "Summer Fun" - a full year of learning</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-bright-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="h-8 w-8 text-bright-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">5 Lessons Per Week</h3>
              <p className="text-gray-600">Short, engaging videos perfect for preschool attention spans</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-bright-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-bright-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Learning Materials</h3>
              <p className="text-gray-600">Monthly box with Ivy Doll, crafts, and hands-on activities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-bright-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-bright-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Parent Support</h3>
              <p className="text-gray-600">Weekly tips, progress tracking, and community support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-bright-purple-500 via-bright-pink-500 to-bright-yellow-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            🌟 Ready to Join Mrs. Jenni's Class?
          </h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Join thousands of families creating magical learning moments together. 
            Your preschooler's adventure starts today!
          </p>
          <Button asChild size="lg" className="bg-white text-bright-purple-600 hover:bg-gray-100 shadow-xl text-lg px-8 py-4">
            <Link href="/auth">
              <Users className="mr-2 h-6 w-6" />
              Start Free Trial - $24/month
            </Link>
          </Button>
          <p className="text-white mt-4 opacity-75">7-day free trial • Cancel anytime • No credit card required</p>
        </div>
      </section>
    </div>
  )
} 