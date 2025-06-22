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
),

-- MERCHANDISE SECTION
(
  'Ivy Sprout Plushie',
  'ivy-sprout-plushie',
  'Meet Ivy! Our adorable mascot plushie is the perfect learning companion for your little one. Soft, cuddly, and ready for adventures in learning. Made with premium materials and child-safe construction.',
  1999,
  NULL,
  ARRAY['12-inch soft plushie', 'Child-safe materials', 'Machine washable', 'Ivy Sprouts branded tag'],
  'Merchandise'
),
(
  'Ivy Leaf Earrings',
  'ivy-leaf-earrings',
  'Beautiful handcrafted ivy leaf earrings for the stylish parent! Show your love for learning with these elegant sterling silver earrings featuring delicate ivy leaf designs.',
  2499,
  NULL,
  ARRAY['Sterling silver', 'Hypoallergenic', 'Gift box included', 'Ivy Sprouts jewelry pouch'],
  'Merchandise'
),
(
  'Ivy Sprouts Learning T-Shirt',
  'ivy-sprouts-tshirt',
  'Comfortable and stylish t-shirt featuring our signature Ivy Sprouts logo. Perfect for parents, teachers, or anyone who believes in the power of early learning!',
  1899,
  NULL,
  ARRAY['100% organic cotton', 'Available in sizes XS-XXL', 'Machine washable', 'Unisex fit'],
  'Merchandise'
),
(
  'Ivy Sprouts Tote Bag',
  'ivy-sprouts-tote-bag',
  'Eco-friendly canvas tote bag perfect for carrying learning materials, library books, or everyday essentials. Features our beautiful Ivy Sprouts design.',
  1299,
  NULL,
  ARRAY['Durable canvas material', 'Large capacity', 'Reinforced handles', 'Eco-friendly'],
  'Merchandise'
),
(
  'Little Learner Water Bottle',
  'little-learner-water-bottle',
  'Keep your little sprout hydrated with this adorable stainless steel water bottle. Features fun learning-themed designs and is perfect for school or home.',
  1599,
  NULL,
  ARRAY['16oz stainless steel', 'BPA-free', 'Leak-proof lid', 'Easy-grip design for small hands'],
  'Merchandise'
),

-- LESSON PLAN MATERIALS SECTION
(
  'Alphabet Adventure Pack',
  'alphabet-adventure-pack',
  'Complete alphabet learning bundle with 26 interactive activities, printable worksheets, and hands-on crafts. Perfect for teachers and homeschool families!',
  1499,
  NULL,
  ARRAY['26 letter activities', '50+ printable worksheets', 'Craft templates', 'Teacher guide', 'Assessment tools'],
  'Lesson Plans'
),
(
  'Numbers & Counting Curriculum',
  'numbers-counting-curriculum',
  'Comprehensive math readiness program covering numbers 1-20, counting, patterns, and basic math concepts. Includes manipulatives templates and progress tracking.',
  1799,
  NULL,
  ARRAY['Number recognition activities', 'Counting games', 'Pattern worksheets', 'Math manipulative templates', 'Progress charts'],
  'Lesson Plans'
),
(
  'Colors & Shapes Discovery Kit',
  'colors-shapes-discovery-kit',
  'Engaging activities to teach colors, shapes, and spatial concepts. Includes sorting games, art projects, and real-world application activities.',
  1299,
  NULL,
  ARRAY['Color recognition activities', 'Shape sorting games', 'Art project templates', 'Scavenger hunt cards', 'Assessment rubrics'],
  'Lesson Plans'
),
(
  'Social Skills Builder Bundle',
  'social-skills-builder-bundle',
  'Essential social-emotional learning activities covering friendship, emotions, sharing, and kindness. Perfect for building character and social awareness.',
  1699,
  NULL,
  ARRAY['Emotion identification cards', 'Friendship activities', 'Kindness challenges', 'Role-play scenarios', 'Parent communication tools'],
  'Lesson Plans'
),
(
  'Science Exploration Pack',
  'science-exploration-pack',
  'Hands-on science activities perfect for curious preschoolers. Covers basic concepts like weather, plants, animals, and simple experiments.',
  1899,
  NULL,
  ARRAY['15 science experiments', 'Observation journals', 'Nature study guides', 'Safety guidelines', 'Extension activities'],
  'Lesson Plans'
),
(
  'Creative Arts & Crafts Collection',
  'creative-arts-crafts-collection',
  'Inspire creativity with this comprehensive arts and crafts curriculum. Includes seasonal projects, fine motor skill builders, and artistic expression activities.',
  1599,
  NULL,
  ARRAY['25 craft projects', 'Fine motor activities', 'Art technique guides', 'Supply lists', 'Display ideas'],
  'Lesson Plans'
),
(
  'Seasonal Learning Bundle - Fall',
  'seasonal-learning-fall',
  'Complete fall-themed curriculum covering autumn changes, harvest time, Thanksgiving, and Halloween. Perfect for September through November learning.',
  2199,
  NULL,
  ARRAY['Fall science activities', 'Harvest math games', 'Thanksgiving crafts', 'Halloween safety lessons', 'Seasonal vocabulary cards'],
  'Lesson Plans'
),
(
  'Pre-Reading Skills Mastery',
  'pre-reading-skills-mastery',
  'Build essential pre-reading skills with phonemic awareness activities, letter sounds, rhyming games, and story comprehension exercises.',
  1999,
  NULL,
  ARRAY['Phonemic awareness games', 'Letter sound activities', 'Rhyming exercises', 'Story comprehension tools', 'Reading readiness assessments'],
  'Lesson Plans'
),
(
  'Motor Skills Development Kit',
  'motor-skills-development-kit',
  'Comprehensive fine and gross motor skill activities designed to prepare children for writing and physical coordination challenges.',
  1399,
  NULL,
  ARRAY['Fine motor exercises', 'Gross motor games', 'Pre-writing activities', 'Coordination challenges', 'Progress tracking sheets'],
  'Lesson Plans'
),
(
  'Complete Preschool Curriculum',
  'complete-preschool-curriculum',
  'Our most comprehensive offering! A full year of preschool curriculum covering all developmental domains. Perfect for homeschool families or supplemental learning.',
  4999,
  NULL,
  ARRAY['12 months of lessons', '200+ activities', 'Assessment tools', 'Parent guides', 'Printable resources', 'Video tutorials'],
  'Lesson Plans'
),

-- DIGITAL RESOURCES
(
  'Printable Activity Sheets - Volume 1',
  'printable-activities-vol1',
  'Instant download collection of 50 engaging activity sheets covering letters, numbers, colors, and shapes. Perfect for quiet time or travel!',
  799,
  NULL,
  ARRAY['50 printable sheets', 'PDF format', 'Instant download', 'Answer keys included', 'Commercial use license'],
  'Digital Resources'
),
(
  'Ivy Sprouts Coloring Book',
  'ivy-sprouts-coloring-book',
  'Delightful digital coloring book featuring Ivy and friends in learning adventures. 25 pages of educational fun that you can print at home!',
  599,
  NULL,
  ARRAY['25 coloring pages', 'Educational themes', 'High-quality illustrations', 'Instant PDF download', 'Print unlimited copies'],
  'Digital Resources'
),

-- GIFT BUNDLES
(
  'New Parent Starter Bundle',
  'new-parent-starter-bundle',
  'Everything a new parent needs to start their learning journey! Includes Ivy plushie, t-shirt, tote bag, and our welcome curriculum pack.',
  5999,
  NULL,
  ARRAY['Ivy Sprout Plushie', 'Adult t-shirt', 'Tote bag', 'Welcome curriculum', 'Parent guide', 'Gift wrapping included'],
  'Gift Bundles'
),
(
  'Teacher Appreciation Set',
  'teacher-appreciation-set',
  'Show your favorite teacher some love! Includes our complete lesson plan collection, Ivy earrings, and a personalized thank you card.',
  7999,
  NULL,
  ARRAY['Complete lesson plan bundle', 'Ivy leaf earrings', 'Personalized card', 'Teacher tote bag', 'Gift box packaging'],
  'Gift Bundles'
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