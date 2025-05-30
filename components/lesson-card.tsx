"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Play, Download, ShoppingCart, Clock } from 'lucide-react'
import { formatPrice, extractVideoId, getYouTubeThumbnail } from '@/lib/utils'
import { Database } from '@/types/database'

type Product = Database['public']['Tables']['products']['Row']

interface LessonCardProps {
  product: Product
}

export function LessonCard({ product }: LessonCardProps) {
  const videoId = product.video_url ? extractVideoId(product.video_url) : null
  const thumbnailUrl = videoId ? getYouTubeThumbnail(videoId) : null

  const handlePurchase = () => {
    // TODO: Implement Stripe checkout
    console.log('Purchase:', product.id)
  }

  return (
    <Card className="lesson-card group">
      {/* Thumbnail */}
      <div className="relative h-48 bg-gradient-to-br from-soft-green-100 to-soft-green-200 rounded-t-xl overflow-hidden">
        {thumbnailUrl ? (
          <Image
            src={thumbnailUrl}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <Play className="h-12 w-12 text-soft-green-600" />
          </div>
        )}
        
        {/* Theme Badge */}
        {product.theme_week && (
          <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="bg-white/90 text-gray-700">
              {product.theme_week}
            </Badge>
          </div>
        )}

        {/* Price Badge */}
        <div className="absolute top-3 right-3">
          <Badge className="bg-soft-green-600 text-white">
            {product.price_cents === 0 ? 'Free' : formatPrice(product.price_cents)}
          </Badge>
        </div>

        {/* Play Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-white/90 rounded-full p-3">
            <Play className="h-8 w-8 text-gray-800" />
          </div>
        </div>
      </div>

      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-soft-green-600 transition-colors">
          {product.title}
        </CardTitle>
        <CardDescription className="text-gray-600 text-sm line-clamp-2">
          {product.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Materials Count */}
        {product.materials && product.materials.length > 0 && (
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            {product.materials.length} materials needed
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col gap-2">
          {product.price_cents === 0 ? (
            <Button asChild className="w-full">
              <Link href={`/lesson/${product.slug}`}>
                <Play className="h-4 w-4 mr-2" />
                Start Free Lesson
              </Link>
            </Button>
          ) : (
            <Button onClick={handlePurchase} className="w-full bg-soft-green-600 hover:bg-soft-green-700">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Buy for {formatPrice(product.price_cents)}
            </Button>
          )}

          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild className="flex-1">
              <Link href={`/lesson/${product.slug}`}>
                <Play className="h-4 w-4 mr-1" />
                Preview
              </Link>
            </Button>
            {product.pdf_url && (
              <Button variant="outline" size="sm" className="flex-1">
                <Download className="h-4 w-4 mr-1" />
                Sample
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 