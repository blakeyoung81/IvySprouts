"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Play, Lock } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface ThemeCardProps {
  title: string
  description: string
  week: string
  color: 'bright-green' | 'bright-yellow' | 'bright-pink' | 'bright-purple' | 'soft-green' | 'light-yellow' | 'soft-pink'
  isAvailable: boolean
  slug?: string
}

const colorVariants = {
  'bright-green': 'from-bright-green-100 to-bright-green-200 border-bright-green-300',
  'bright-yellow': 'from-bright-yellow-100 to-bright-yellow-200 border-bright-yellow-300',
  'bright-pink': 'from-bright-pink-100 to-bright-pink-200 border-bright-pink-300',
  'bright-purple': 'from-bright-purple-100 to-bright-purple-200 border-bright-purple-300',
  'soft-green': 'from-soft-green-100 to-soft-green-200 border-soft-green-300',
  'light-yellow': 'from-light-yellow-100 to-light-yellow-200 border-light-yellow-300',
  'soft-pink': 'from-soft-pink-100 to-soft-pink-200 border-soft-pink-300'
}

const iconColors = {
  'bright-green': 'text-bright-green-600',
  'bright-yellow': 'text-bright-yellow-600',
  'bright-pink': 'text-bright-pink-600',
  'bright-purple': 'text-bright-purple-600',
  'soft-green': 'text-soft-green-600',
  'light-yellow': 'text-light-yellow-600', 
  'soft-pink': 'text-soft-pink-600'
}

const buttonColors = {
  'bright-green': 'bg-bright-green-500 hover:bg-bright-green-600 text-white',
  'bright-yellow': 'bg-bright-yellow-500 hover:bg-bright-yellow-600 text-white',
  'bright-pink': 'bg-bright-pink-500 hover:bg-bright-pink-600 text-white',
  'bright-purple': 'bg-bright-purple-500 hover:bg-bright-purple-600 text-white',
  'soft-green': 'bg-soft-green-500 hover:bg-soft-green-600 text-white',
  'light-yellow': 'bg-light-yellow-500 hover:bg-light-yellow-600 text-white',
  'soft-pink': 'bg-soft-pink-500 hover:bg-soft-pink-600 text-white'
}

export function ThemeCard({ title, description, week, color, isAvailable, slug }: ThemeCardProps) {
  return (
    <Card className={cn(
      "lesson-card bg-gradient-to-br border-2 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1",
      colorVariants[color],
      !isAvailable && "opacity-75"
    )}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-gray-800">
            {title}
          </CardTitle>
          <div className={cn("p-2 rounded-full bg-white/70 shadow-sm", iconColors[color])}>
            {isAvailable ? (
              <Play className="h-5 w-5" />
            ) : (
              <Lock className="h-5 w-5" />
            )}
          </div>
        </div>
        <CardDescription className="text-gray-600 font-medium">
          {week}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-4">{description}</p>
        {isAvailable ? (
          <Button asChild className={cn("w-full", buttonColors[color])}>
            <Link href={slug ? `/lesson/${slug}` : '/course'}>
              Start Learning
            </Link>
          </Button>
        ) : (
          <Button variant="outline" className="w-full" disabled>
            Coming Soon
          </Button>
        )}
      </CardContent>
    </Card>
  )
} 