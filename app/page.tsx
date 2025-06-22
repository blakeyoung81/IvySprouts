import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-bright-yellow-200 via-bright-pink-200 to-bright-purple-300">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Message */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 drop-shadow-lg">
            Welcome to
          </h1>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-bright-purple-900 mb-12 drop-shadow-lg">
            Mrs. Jeni's PreK Class!
          </h2>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-bright-purple-800 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
            Join thousands of families for joyful learning adventures! Mrs. Jeni creates 
            play-meaningful early learning experiences that nurture curiosity, creativity, 
            and confidence in children ages 2-5.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              asChild 
              size="lg" 
              className="bg-bright-purple-600 hover:bg-bright-purple-700 text-white text-xl px-8 py-4 rounded-full shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <Link href="/auth">
                🎒 Join Mrs. Jeni's Class
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-bright-purple-600 text-bright-purple-700 hover:bg-bright-purple-100 text-xl px-8 py-4 rounded-full shadow-lg bg-white/80 backdrop-blur"
            >
              <Link href="/course">
                📚 Watch Sample Lessons
              </Link>
            </Button>
          </div>
          
          {/* Preschool Image */}
          <div className="relative w-80 h-48 mx-auto mb-8 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/teacher-child-hug.jpg"
              alt="Teacher and child learning together"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Bottom Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/90 backdrop-blur rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-bright-purple-800 mb-2">Ages 2-5</h3>
              <p className="text-bright-purple-700">Perfect developmental fit for your little learner</p>
            </div>
            <div className="bg-white/90 backdrop-blur rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-bold text-bright-purple-800 mb-2">10 Minutes</h3>
              <p className="text-bright-purple-700">Short, engaging daily lessons that fit your schedule</p>
            </div>
            <div className="bg-white/90 backdrop-blur rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-bold text-bright-purple-800 mb-2">Learning Box</h3>
              <p className="text-bright-purple-700">Monthly materials delivered to your door</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 