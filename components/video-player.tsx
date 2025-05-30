"use client"

import { extractVideoId } from '@/lib/utils'
import { cn } from '@/lib/utils'

interface VideoPlayerProps {
  videoUrl: string
  title: string
  className?: string
}

export function VideoPlayer({ videoUrl, title, className }: VideoPlayerProps) {
  const videoId = extractVideoId(videoUrl)

  if (!videoId) {
    return (
      <div className={cn("bg-gray-100 rounded-lg p-8 text-center", className)}>
        <p className="text-gray-500">Video not available</p>
      </div>
    )
  }

  return (
    <div className={cn("relative w-full", className)}>
      <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden bg-gray-100">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
} 