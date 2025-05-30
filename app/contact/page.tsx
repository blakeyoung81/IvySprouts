import { ContactForm } from '@/components/contact-form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, MessageCircle, Heart, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600">
            We'd love to hear from you! Whether you have questions, feedback, 
            or just want to share your little one's learning journey.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="lesson-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-soft-green-600" />
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="lesson-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-soft-green-600" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                  <p className="text-gray-600">hello@ivysprouts.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Response Time</h4>
                  <p className="text-gray-600">We typically respond within 24 hours</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Support Hours</h4>
                  <p className="text-gray-600">Monday - Friday, 9 AM - 5 PM EST</p>
                </div>
              </CardContent>
            </Card>

            <Card className="lesson-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-soft-green-600" />
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">What age group are the lessons for?</h4>
                  <p className="text-gray-600 text-sm">Our lessons are designed for children ages 2-5 years old.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">How long are the video lessons?</h4>
                  <p className="text-gray-600 text-sm">Most video lessons are 10-15 minutes long, perfect for little attention spans.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Do I need special materials?</h4>
                  <p className="text-gray-600 text-sm">We use common household items and basic craft supplies that are easy to find.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Can I access lessons offline?</h4>
                  <p className="text-gray-600 text-sm">PDF materials can be downloaded, but videos require an internet connection.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="lesson-card bg-gradient-to-br from-soft-green-50 to-soft-pink-50 border-soft-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-soft-green-600" />
                  Need Immediate Help?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  For urgent questions about your account or technical issues, 
                  email us directly at support@ivysprouts.com
                </p>
                <p className="text-sm text-gray-500">
                  We're here to help make your learning journey as smooth as possible!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 