import { getDailyVideo } from '@/lib/getDailyVideo'
import { VideoPlayer } from '@/components/video-player'
import { MaterialChecklist } from '@/components/material-checklist'
import { ThemeCard } from '@/components/theme-card'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Download, Play, Heart, Leaf, Sparkles, BookOpen, Users, Mail } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default async function Home() {
  const dailyVideo = await getDailyVideo()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-bright-green-200 via-bright-yellow-200 to-bright-pink-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white rounded-full p-4 shadow-lg">
              <Leaf className="h-12 w-12 text-bright-green-500" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
            Welcome to
            <br />
            <span className="text-bright-purple-600">Mrs. Jeni's</span>
            <span className="text-bright-green-600"> PreK </span>
            <span className="text-bright-pink-600">Class!</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            🌟 Join thousands of families for magical learning adventures! 
            Mrs. Jeni creates joyful, meaningful early learning experiences 
            that nurture curiosity, creativity, and growth in your little one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-bright-purple-500 hover:bg-bright-purple-600 text-white shadow-lg text-lg px-8 py-4">
              <Link href="/auth">
                <Users className="mr-2 h-6 w-6" />
                Join Mrs. Jeni's Class
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-bright-green-500 text-bright-green-600 hover:bg-bright-green-50 text-lg px-8 py-4">
              <Play className="mr-2 h-6 w-6" />
              Watch Sample Lesson
            </Button>
          </div>
        </div>
      </section>

      {/* About Mrs. Jeni Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-bright-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-bright-pink-500" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Meet <span className="text-bright-purple-600">Mrs. Jeni</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                With over 15 years of preschool teaching experience, Mrs. Jeni has created 
                a magical learning system that transforms education into an adventure! 
                Each month, your little one will discover new concepts through engaging 
                videos, hands-on activities, and special surprise boxes delivered right to your door.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-bright-green-500 rounded-full flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">12 Monthly Learning Adventures (Aug-July)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-bright-yellow-400 rounded-full flex items-center justify-center">
                    <Play className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">5 Video Lessons Per Week</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-bright-pink-500 rounded-full flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Monthly Surprise Learning Box</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-bright-purple-500 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Weekly Newsletter with Tips & Activities</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-bright-purple-100 to-bright-pink-100 rounded-3xl p-8 flex flex-col items-center">
              <div className="mb-6">
                <Image 
                  src="/images/teacher-child-hug.jpg" 
                  alt="Mrs. Jeni teaching preschool children in a warm classroom environment" 
                  width={320} 
                  height={240}
                  className="rounded-2xl shadow-lg"
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Start?</h3>
                <p className="text-gray-700 mb-6">
                  Join our learning community and watch your preschooler thrive!
                </p>
                <Button className="bg-bright-green-500 hover:bg-bright-green-600 text-white">
                  <Link href="/auth" className="flex items-center">
                    <Users className="mr-2 h-5 w-5" />
                    Join Now - $50/month
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Video Section */}
      {dailyVideo && (
        <section className="py-16 bg-gradient-to-r from-bright-yellow-50 to-bright-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">🎬 Today's Learning Adventure</h2>
              <p className="text-lg text-gray-600">Join Mrs. Jeni for today's special video lesson!</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <VideoPlayer 
                videoUrl={dailyVideo.video_url || ''} 
                title={dailyVideo.title}
                className="mb-8"
              />
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{dailyVideo.title}</h3>
                <p className="text-gray-600 mb-6">{dailyVideo.description}</p>
                {dailyVideo.theme_week && (
                  <div className="inline-flex items-center px-6 py-3 bg-bright-purple-100 rounded-full">
                    <Leaf className="h-5 w-5 text-bright-purple-600 mr-2" />
                    <span className="text-bright-purple-700 font-medium">Theme: {dailyVideo.theme_week}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Monthly Learning Themes Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              🗓️ <span className="text-bright-green-600">12 Months</span> of Fun Learning!
            </h2>
            <p className="text-lg text-gray-600">Each month brings new adventures, skills, and surprises</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ThemeCard
              title="August: At School"
              description="Social skills, classroom routines, and making friends"
              week="Month 1"
              color="bright-green"
              isAvailable={true}
            />
            <ThemeCard
              title="September: All About Me"
              description="Self-awareness, family, and personal identity"
              week="Month 2"
              color="bright-yellow"
              isAvailable={true}
            />
            <ThemeCard
              title="October: Fall Fun"
              description="Seasons, colors, and harvest celebrations"
              week="Month 3"
              color="bright-pink"
              isAvailable={false}
            />
          </div>
          <div className="text-center mt-8">
            <Button asChild className="bg-bright-purple-500 hover:bg-bright-purple-600 text-white">
              <Link href="/auth">
                See All 12 Months →
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What's in the Monthly Box */}
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
                  <CardDescription className="text-lg">
                    Everything you need for Month 1: At School
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <MaterialChecklist 
                    materials={[
                      "📝 Personalized welcome note from Mrs. Jeni",
                      "🎭 Playdough for creative expression",
                      "📋 Printed activity packet with instructions",
                      "👁️ Fluffy balls and googly eyes (make a classroom buddy!)",
                      "🧸 Special Ivy Doll (class mascot)",
                      "📅 Daily learning notes for the month",
                      "🎁 Monthly surprise item",
                      "🖍️ Crayons and fun stickers",
                      "👨‍👩‍👧‍👦 Parent tips and guidance",
                      "📧 Weekly newsletter with bonus activities"
                    ]}
                  />
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-bright-purple-500 via-bright-pink-500 to-bright-yellow-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            🌟 Ready to Join Mrs. Jeni's Class?
          </h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Join thousands of families creating magical learning moments together. 
            Your preschooler's adventure starts today!
          </p>
          <Button asChild size="lg" className="bg-white text-bright-purple-600 hover:bg-gray-100 shadow-xl text-lg px-8 py-4">
            <Link href="/auth">
              <Users className="mr-2 h-6 w-6" />
              Join Mrs. Jeni's Class - $50/month
            </Link>
          </Button>
          <p className="text-white mt-4 opacity-75">Cancel anytime • 7-day free trial</p>
        </div>
      </section>
    </div>
  )
} 