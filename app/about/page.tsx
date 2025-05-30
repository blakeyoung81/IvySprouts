import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart, Star, Users, BookOpen } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="preschool-gradient py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Story
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Creating magical learning moments that nurture curiosity, creativity, 
            and joy in every little learner.
          </p>
        </div>
      </section>

      {/* Teacher Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Meet Your Early Learning Guide
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Hi! I'm Sarah, a passionate early childhood educator with over 10 years 
                of experience helping little ones discover the joy of learning. After 
                seeing the incredible impact of structured, playful education in my 
                classroom, I created Ivy Sprouts to bring these magical moments into 
                your home.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Every lesson is carefully crafted with love, backed by early childhood 
                development research, and designed to create those precious "aha!" moments 
                that make learning unforgettable.
              </p>
              <Button asChild size="lg" className="bg-soft-green-600 hover:bg-soft-green-700">
                <Link href="/store">
                  <Heart className="mr-2 h-5 w-5" />
                  Start Learning Together
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-soft-green-100 to-soft-pink-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <Heart className="h-16 w-16 text-soft-green-600 mx-auto mb-4" />
                  <p className="text-gray-600 italic">
                    "Every child is a different kind of flower, and all together make this world a beautiful garden."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              To make high-quality early childhood education accessible to every family, 
              fostering a love of learning that lasts a lifetime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="lesson-card text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-soft-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Joyful Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We believe learning should be fun, engaging, and filled with wonder. 
                  Every activity is designed to spark curiosity and create positive associations with education.
                </p>
              </CardContent>
            </Card>

            <Card className="lesson-card text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-light-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Family Connection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our lessons strengthen the bond between parents and children, creating 
                  shared experiences and memories that last a lifetime.
                </p>
              </CardContent>
            </Card>

            <Card className="lesson-card text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-soft-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Research-Based</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Every lesson is grounded in early childhood development research, 
                  ensuring your little one gets the best foundation for future learning.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Growing Together</h2>
            <p className="text-lg text-gray-600">
              Join our community of families creating magical learning moments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-soft-green-600 mb-2">1,000+</div>
              <div className="text-gray-600">Happy Families</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-light-yellow-600 mb-2">50+</div>
              <div className="text-gray-600">Learning Activities</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-soft-pink-600 mb-2">12</div>
              <div className="text-gray-600">Weekly Themes</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-soft-green-600 mb-2">5★</div>
              <div className="text-gray-600">Parent Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 preschool-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Join thousands of families who are already creating magical learning moments together.
          </p>
          <Button asChild size="lg" className="bg-soft-green-600 hover:bg-soft-green-700">
            <Link href="/store">
              <Star className="mr-2 h-5 w-5" />
              Explore Our Lessons
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
} 