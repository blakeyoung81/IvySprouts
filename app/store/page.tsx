import { supabase } from '@/lib/supabase'
import { LessonCard } from '@/components/lesson-card'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Filter } from 'lucide-react'

export default async function StorePage() {
  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: true })

  if (error) {
    console.error('Error fetching products:', error)
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
              Discover our collection of carefully crafted educational experiences. 
              Each lesson is designed to spark curiosity and joy in your little learner.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                All Themes
              </Button>
              <span className="text-sm text-gray-500">
                {products?.length || 0} lessons available
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5 text-gray-400" />
              <span className="text-sm text-gray-600">Free shipping on all digital products</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {products && products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <LessonCard 
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <ShoppingCart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No lessons available yet
                </h3>
                <p className="text-gray-600 mb-6">
                  We're working hard to bring you amazing educational content. 
                  Check back soon for new lessons!
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

      {/* Summer Bundle CTA */}
      <section className="py-16 preschool-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Save with our Summer Bundle
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Get access to all 12 weeks of curriculum for one low price. 
            Perfect for families who want the complete learning experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">$30</div>
              <div className="text-sm text-gray-600">12 weeks • Save $30</div>
            </div>
            <Button size="lg" className="bg-soft-green-600 hover:bg-soft-green-700">
              Get Summer Bundle
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 