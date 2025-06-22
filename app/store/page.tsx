import { supabase } from '@/lib/supabase'
import { LessonCard } from '@/components/lesson-card'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Filter, BookOpen, Shirt, Download, Gift } from 'lucide-react'

export default async function StorePage() {
  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: true })

  if (error) {
    console.error('Error fetching products:', error)
  }

  // Organize products by category
  const productsByCategory = products?.reduce((acc, product) => {
    const category = product.theme_week || 'Other'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(product)
    return acc
  }, {} as Record<string, typeof products>) || {}

  // Define category order and icons
  const categoryConfig = {
    'Merchandise': { icon: Shirt, color: 'bg-purple-100 text-purple-700', description: 'Show your Ivy Sprouts pride!' },
    'Lesson Plans': { icon: BookOpen, color: 'bg-blue-100 text-blue-700', description: 'Professional teaching resources' },
    'Digital Resources': { icon: Download, color: 'bg-green-100 text-green-700', description: 'Instant download materials' },
    'Gift Bundles': { icon: Gift, color: 'bg-pink-100 text-pink-700', description: 'Perfect gift combinations' },
    'Introduction': { icon: BookOpen, color: 'bg-yellow-100 text-yellow-700', description: 'Start your learning journey' },
    'Month 1: At School': { icon: BookOpen, color: 'bg-indigo-100 text-indigo-700', description: 'August curriculum' }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Our Learning Store
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our collection of carefully crafted educational experiences, merchandise, and teaching resources. 
              Everything you need to spark curiosity and joy in learning!
            </p>
          </div>
        </div>
      </section>

      {/* Store Stats */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{products?.length || 0}</div>
                <div className="text-sm text-gray-500">Total Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{Object.keys(productsByCategory).length}</div>
                <div className="text-sm text-gray-500">Categories</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5 text-gray-400" />
              <span className="text-sm text-gray-600">Free shipping on all digital products</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products by Category */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.keys(productsByCategory).length > 0 ? (
            <div className="space-y-16">
              {Object.entries(productsByCategory).map(([category, categoryProducts]) => {
                const config = categoryConfig[category as keyof typeof categoryConfig]
                const IconComponent = config?.icon || BookOpen
                
                return (
                  <div key={category} className="space-y-8">
                    {/* Category Header */}
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-4">
                        <div className={`p-3 rounded-full ${config?.color || 'bg-gray-100 text-gray-700'}`}>
                          <IconComponent className="h-8 w-8" />
                        </div>
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">{category}</h2>
                      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {config?.description || 'Quality educational resources for your learning journey'}
                      </p>
                      <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700">
                        {categoryProducts.length} {categoryProducts.length === 1 ? 'item' : 'items'}
                      </div>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {categoryProducts.map((product) => (
                        <LessonCard 
                          key={product.id}
                          product={product}
                        />
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <ShoppingCart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No products available yet
                </h3>
                <p className="text-gray-600 mb-6">
                  We're working hard to bring you amazing educational content. 
                  Check back soon for new products!
                </p>
                <Button asChild>
                  <a href="mailto:hello@ivysprouts.com">
                    Get Notified When Available
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Featured Bundles CTA */}
      <section className="py-16 preschool-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Save Big with Our Bundle Deals
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Get more value with our carefully curated bundles. Perfect for families, teachers, 
            and anyone who wants the complete Ivy Sprouts experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-2xl font-bold text-gray-900 mb-2">Complete Curriculum</div>
              <div className="text-3xl font-bold text-soft-green-600 mb-2">$49.99</div>
              <div className="text-sm text-gray-600 mb-4">Full year • Save $30</div>
              <Button className="w-full bg-soft-green-600 hover:bg-soft-green-700">
                Get Complete Bundle
              </Button>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-2xl font-bold text-gray-900 mb-2">Teacher's Choice</div>
              <div className="text-3xl font-bold text-purple-600 mb-2">$79.99</div>
              <div className="text-sm text-gray-600 mb-4">All lesson plans • Save $50</div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Get Teacher Bundle
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 