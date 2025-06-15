import { supabase } from './supabase'

export interface Month {
  id: string
  name: string
  title: string
  description: string
  order_number: number
  is_active: boolean
  created_at: string
}

export interface Lesson {
  id: string
  month_id: string
  title: string
  slug: string
  description: string
  week_number: number
  lesson_number: number
  duration_minutes: number
  youtube_video_id: string | null
  materials: string[]
  learning_objectives: string[]
  activities: Activity[]
  color: string
  created_at: string
}

export interface Activity {
  title: string
  description: string
  duration: string
}

export interface UserProgress {
  id: string
  user_id: string
  lesson_id: string
  completed_at: string | null
  watch_time_seconds: number
  created_at: string
}

// Get all months
export async function getMonths(): Promise<Month[]> {
  const { data, error } = await supabase
    .from('months')
    .select('*')
    .order('order_number')

  if (error) {
    console.error('Error fetching months:', error)
    return []
  }

  return data || []
}

// Get a specific month by name
export async function getMonthByName(name: string): Promise<Month | null> {
  const { data, error } = await supabase
    .from('months')
    .select('*')
    .eq('name', name)
    .single()

  if (error) {
    console.error('Error fetching month:', error)
    return null
  }

  return data
}

// Get lessons for a specific month
export async function getLessonsByMonth(monthId: string): Promise<Lesson[]> {
  const { data, error } = await supabase
    .from('lessons')
    .select('*')
    .eq('month_id', monthId)
    .order('week_number, lesson_number')

  if (error) {
    console.error('Error fetching lessons:', error)
    return []
  }

  return data || []
}

// Get a specific lesson by slug
export async function getLessonBySlug(slug: string): Promise<Lesson | null> {
  const { data, error } = await supabase
    .from('lessons')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) {
    console.error('Error fetching lesson:', error)
    return null
  }

  return data
}

// Get user progress for lessons
export async function getUserProgress(userId: string, lessonIds: string[]): Promise<UserProgress[]> {
  const { data, error } = await supabase
    .from('user_progress')
    .select('*')
    .eq('user_id', userId)
    .in('lesson_id', lessonIds)

  if (error) {
    console.error('Error fetching user progress:', error)
    return []
  }

  return data || []
}

// Mark lesson as completed
export async function markLessonCompleted(userId: string, lessonId: string): Promise<boolean> {
  const { error } = await supabase
    .from('user_progress')
    .upsert({
      user_id: userId,
      lesson_id: lessonId,
      completed_at: new Date().toISOString(),
    })

  if (error) {
    console.error('Error marking lesson completed:', error)
    return false
  }

  return true
}

// Update watch time for a lesson
export async function updateWatchTime(userId: string, lessonId: string, watchTimeSeconds: number): Promise<boolean> {
  const { error } = await supabase
    .from('user_progress')
    .upsert({
      user_id: userId,
      lesson_id: lessonId,
      watch_time_seconds: watchTimeSeconds,
    })

  if (error) {
    console.error('Error updating watch time:', error)
    return false
  }

  return true
}

// Helper function to get YouTube embed URL
export function getYouTubeEmbedUrl(videoId: string | null): string | null {
  if (!videoId) return null
  return `https://www.youtube.com/embed/${videoId}`
}

// Helper function to format duration
export function formatDuration(minutes: number): string {
  if (minutes < 60) {
    return `${minutes} min`
  }
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60
  return `${hours}h ${remainingMinutes}m`
}

// Helper function to group lessons by week
export function groupLessonsByWeek(lessons: Lesson[]): Record<number, Lesson[]> {
  return lessons.reduce((acc, lesson) => {
    if (!acc[lesson.week_number]) {
      acc[lesson.week_number] = []
    }
    acc[lesson.week_number].push(lesson)
    return acc
  }, {} as Record<number, Lesson[]>)
} 