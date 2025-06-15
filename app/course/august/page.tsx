import { supabase } from '@/lib/supabase'
import { VideoPlayer } from '@/components/video-player'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Play, Package, BookOpen, Leaf, Clock, Users, Mail, CheckCircle, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

// This will be replaced with database fetch
async function getAugustData() {
  // For now, return static data until database is set up
  return {
    month: {
      name: 'August',
      title: 'At School',
      description: 'Learn about school routines, making friends, and classroom expectations'
    },
    lessons: [
      // Week 1
      {
        id: 1,
        title: 'Welcome to School',
        slug: 'august-1-welcome-to-school',
        description: 'Help your little one get excited about learning! This introductory lesson covers school routines, classroom expectations, and the joy of learning together.',
        week_number: 1,
        lesson_number: 1,
        duration_minutes: 8,
        youtube_video_id: null, // Will be updated with real video IDs
        materials: ['🧸 Ivy Doll (from your monthly box)', '📋 Welcome to School activity sheet', '🖍️ Crayons or colored pencils', '📷 Camera or phone for photos', '🎒 Small backpack or bag'],
        learning_objectives: ['Understand what school is and why we go', 'Practice school routines like sitting and listening', 'Express excitement about learning', 'Identify school supplies and their uses'],
        activities: [
          { title: 'School Supply Hunt', description: 'Help Ivy find her school supplies around the house', duration: '5 minutes' },
          { title: 'Practice Sitting Criss-Cross', description: 'Learn the proper way to sit for circle time', duration: '3 minutes' },
          { title: 'Pack Your Learning Bag', description: 'Choose special items for your first day', duration: '5 minutes' }
        ],
        color: 'bright-green'
      },
      {
        id: 2,
        title: 'Classroom Rules',
        slug: 'august-2-classroom-rules',
        description: 'Learn the important rules that help everyone have fun and stay safe at school. Practice listening, sharing, and being kind to friends.',
        week_number: 1,
        lesson_number: 2,
        duration_minutes: 6,
        youtube_video_id: null,
        materials: ['📋 Classroom Rules poster (from activity packet)', '⭐ Star stickers', '🖍️ Crayons', '🪞 Mirror (for practicing kind faces)', '🧸 Ivy Doll'],
        learning_objectives: ['Learn basic classroom rules and expectations', 'Practice using kind words and actions', 'Understand the importance of sharing', 'Demonstrate good listening skills'],
        activities: [
          { title: 'Rules Role Play', description: 'Act out different classroom scenarios with Ivy', duration: '4 minutes' },
          { title: 'Kind Words Practice', description: 'Practice saying please, thank you, and excuse me', duration: '3 minutes' },
          { title: 'Listening Game', description: 'Follow simple directions and listen carefully', duration: '5 minutes' }
        ],
        color: 'bright-yellow'
      },
      {
        id: 3,
        title: 'Making Friends',
        slug: 'august-3-making-friends',
        description: 'Discover the joy of friendship! Learn how to introduce yourself, share toys, and be a good friend to others.',
        week_number: 1,
        lesson_number: 3,
        duration_minutes: 7,
        youtube_video_id: null,
        materials: ['🧸 Ivy Doll and a stuffed animal friend', '🎭 Friendship bracelet materials (from box)', '📋 "All About Me" sheet', '🖍️ Crayons', '📷 Camera for friend photos'],
        learning_objectives: ['Learn how to introduce yourself to new friends', 'Practice sharing and taking turns', 'Understand what makes a good friend', 'Express kindness and empathy'],
        activities: [
          { title: 'Introduction Practice', description: 'Practice saying "Hi, I\'m..." with confidence', duration: '3 minutes' },
          { title: 'Friendship Bracelet Making', description: 'Create a special bracelet for a friend', duration: '8 minutes' },
          { title: 'Sharing Circle', description: 'Practice sharing toys and saying kind words', duration: '4 minutes' }
        ],
        color: 'bright-pink'
      },
      {
        id: 4,
        title: 'School Helpers',
        slug: 'august-4-school-helpers',
        description: 'Meet the special people who help us at school! Learn about teachers, principals, and other helpers who keep school fun and safe.',
        week_number: 1,
        lesson_number: 4,
        duration_minutes: 9,
        youtube_video_id: null,
        materials: ['👩‍🏫 School helpers matching cards (from packet)', '🎭 Dress-up items or hats', '📋 "Thank You" card template', '🖍️ Crayons', '🧸 Ivy Doll'],
        learning_objectives: ['Identify different school helpers and their jobs', 'Understand how helpers keep school safe and fun', 'Practice saying thank you to helpers', 'Express appreciation for community helpers'],
        activities: [
          { title: 'Helper Match Game', description: 'Match school helpers with their tools', duration: '5 minutes' },
          { title: 'Dress Up Play', description: 'Pretend to be different school helpers', duration: '6 minutes' },
          { title: 'Thank You Card Making', description: 'Create a special card for a school helper', duration: '7 minutes' }
        ],
        color: 'bright-purple'
      },
      {
        id: 5,
        title: 'My School Day',
        slug: 'august-5-my-school-day',
        description: 'Put it all together! Practice a full school day routine from arrival to pickup, including all the fun learning activities.',
        week_number: 1,
        lesson_number: 5,
        duration_minutes: 8,
        youtube_video_id: null,
        materials: ['📅 Daily schedule visual (from packet)', '🧸 Ivy Doll', '🎒 Small backpack', '📓 Pretend journal', '⏰ Clock or timer'],
        learning_objectives: ['Understand the sequence of a school day', 'Practice transitions between activities', 'Follow a visual schedule independently', 'Feel confident about school routines'],
        activities: [
          { title: 'Schedule Walk-Through', description: 'Practice each part of the school day', duration: '8 minutes' },
          { title: 'Transition Practice', description: 'Practice moving between different activities', duration: '5 minutes' },
          { title: 'School Day Story', description: 'Tell the story of your perfect school day', duration: '4 minutes' }
        ],
        color: 'bright-green'
      }
    ]
  }
}

export default async function AugustPage() {
  const data = await getAugustData()
  const { month, lessons } = data

  // Group lessons by week
  const lessonsByWeek = lessons.reduce((acc, lesson) => {
    if (!acc[lesson.week_number]) {
      acc[lesson.week_number] = []
    }
    acc[lesson.week_number].push(lesson)
    return acc
  }, {} as Record<number, typeof lessons>)

  return (
    <div className="min-h-screen bg-gradient-to-br from-bright-green-50 via-bright-yellow-50 to-bright-pink-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-bright-purple-100 rounded-full flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-bright-purple-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Mrs. Jenni's Virtual Classroom</h1>
                <p className="text-gray-600">Interactive Preschool Learning</p>
              </div>
            </div>
            <Badge className="bg-bright-green-100 text-bright-green-700 text-lg px-4 py-2">
              {month.name} - {month.title}
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-bright-yellow-100 rounded-full mb-6">
            <Users className="h-12 w-12 text-bright-yellow-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to {month.name}!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {month.description}. Join Mrs. Jenni for interactive lessons designed to prepare your little one for school success!
          </p>
          
          {/* Monthly Introduction Video */}
          <Card className="max-w-4xl mx-auto mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-bright-purple-600">
                <Play className="h-6 w-6" />
                Mrs. Jenni's {month.name} Welcome Message
              </CardTitle>
              <CardDescription>
                A special welcome from Mrs. Jenni introducing this month's theme and what to expect
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gradient-to-br from-bright-purple-100 to-bright-pink-100 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                    <Play className="h-10 w-10 text-bright-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Coming Soon!</h3>
                  <p className="text-gray-600">Mrs. Jenni's welcome video for {month.name}</p>
                  <p className="text-sm text-gray-500 mt-2">Duration: ~5 minutes</p>
                </div>
              </div>
              <Button className="w-full bg-bright-purple-500 hover:bg-bright-purple-600" disabled>
                <Play className="mr-2 h-5 w-5" />
                Watch Welcome Message (Coming Soon)
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Lessons by Week */}
        <div className="space-y-12">
          {Object.entries(lessonsByWeek).map(([weekNumber, weekLessons]) => (
            <div key={weekNumber} className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-bright-green-100 rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-bright-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Week {weekNumber}</h3>
                  <p className="text-gray-600">Building School Readiness Skills</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {weekLessons.map((lesson) => (
                  <Card key={lesson.id} className={`hover:shadow-lg transition-all duration-200 border-l-4 border-l-${lesson.color}-400`}>
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <Badge className={`bg-${lesson.color}-100 text-${lesson.color}-700 mb-2`}>
                          Lesson {lesson.lesson_number}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Clock className="h-4 w-4" />
                          {lesson.duration_minutes} min
                        </div>
                      </div>
                      <CardTitle className="text-lg leading-tight">{lesson.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {lesson.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      {/* Materials Preview */}
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                          <Package className="h-4 w-4" />
                          Materials Needed
                        </h4>
                        <div className="text-sm text-gray-600 space-y-1">
                          {lesson.materials.slice(0, 2).map((material, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                              {material}
                            </div>
                          ))}
                          {lesson.materials.length > 2 && (
                            <div className="text-xs text-gray-500">
                              +{lesson.materials.length - 2} more items
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="space-y-2">
                        <Link href={`/lesson/${lesson.slug}`}>
                          <Button className={`w-full bg-${lesson.color}-500 hover:bg-${lesson.color}-600`}>
                            <Play className="mr-2 h-4 w-4" />
                            Start Lesson
                          </Button>
                        </Link>
                        <Button variant="outline" size="sm" className="w-full">
                          <BookOpen className="mr-2 h-4 w-4" />
                          Preview Activities
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Monthly Box CTA */}
        <div className="mt-16 bg-gradient-to-r from-bright-purple-500 to-bright-pink-500 rounded-2xl p-8 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Get Your {month.name} Learning Box!</h3>
            <p className="text-xl mb-6 opacity-90">
              All the materials you need for this month's lessons, delivered to your door. 
              Includes Ivy Doll, activity sheets, craft supplies, and more!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-bright-purple-600 hover:bg-gray-100">
                <Package className="mr-2 h-5 w-5" />
                Order {month.name} Box - $29.99
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-bright-purple-600">
                <Mail className="mr-2 h-5 w-5" />
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 