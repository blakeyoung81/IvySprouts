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
  color: 'soft-green' | 'light-yellow' | 'soft-pink'
  isAvailable: boolean
  slug?: string
}

const colorVariants = {
  'soft-green': 'from-soft-green-100 to-soft-green-200 border-soft-green-300',
  'light-yellow': 'from-light-yellow-100 to-light-yellow-200 border-light-yellow-300',
  'soft-pink': 'from-soft-pink-100 to-soft-pink-200 border-soft-pink-300'
}

const iconColors = {
  'soft-green': 'text-soft-green-600',
  'light-yellow': 'text-light-yellow-600', 
  'soft-pink': 'text-soft-pink-600'
}

export function ThemeCard({ title, description, week, color, isAvailable, slug }: ThemeCardProps) {
  return (
    <Card className={cn(
      "lesson-card bg-gradient-to-br border-2",
      colorVariants[color],
      !isAvailable && "opacity-75"
    )}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-gray-800">
            {title}
          </CardTitle>
          <div className={cn("p-2 rounded-full bg-white/50", iconColors[color])}>
            {isAvailable ? (
              <Play className="h-5 w-5" />
            ) : (
              <Lock className="h-5 w-5" />
            )}
          </div>
        </div>
        <CardDescription className="text-gray-600">
          {week}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-4">{description}</p>
        {isAvailable ? (
          <Button asChild variant="outline" className="w-full">
            <Link href={slug ? `/lesson/${slug}` : '/store'}>
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