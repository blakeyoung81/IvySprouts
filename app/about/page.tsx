import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart, Leaf, Users, BookOpen, GraduationCap, Award, Piano, Globe } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-bright-green-200 via-bright-yellow-200 to-bright-pink-200 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white rounded-full p-4 shadow-lg">
              <Image 
                src="/images/ivysprout_smile_wide.png" 
                alt="Ivy Sprouts Logo" 
                width={48} 
                height={48}
                className="w-12 h-12"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Mrs. Jeni Young
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            From nurturing six little sprouts into Ivy League scholars to helping thousands of families 
            cultivate excellence from the very beginning.
          </p>
        </div>
      </section>

      {/* Jeni's Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                A Mother's Journey to <span className="text-bright-green-600">Excellence</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Mrs. Jeni Young didn't set out to become an educational expert—she became one out of love for her six boys. 
                With over 15 years of experience helping pre-K and elementary school teachers, Jeni discovered that 
                excellence isn't just about natural talent—it's about nurturing the right habits from the very beginning.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                "I watched my little sprouts grow into mighty oaks," Jeni reflects. "Each of my six sons earned full 
                scholarships to college, with several attending Ivy League institutions like Harvard. But their success 
                wasn't magic—it was the result of intentional, joyful learning that started in those precious preschool years."
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Her sons didn't just excel academically. They became well-rounded scholars: accomplished athletes, 
                skilled pianists, and multilingual global citizens. This holistic approach to development became 
                the foundation for what would eventually become Ivy Sprouts.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-bright-purple-100 to-bright-pink-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-bright-yellow-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-4xl">👩‍🏫</span>
                  </div>
                  <p className="text-gray-700 italic text-lg font-medium">
                    "Every child begins as a tiny sprout. With the right nurturing, love, and guidance, 
                    they can grow into anything—even reach the Ivy League."
                  </p>
                  <p className="text-bright-purple-600 font-semibold mt-4">— Mrs. Jeni Young</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Boys' Achievements */}
      <section className="py-16 bg-gradient-to-r from-bright-green-50 to-bright-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              From <span className="text-bright-green-600">Little Sprouts</span> to <span className="text-bright-purple-600">Ivy League</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Mrs. Jeni's six sons are living proof that excellence starts early. Their achievements showcase 
              what's possible when you nurture the whole child from the very beginning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="lesson-card text-center border-2 border-bright-green-200 hover:shadow-lg transition-all duration-200">
              <CardHeader>
                <div className="w-12 h-12 bg-bright-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-bright-green-600">6 College Scholarships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Every single one of Mrs. Jeni's sons earned full scholarships to college, 
                  including prestigious Ivy League institutions.
                </p>
              </CardContent>
            </Card>

            <Card className="lesson-card text-center border-2 border-bright-yellow-200 hover:shadow-lg transition-all duration-200">
              <CardHeader>
                <div className="w-12 h-12 bg-bright-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-bright-yellow-600">Champion Athletes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Excellence in sports taught discipline, teamwork, and perseverance—
                  skills that translated to academic success.
                </p>
              </CardContent>
            </Card>

            <Card className="lesson-card text-center border-2 border-bright-pink-200 hover:shadow-lg transition-all duration-200">
              <CardHeader>
                <div className="w-12 h-12 bg-bright-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Piano className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-bright-pink-600">Musical Mastery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  All six boys mastered the piano, developing cognitive skills, 
                  discipline, and creative expression that enhanced their learning.
                </p>
              </CardContent>
            </Card>

            <Card className="lesson-card text-center border-2 border-bright-purple-200 hover:shadow-lg transition-all duration-200">
              <CardHeader>
                <div className="w-12 h-12 bg-bright-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-bright-purple-600">Global Citizens</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Each son speaks multiple languages, opening doors to global 
                  opportunities and multicultural understanding.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-bright-green-100 to-bright-yellow-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <Image 
                    src="/images/ivysprout_smile_wide.png" 
                    alt="Ivy Sprouts Logo" 
                    width={64} 
                    height={64}
                    className="h-16 w-16 mx-auto mb-4"
                  />
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">The Ivy Sprouts Philosophy</h3>
                  <p className="text-gray-700 italic">
                    "Just like ivy grows strong and reaches great heights when properly nurtured, 
                    every child can achieve extraordinary things when given the right foundation from the start."
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Sharing the <span className="text-bright-purple-600">Secret</span> to Success
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                After watching her sons thrive and helping countless teachers transform their classrooms, 
                Mrs. Jeni realized she had discovered something special. The key to Ivy League success 
                isn't about pushing children harder—it's about starting earlier with the right approach.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                "I created Ivy Sprouts because every parent deserves to know what I learned raising my boys," 
                explains Mrs. Jeni. "Excellence begins in the preschool years, but it has to be joyful, 
                engaging, and age-appropriate. When you plant the right seeds early, incredible growth follows."
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Today, Mrs. Jeni's proven methods help families across the country nurture their own little 
                sprouts into confident, capable, well-rounded children ready for any challenge—including 
                the Ivy League.
              </p>
              <Button asChild size="lg" className="bg-bright-green-500 hover:bg-bright-green-600 text-white shadow-lg">
                <Link href="/course">
                  <Users className="mr-2 h-5 w-5" />
                  Join Mrs. Jeni's Class
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Method */}
      <section className="py-16 bg-gradient-to-br from-bright-pink-50 via-bright-purple-50 to-bright-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Ivy Sprouts Method</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Mrs. Jeni's approach creates well-rounded, confident children who are ready to excel in any environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="lesson-card text-center bg-white shadow-lg border-2 border-bright-green-200">
              <CardHeader>
                <div className="w-12 h-12 bg-bright-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-bright-green-600">Joyful Foundation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Learning must be fun and engaging. When children love to learn, they naturally excel. 
                  Every activity is designed to spark curiosity and build positive associations with education.
                </p>
              </CardContent>
            </Card>

            <Card className="lesson-card text-center bg-white shadow-lg border-2 border-bright-yellow-200">
              <CardHeader>
                <div className="w-12 h-12 bg-bright-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-bright-yellow-600">Holistic Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  True excellence requires developing the whole child—academic skills, emotional intelligence, 
                  creativity, physical health, and social abilities all working together.
                </p>
              </CardContent>
            </Card>

            <Card className="lesson-card text-center bg-white shadow-lg border-2 border-bright-pink-200">
              <CardHeader>
                <div className="w-12 h-12 bg-bright-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-bright-pink-600">Early Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  The habits and attitudes formed in preschool years create the foundation for lifelong success. 
                  Start early, but start right, and watch your little sprout flourish.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-bright-purple-500 via-bright-pink-500 to-bright-yellow-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Nurture Your Little Sprout?
          </h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Join Mrs. Jeni and discover how to give your child the same foundation that led six boys to the Ivy League.
          </p>
          <Button asChild size="lg" className="bg-white text-bright-purple-600 hover:bg-gray-100 shadow-xl text-lg px-8 py-4">
            <Link href="/auth">
              <GraduationCap className="mr-2 h-6 w-6" />
              Start Your Child's Journey to Excellence
            </Link>
          </Button>
          <p className="text-white mt-4 opacity-75">Watch your little sprout grow into something extraordinary</p>
        </div>
      </section>
    </div>
  )
} 