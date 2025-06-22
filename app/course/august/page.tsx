"use client"

import { useState } from 'react'
import { augustCurriculum } from '@/lib/august-curriculum'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, ChevronsRight, Heart, Info, Lightbulb, Play, Sparkles, Target, Users, Video } from 'lucide-react'
import Image from 'next/image'

const curriculum = augustCurriculum;
const week1 = curriculum.weeks[0];
const day1Lessons = week1.days[0].lessons;

// Define a type for a lesson
type Lesson = typeof day1Lessons[0];

export default function AugustCoursePage() {
  const [selectedLesson, setSelectedLesson] = useState<Lesson>(day1Lessons[0]);

  const colorVariants: { [key: string]: string } = {
    pink: 'bg-pink-500 hover:bg-pink-600 border-pink-500 text-pink-700 bg-pink-100',
    blue: 'bg-blue-500 hover:bg-blue-600 border-blue-500 text-blue-700 bg-blue-100',
    purple: 'bg-purple-500 hover:bg-purple-600 border-purple-500 text-purple-700 bg-purple-100',
    green: 'bg-green-500 hover:bg-green-600 border-green-500 text-green-700 bg-green-100',
  };

  const renderContentDetails = (contentItem: any) => {
    if (Array.isArray(contentItem.details)) {
      return (
        <ul className="list-disc list-inside space-y-1 pl-2">
          {contentItem.details.map((item: string, index: number) => (
            <li key={index} className="text-gray-700">{item}</li>
          ))}
        </ul>
      );
    }
    return <p className="text-gray-700 whitespace-pre-line">{contentItem.details}</p>;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <Badge variant="secondary" className="mb-2 bg-purple-100 text-purple-700">{curriculum.month.toUpperCase()}</Badge>
              <h1 className="text-4xl font-bold text-gray-900">{curriculum.theme}</h1>
              <p className="text-lg text-gray-600 mt-1">{week1.theme}</p>
            </div>
            <Image src="/images/ivysprout_smile_wide.png" alt="Ivy Sprout" width={80} height={80} />
          </div>
        </header>

        {/* Parent Note */}
        <Card className="mb-8 bg-yellow-50 border-yellow-200">
          <CardHeader className="flex flex-row items-center gap-3">
            <Info className="h-6 w-6 text-yellow-600" />
            <CardTitle className="text-yellow-800">{curriculum.parentNote.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-yellow-900">{curriculum.parentNote.content}</p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content: Selected Lesson */}
          <main className="lg:col-span-2">
            <Card className="sticky top-24">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${colorVariants[selectedLesson.color]}`}>
                      <selectedLesson.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-2xl font-bold">{selectedLesson.title}</CardTitle>
                  </div>
                  <Badge variant="secondary">Day 1</Badge>
                </div>
                <p className="text-gray-600 pt-2">{selectedLesson.description}</p>
              </CardHeader>
              <CardContent>
                {/* Video Placeholder */}
                <div className="aspect-video bg-gray-200 rounded-lg flex flex-col items-center justify-center mb-6">
                  <Video className="h-16 w-16 text-gray-400" />
                  <p className="mt-2 text-gray-500 font-semibold">Video Placeholder</p>
                  <p className="text-sm text-gray-400">Embed your YouTube video here</p>
                </div>

                {/* Lesson Content */}
                <div className="space-y-4">
                  {selectedLesson.content.map((item, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-gray-800 mb-1 flex items-center gap-2">
                        <ChevronsRight className="h-4 w-4 text-purple-500" />
                        {item.title}
                      </h4>
                      {renderContentDetails(item)}
                    </div>
                  ))}
                </div>

                {/* Outro */}
                <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <p className="text-purple-800 font-medium italic text-center">"{selectedLesson.outro}"</p>
                </div>
              </CardContent>
            </Card>
          </main>

          {/* Sidebar: Lesson List */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Week Focus Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Target className="text-green-500" /> Week 1 Focus</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p><Lightbulb className="inline h-4 w-4 mr-2 text-yellow-500"/><strong>WOW Word:</strong> {week1.focus.wowWord}</p>
                  <p><Sparkles className="inline h-4 w-4 mr-2 text-pink-500"/><strong>Social-Emotional:</strong> {week1.focus.socialEmotional}</p>
                  <p><Heart className="inline h-4 w-4 mr-2 text-red-500"/><strong>Oral Language:</strong> {week1.focus.oralLanguage}</p>
                </CardContent>
              </Card>

              {/* Lesson Selection Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Play className="text-blue-500" /> Day 1 Lessons</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {day1Lessons.map((lesson) => (
                    <button
                      key={lesson.id}
                      onClick={() => setSelectedLesson(lesson)}
                      className={`w-full text-left p-3 rounded-lg border-l-4 transition-all duration-200 flex items-center gap-3 ${
                        selectedLesson.id === lesson.id
                          ? `${colorVariants[lesson.color]} shadow-md scale-105`
                          : `bg-white hover:bg-gray-100 border-gray-200`
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${selectedLesson.id === lesson.id ? '' : colorVariants[lesson.color]}`}>
                        <lesson.icon className={`h-5 w-5 ${selectedLesson.id === lesson.id ? 'text-white' : ''}`} />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">{lesson.title}</p>
                      </div>
                      {selectedLesson.id === lesson.id && <Check className="h-5 w-5" />}
                    </button>
                  ))}
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
} 