-- Create tables for the virtual preschool
CREATE TABLE IF NOT EXISTS months (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  order_number INTEGER NOT NULL,
  is_active BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS lessons (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  month_id UUID REFERENCES months(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
  week_number INTEGER NOT NULL,
  lesson_number INTEGER NOT NULL,
  duration_minutes INTEGER NOT NULL,
  youtube_video_id TEXT, -- Store just the YouTube video ID
  materials TEXT[],
  learning_objectives TEXT[],
  activities JSONB,
  color TEXT DEFAULT 'bright-green',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS user_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  lesson_id UUID REFERENCES lessons(id) ON DELETE CASCADE,
  completed_at TIMESTAMP WITH TIME ZONE,
  watch_time_seconds INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, lesson_id)
);

-- Keep existing tables
CREATE TABLE IF NOT EXISTS products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
  price_cents INTEGER NOT NULL DEFAULT 0,
  video_url TEXT,
  pdf_url TEXT,
  materials TEXT[],
  theme_week TEXT,
  stripe_price_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS subscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  stripe_subscription_id TEXT UNIQUE NOT NULL,
  stripe_customer_id TEXT NOT NULL,
  status TEXT NOT NULL,
  current_period_start TIMESTAMP WITH TIME ZONE NOT NULL,
  current_period_end TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS purchases (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  stripe_payment_intent_id TEXT UNIQUE NOT NULL,
  amount_cents INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert months data
INSERT INTO months (name, title, description, order_number, is_active) VALUES
('August', 'At School', 'Learn about school routines, making friends, and classroom expectations', 1, true),
('September', 'All About Me', 'Explore identity, family, and personal interests', 2, false),
('October', 'Fall Fun', 'Discover autumn, harvest, and seasonal changes', 3, false),
('November', 'Thanksgiving', 'Practice gratitude and learn about traditions', 4, false),
('December', 'Winter Holidays', 'Celebrate winter traditions and giving', 5, false),
('January', 'New Beginnings', 'Set goals and learn about fresh starts', 6, false),
('February', 'Love & Friendship', 'Explore relationships and kindness', 7, false),
('March', 'Spring Awakening', 'Discover growth, plants, and new life', 8, false),
('April', 'Earth & Nature', 'Learn about our planet and environment', 9, false),
('May', 'Community Helpers', 'Meet the people who help our community', 10, false),
('June', 'Summer Fun', 'Explore summer activities and outdoor play', 11, false),
('July', 'Exploration', 'Discover new places and adventures', 12, false);

-- Insert August lessons with proper YouTube integration
INSERT INTO lessons (month_id, title, slug, description, week_number, lesson_number, duration_minutes, youtube_video_id, materials, learning_objectives, activities, color) 
SELECT 
  m.id,
  'Welcome to School',
  'august-1-welcome-to-school',
  'Help your little one get excited about learning! This introductory lesson covers school routines, classroom expectations, and the joy of learning together.',
  1,
  1,
  8,
  NULL, -- You'll add real YouTube video IDs here
  ARRAY['🧸 Ivy Doll (from your monthly box)', '📋 Welcome to School activity sheet', '🖍️ Crayons or colored pencils', '📷 Camera or phone for photos', '🎒 Small backpack or bag'],
  ARRAY['Understand what school is and why we go', 'Practice school routines like sitting and listening', 'Express excitement about learning', 'Identify school supplies and their uses'],
  '[
    {"title": "School Supply Hunt", "description": "Help Ivy find her school supplies around the house", "duration": "5 minutes"},
    {"title": "Practice Sitting Criss-Cross", "description": "Learn the proper way to sit for circle time", "duration": "3 minutes"},
    {"title": "Pack Your Learning Bag", "description": "Choose special items for your first day", "duration": "5 minutes"}
  ]'::jsonb,
  'bright-green'
FROM months m WHERE m.name = 'August';

-- Add more August lessons (I'll add a few key ones)
INSERT INTO lessons (month_id, title, slug, description, week_number, lesson_number, duration_minutes, youtube_video_id, materials, learning_objectives, activities, color) 
SELECT 
  m.id,
  'Making Friends',
  'august-3-making-friends',
  'Discover the joy of friendship! Learn how to introduce yourself, share toys, and be a good friend to others.',
  1,
  3,
  7,
  NULL,
  ARRAY['🧸 Ivy Doll and a stuffed animal friend', '🎭 Friendship bracelet materials (from box)', '📋 "All About Me" sheet', '🖍️ Crayons', '📷 Camera for friend photos'],
  ARRAY['Learn how to introduce yourself to new friends', 'Practice sharing and taking turns', 'Understand what makes a good friend', 'Express kindness and empathy'],
  '[
    {"title": "Introduction Practice", "description": "Practice saying \"Hi, I am...\" with confidence", "duration": "3 minutes"},
    {"title": "Friendship Bracelet Making", "description": "Create a special bracelet for a friend", "duration": "8 minutes"},
    {"title": "Sharing Circle", "description": "Practice sharing toys and saying kind words", "duration": "4 minutes"}
  ]'::jsonb,
  'bright-pink'
FROM months m WHERE m.name = 'August';

-- Keep existing sample products for backward compatibility
INSERT INTO products (title, slug, description, price_cents, video_url, materials, theme_week) VALUES
(
  'Week 0: Welcome to Learning!',
  'week-0-welcome',
  'A free introduction to our learning approach. Perfect for getting started with your little one!',
  0,
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  ARRAY['Paper', 'Crayons', 'Enthusiasm!'],
  'Introduction'
),
(
  'August Monthly Box',
  'august-monthly-box',
  'Complete August learning materials including Ivy Doll, activity sheets, and craft supplies for all 20 lessons.',
  2999,
  NULL,
  ARRAY['Ivy Doll', 'Activity sheets for all lessons', 'Craft materials', 'Parent guide'],
  'Month 1: At School'
);

-- Enable Row Level Security
ALTER TABLE months ENABLE ROW LEVEL SECURITY;
ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE purchases ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Months are viewable by everyone" ON months FOR SELECT USING (true);
CREATE POLICY "Lessons are viewable by everyone" ON lessons FOR SELECT USING (true);
CREATE POLICY "Users can view their own progress" ON user_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update their own progress" ON user_progress FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own progress" ON user_progress FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Products are viewable by everyone" ON products FOR SELECT USING (true);
CREATE POLICY "Users can view their own subscriptions" ON subscriptions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can view their own purchases" ON purchases FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Anyone can insert messages" ON messages FOR INSERT WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX idx_lessons_month_id ON lessons(month_id);
CREATE INDEX idx_lessons_slug ON lessons(slug);
CREATE INDEX idx_lessons_week_lesson ON lessons(week_number, lesson_number);
CREATE INDEX idx_user_progress_user_lesson ON user_progress(user_id, lesson_id);
CREATE INDEX idx_products_slug ON products(slug);
CREATE INDEX idx_subscriptions_user_id ON subscriptions(user_id);
CREATE INDEX idx_purchases_user_id ON purchases(user_id); 