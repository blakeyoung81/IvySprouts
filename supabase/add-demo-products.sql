-- Add Demo Products to Ivy Sprouts Store
-- Run this in your Supabase SQL Editor to populate the store with demo items

-- MERCHANDISE SECTION
INSERT INTO products (title, slug, description, price_cents, video_url, materials, theme_week) VALUES
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

-- Verify the products were added
SELECT 
  theme_week as category,
  COUNT(*) as product_count,
  MIN(price_cents) as min_price,
  MAX(price_cents) as max_price
FROM products 
WHERE theme_week IN ('Merchandise', 'Lesson Plans', 'Digital Resources', 'Gift Bundles')
GROUP BY theme_week
ORDER BY theme_week; 