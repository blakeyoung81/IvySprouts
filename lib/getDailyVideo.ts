import { supabase } from './supabase'

export async function getDailyVideo() {
  try {
    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0]
    
    // Try to find a product for today or the most recent one
    const { data: products, error } = await supabase
      .from('products')
      .select('*')
      .not('video_url', 'is', null)
      .order('created_at', { ascending: false })
      .limit(1)

    if (error) {
      console.error('Error fetching daily video:', error)
      return null
    }

    if (products && products.length > 0) {
      return products[0]
    }

    return null
  } catch (error) {
    console.error('Error in getDailyVideo:', error)
    return null
  }
} 