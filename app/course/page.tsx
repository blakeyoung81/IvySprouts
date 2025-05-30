import { VideoPlayer } from '@/components/video-player'
import { MaterialChecklist } from '@/components/material-checklist'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Play, Package, BookOpen, Leaf, Clock, Users, Mail } from 'lucide-react'
import Link from 'next/link'

const months = [
  { id: 1, name: 'August', title: 'At School', isActive: true, isCompleted: false },
  { id: 2, name: 'September', title: 'All About Me', isActive: false, isCompleted: false },
  { id: 3, name: 'October', title: 'Fall Fun', isActive: false, isCompleted: false },
  { id: 4, name: 'November', title: 'Thanksgiving', isActive: false, isCompleted: false },
  { id: 5, name: 'December', title: 'Winter Holidays', isActive: false, isCompleted: false },
  { id: 6, name: 'January', title: 'New Beginnings', isActive: false, isCompleted: false },
  { id: 7, name: 'February', title: 'Love & Friendship', isActive: false, isCompleted: false },
  { id: 8, name: 'March', title: 'Spring Awakening', isActive: false, isCompleted: false },
  { id: 9, name: 'April', title: 'Earth & Nature', isActive: false, isCompleted: false },
  { id: 10, name: 'May', title: 'Community Helpers', isActive: false, isCompleted: false },
  { id: 11, name: 'June', title: 'Summer Fun', isActive: false, isCompleted: false },
  { id: 12, name: 'July', title: 'Exploration', isActive: false, isCompleted: false },
]

const augustLessons = [
  {
    week: 1,
    lessons: [
      { id: 1, title: 'Welcome to School', duration: '8 min', isCompleted: false },
      { id: 2, title: 'Classroom Rules', duration: '6 min', isCompleted: false },
      { id: 3, title: 'Making Friends', duration: '7 min', isCompleted: false },
      { id: 4, title: 'School Helpers', duration: '9 min', isCompleted: false },
      { id: 5, title: 'My School Day', duration: '8 min', isCompleted: false },
    ]
  },
  {
    week: 2,
    lessons: [
      { id: 6, title: 'Listening Ears', duration: '7 min', isCompleted: false },
      { id: 7, title: 'Sharing is Caring', duration: '8 min', isCompleted: false },
      { id: 8, title: 'Line Up Time', duration: '5 min', isCompleted: false },
      { id: 9, title: 'Quiet Voices', duration: '6 min', isCompleted: false },
      { id: 10, title: 'Clean Up Fun', duration: '7 min', isCompleted: false },
    ]
  },
  {
    week: 3,
    lessons: [
      { id: 11, title: 'Letters in My Name', duration: '9 min', isCompleted: false },
      { id: 12, title: 'Counting to 10', duration: '8 min', isCompleted: false },
      { id: 13, title: 'Colors Everywhere', duration: '7 min', isCompleted: false },
      { id: 14, title: 'Shape Detective', duration: '8 min', isCompleted: false },
      { id: 15, title: 'Pattern Play', duration: '6 min', isCompleted: false },
    ]
  },
  {
    week: 4,
    lessons: [
      { id: 16, title: 'Germ Busters', duration: '7 min', isCompleted: false },
      { id: 17, title: 'Rainbow Colors', duration: '8 min', isCompleted: false },
      { id: 18, title: 'Special School Buddy', duration: '10 min', isCompleted: false },
      { id: 19, title: 'Show and Tell', duration: '9 min', isCompleted: false },
      { id: 20, title: 'August Celebration', duration: '8 min', isCompleted: false },
    ]
  }
]

export default function CoursePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Left Sidebar - Monthly Navigation */}
        <div className="w-80 bg-white shadow-lg border-r border-gray-200 min-h-screen">
          <div className="p-6 bg-gradient-to-r from-bright-purple-500 to-bright-pink-500">
            <h2 className="text-2xl font-bold text-white mb-2">Mrs. Jeni's Class</h2>
            <p className="text-white opacity-90">Your Learning Journey</p>
          </div>
          <div className="p-4">
            <div className="space-y-2">
              {months.map((month) => (
                <button
                  key={month.id}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${
                    month.isActive 
                      ? 'bg-bright-purple-100 border-2 border-bright-purple-300 shadow-md' 
                      : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className={`font-semibold ${
                        month.isActive ? 'text-bright-purple-700' : 'text-gray-700'
                      }`}>
                        Month {month.id}: {month.name}
                      </h3>
                      <p className={`text-sm ${
                        month.isActive ? 'text-bright-purple-600' : 'text-gray-500'
                      }`}>
                        {month.title}
                      </p>
                    </div>
                    {month.isCompleted && (
                      <div className="w-6 h-6 bg-bright-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex">
          {/* Center Content */}
          <div className="flex-1 p-8">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Welcome to Mrs. Jeni's Class
                </h1>
                <h2 className="text-3xl font-semibold text-bright-purple-600 mb-4">
                  AUGUST
                </h2>
                <Badge className="bg-bright-green-100 text-bright-green-700 text-lg px-4 py-2">
                  Month 1: At School
                </Badge>
              </div>

              {/* Monthly Video */}
              <div className="mb-8">
                <Card className="bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-bright-purple-600">
                      <Play className="h-6 w-6" />
                      August Monthly Introduction
                    </CardTitle>
                    <CardDescription>
                      Welcome to our August theme: At School! Let's learn about classroom routines and making friends.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                      <div className="text-center">
                        <Play className="h-16 w-16 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-500">Mrs. Jeni's August Welcome Video</p>
                        <p className="text-sm text-gray-400">Duration: 12 minutes</p>
                      </div>
                    </div>
                    <Button className="w-full bg-bright-purple-500 hover:bg-bright-purple-600">
                      <Play className="mr-2 h-5 w-5" />
                      Play August Introduction
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Monthly Theme */}
              <div className="mb-8">
                <Card className="bg-gradient-to-r from-bright-green-50 to-bright-yellow-50 border-bright-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-bright-green-700">
                      <BookOpen className="h-6 w-6" />
                      This Month's Theme: At School
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      This month, we'll focus on helping your little one feel comfortable and confident at school. 
                      We'll cover social skills, classroom routines, making friends, and all the exciting things 
                      that happen in a preschool environment.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-bright-green-200 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Users className="h-6 w-6 text-bright-green-600" />
                        </div>
                        <p className="text-sm font-medium text-gray-700">Social Skills</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-bright-yellow-200 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Clock className="h-6 w-6 text-bright-yellow-600" />
                        </div>
                        <p className="text-sm font-medium text-gray-700">Routines</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-bright-pink-200 rounded-full flex items-center justify-center mx-auto mb-2">
                          <BookOpen className="h-6 w-6 text-bright-pink-600" />
                        </div>
                        <p className="text-sm font-medium text-gray-700">Learning</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-bright-purple-200 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Leaf className="h-6 w-6 text-bright-purple-600" />
                        </div>
                        <p className="text-sm font-medium text-gray-700">Fun!</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Monthly Box */}
              <div className="mb-8">
                <Card className="bg-gradient-to-r from-bright-pink-50 to-bright-purple-50 border-bright-pink-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-bright-pink-700">
                      <Package className="h-6 w-6" />
                      August Monthly Box
                    </CardTitle>
                    <CardDescription>
                      Optional monthly box with all the materials for this month's activities
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-700">
                        Get everything you need for August's "At School" theme delivered to your door! 
                        This month's box includes materials to create your own classroom buddy and practice school routines.
                      </p>
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
                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button className="bg-bright-pink-500 hover:bg-bright-pink-600 flex-1">
                          <Package className="mr-2 h-5 w-5" />
                          Order August Box - $25
                        </Button>
                        <Button variant="outline" className="border-bright-pink-300 text-bright-pink-600 hover:bg-bright-pink-50">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Weekly Newsletter Section */}
              <div className="mb-8">
                <Card className="bg-gradient-to-r from-bright-purple-50 to-bright-green-50 border-bright-purple-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-bright-purple-700">
                      <Mail className="h-6 w-6" />
                      Weekly Newsletter
                    </CardTitle>
                    <CardDescription>
                      Get weekly tips, bonus activities, and encouragement delivered to your inbox
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      Every week, Mrs. Jeni sends you a personalized newsletter with bonus activities, 
                      parenting tips, and encouragement to support your child's learning journey. 
                      Plus, get sneak peeks of what's coming next week!
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-bright-purple-200">
                      <h4 className="font-semibold text-gray-800 mb-2">This Week's Newsletter Includes:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Extension activities for this week's lessons</li>
                        <li>• Tips for helping your child with school transitions</li>
                        <li>• Fun family activities for the weekend</li>
                        <li>• Preview of next week's exciting content</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Field Trip Section */}
              <div>
                <Card className="bg-gradient-to-r from-bright-yellow-50 to-bright-green-50 border-bright-yellow-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-bright-yellow-700">
                      <Calendar className="h-6 w-6" />
                      Virtual Field Trip: School Tour
                    </CardTitle>
                    <CardDescription>
                      Take a virtual tour of different school areas and learn what happens there
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      Join Mrs. Jeni as we explore different areas of a school - the classroom, library, 
                      playground, cafeteria, and more! We'll learn about what happens in each place and 
                      who the helpful people are that work there.
                    </p>
                    <Button className="bg-bright-yellow-500 hover:bg-bright-yellow-600 text-white">
                      <Play className="mr-2 h-5 w-5" />
                      Start School Tour
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Lessons */}
          <div className="w-80 bg-white shadow-lg border-l border-gray-200 p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">August Lessons</h3>
            <div className="space-y-6">
              {augustLessons.map((week) => (
                <div key={week.week}>
                  <h4 className="font-semibold text-bright-purple-600 mb-3 flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Week {week.week}
                  </h4>
                  <div className="space-y-2">
                    {week.lessons.map((lesson) => (
                      <Link 
                        key={lesson.id} 
                        href={`/lesson/august-${lesson.id}`}
                        className="block p-3 bg-gray-50 hover:bg-bright-purple-50 rounded-lg border border-gray-200 hover:border-bright-purple-200 transition-all duration-200"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <h5 className="font-medium text-gray-800 text-sm">{lesson.title}</h5>
                          {lesson.isCompleted && (
                            <div className="w-4 h-4 bg-bright-green-500 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Clock className="h-3 w-3" />
                          <span>{lesson.duration}</span>
                          <Play className="h-3 w-3 ml-auto" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 