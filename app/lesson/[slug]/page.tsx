import { notFound } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { VideoPlayer } from '@/components/video-player'
import { MaterialChecklist } from '@/components/material-checklist'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Download, Play, Star, Clock } from 'lucide-react'

interface LessonPageProps {
  params: {
    slug: string
  }
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { data: product, error } = await supabase
    .from('products')
    .select('*')
    .eq('slug', params.slug)
    .single()

  if (error || !product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            {product.theme_week && (
              <Badge variant="secondary" className="bg-soft-green-100 text-soft-green-700">
                {product.theme_week}
              </Badge>
            )}
            <Badge className="bg-soft-green-600 text-white">
              {product.price_cents === 0 ? 'Free' : `$${(product.price_cents / 100).toFixed(2)}`}
            </Badge>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {product.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            {product.description}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Video Player */}
            {product.video_url && (
              <Card className="lesson-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Play className="h-5 w-5 text-soft-green-600" />
                    Video Lesson
                  </CardTitle>
                  <CardDescription>
                    Watch along and learn together!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <VideoPlayer 
                    videoUrl={product.video_url} 
                    title={product.title}
                  />
                </CardContent>
              </Card>
            )}

            {/* Lesson Content */}
            <Card className="lesson-card">
              <CardHeader>
                <CardTitle>About This Lesson</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
                
                {product.theme_week && (
                  <div className="mt-6 p-4 bg-soft-green-50 rounded-lg border border-soft-green-200">
                    <h4 className="font-semibold text-soft-green-800 mb-2">
                      Learning Theme: {product.theme_week}
                    </h4>
                    <p className="text-soft-green-700 text-sm">
                      This lesson is part of our structured curriculum designed to build 
                      foundational skills through engaging, age-appropriate activities.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Materials List */}
            {product.materials && product.materials.length > 0 && (
              <Card className="lesson-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-soft-green-600" />
                    Materials Needed
                  </CardTitle>
                  <CardDescription>
                    Gather these items before starting
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <MaterialChecklist materials={product.materials} />
                </CardContent>
              </Card>
            )}

            {/* Download PDF */}
            {product.pdf_url && (
              <Card className="lesson-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Download className="h-5 w-5 text-soft-green-600" />
                    Lesson Materials
                  </CardTitle>
                  <CardDescription>
                    Download printable activities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full bg-soft-green-600 hover:bg-soft-green-700">
                    <a href={product.pdf_url} download>
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Lesson Info */}
            <Card className="lesson-card bg-gradient-to-br from-soft-green-50 to-soft-pink-50 border-soft-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-soft-green-600" />
                  Lesson Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Age Range:</span>
                  <span className="font-medium">2-5 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">15-20 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Difficulty:</span>
                  <span className="font-medium">Beginner</span>
                </div>
                {product.materials && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Materials:</span>
                    <span className="font-medium">{product.materials.length} items</span>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Support */}
            <Card className="lesson-card">
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Having trouble with this lesson? We're here to help!
                </p>
                <Button variant="outline" className="w-full">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 