import { getDailyVideo } from '@/lib/getDailyVideo'
import { VideoPlayer } from '@/components/video-player'
import { MaterialChecklist } from '@/components/material-checklist'
import { ThemeCard } from '@/components/theme-card'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Download, Play, Heart, Star } from 'lucide-react'
import Link from 'next/link'

export default async function Home() {
  const dailyVideo = await getDailyVideo()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="preschool-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="hero-text mb-6">
            Joyful, meaningful early learning
            <br />
            <span className="text-soft-green-700">for little ones</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Discover magical educational experiences that nurture curiosity, creativity, 
            and growth in your preschooler through engaging videos, activities, and materials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-soft-green-600 hover:bg-soft-green-700">
              <Link href="/store">
                <Play className="mr-2 h-5 w-5" />
                Start Week 1: Colors & Kindness
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              <Download className="mr-2 h-5 w-5" />
              Download Sample Lesson
            </Button>
          </div>
        </div>
      </section>

      {/* Daily Video Section */}
      {dailyVideo && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Today's Learning Adventure</h2>
              <p className="text-lg text-gray-600">Join us for today's special video lesson</p>
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
                  <div className="inline-flex items-center px-4 py-2 bg-soft-green-100 rounded-full">
                    <Star className="h-4 w-4 text-soft-green-600 mr-2" />
                    <span className="text-soft-green-700 font-medium">Theme: {dailyVideo.theme_week}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Weekly Themes Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Weekly Learning Themes</h2>
            <p className="text-lg text-gray-600">Explore our structured curriculum designed for little learners</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ThemeCard
              title="Colors & Kindness"
              description="Learn about colors while practicing kindness and empathy"
              week="Week 1"
              color="soft-green"
              isAvailable={true}
            />
            <ThemeCard
              title="Shapes & Sharing"
              description="Discover shapes through fun activities and sharing games"
              week="Week 2"
              color="light-yellow"
              isAvailable={true}
            />
            <ThemeCard
              title="Numbers & Nature"
              description="Count and explore the wonderful world of nature"
              week="Week 3"
              color="soft-pink"
              isAvailable={false}
            />
          </div>
        </div>
      </section>

      {/* Materials & Resources Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Everything You Need</h2>
              <p className="text-lg text-gray-600 mb-8">
                Each lesson comes with a complete materials list, downloadable PDF guides, 
                and engaging video content to make learning fun and accessible.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-soft-green-500 rounded-full flex items-center justify-center">
                    <Heart className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700">Age-appropriate activities (2-5 years)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-light-yellow-400 rounded-full flex items-center justify-center">
                    <Download className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700">Printable lesson plans and activities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-soft-pink-400 rounded-full flex items-center justify-center">
                    <Play className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700">HD video lessons with clear instructions</span>
                </div>
              </div>
            </div>
            <div>
              <Card className="lesson-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-soft-green-600" />
                    Sample Materials List
                  </CardTitle>
                  <CardDescription>
                    For Week 1: Colors & Kindness
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <MaterialChecklist 
                    materials={[
                      "Colored paper (red, blue, yellow, green)",
                      "Safety scissors (child-friendly)",
                      "Glue sticks",
                      "Crayons or colored pencils",
                      "Construction paper",
                      "Stickers (optional but fun!)"
                    ]}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 preschool-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Begin the Adventure?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Join thousands of families creating magical learning moments together.
          </p>
          <Button asChild size="lg" className="bg-soft-green-600 hover:bg-soft-green-700">
            <Link href="/store">
              <Heart className="mr-2 h-5 w-5" />
              Explore Our Lessons
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
} 