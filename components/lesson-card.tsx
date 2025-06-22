"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Play, Download, ShoppingCart, Clock, BookOpen, Shirt, Gift, FileText } from 'lucide-react'
import { formatPrice, extractVideoId, getYouTubeThumbnail } from '@/lib/utils'
import { Database } from '@/types/database'
import { useCart } from '@/lib/cart-context'

type Product = Database['public']['Tables']['products']['Row']

interface LessonCardProps {
  product: Product
}

// Function to get appropriate icon and color based on product category
function getProductIcon(category: string | null) {
  switch (category) {
    case 'Merchandise':
      return { icon: Shirt, color: 'text-purple-600', bgColor: 'bg-purple-100' }
    case 'Lesson Plans':
      return { icon: BookOpen, color: 'text-blue-600', bgColor: 'bg-blue-100' }
    case 'Digital Resources':
      return { icon: Download, color: 'text-green-600', bgColor: 'bg-green-100' }
    case 'Gift Bundles':
      return { icon: Gift, color: 'text-pink-600', bgColor: 'bg-pink-100' }
    default:
      return { icon: Play, color: 'text-soft-green-600', bgColor: 'bg-soft-green-100' }
  }
}

export function LessonCard({ product }: LessonCardProps) {
  const videoId = product.video_url ? extractVideoId(product.video_url) : null
  const thumbnailUrl = videoId ? getYouTubeThumbnail(videoId) : null
  const { icon: IconComponent, color, bgColor } = getProductIcon(product.theme_week)
  const { dispatch } = useCart()

  const handlePurchase = () => {
    dispatch({ type: 'ADD_ITEM', product })
  }

  const isDigitalProduct = product.theme_week === 'Digital Resources' || product.pdf_url
  const isMerchandise = product.theme_week === 'Merchandise'
  const isLessonPlan = product.theme_week === 'Lesson Plans'

  return (
    <Card className="lesson-card group hover:shadow-lg transition-all duration-300">
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
          <div className={`flex items-center justify-center h-full ${bgColor}`}>
            <IconComponent className={`h-16 w-16 ${color}`} />
          </div>
        )}
        
        {/* Theme Badge */}
        {product.theme_week && (
          <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="bg-white/90 text-gray-700 text-xs">
              {product.theme_week}
            </Badge>
          </div>
        )}

        {/* Price Badge */}
        <div className="absolute top-3 right-3">
          <Badge className={`text-white ${
            product.price_cents === 0 
              ? 'bg-green-600' 
              : isMerchandise 
                ? 'bg-purple-600' 
                : isLessonPlan 
                  ? 'bg-blue-600' 
                  : 'bg-soft-green-600'
          }`}>
            {product.price_cents === 0 ? 'Free' : formatPrice(product.price_cents)}
          </Badge>
        </div>

        {/* Special Badges */}
        {isDigitalProduct && (
          <div className="absolute bottom-3 left-3">
            <Badge className="bg-green-600 text-white text-xs">
              <Download className="h-3 w-3 mr-1" />
              Instant Download
            </Badge>
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-white/90 rounded-full p-3">
            <IconComponent className="h-8 w-8 text-gray-800" />
          </div>
        </div>
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-soft-green-600 transition-colors line-clamp-2">
          {product.title}
        </CardTitle>
        <CardDescription className="text-gray-600 text-sm line-clamp-3">
          {product.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Materials/Features Count */}
        {product.materials && product.materials.length > 0 && (
          <div className="flex items-center text-sm text-gray-500">
            <FileText className="h-4 w-4 mr-1" />
            {product.materials.length} {isLessonPlan ? 'resources' : isMerchandise ? 'features' : 'materials'} included
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
            <Button 
              onClick={handlePurchase} 
              className={`w-full ${
                isMerchandise 
                  ? 'bg-purple-600 hover:bg-purple-700' 
                  : isLessonPlan 
                    ? 'bg-blue-600 hover:bg-blue-700' 
                    : 'bg-soft-green-600 hover:bg-soft-green-700'
              }`}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              {isMerchandise ? 'Add to Cart' : isDigitalProduct ? 'Buy & Download' : 'Purchase'} {formatPrice(product.price_cents)}
            </Button>
          )}

          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild className="flex-1">
              <Link href={`/lesson/${product.slug}`}>
                <IconComponent className="h-4 w-4 mr-1" />
                {videoId ? 'Preview' : 'View Details'}
              </Link>
            </Button>
            {(product.pdf_url || isDigitalProduct) && (
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