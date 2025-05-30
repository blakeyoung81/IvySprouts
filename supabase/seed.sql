-- Create tables
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

-- Insert sample products
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
  'Week 1: Colors & Kindness',
  'week-1-colors-kindness',
  'Explore the wonderful world of colors while learning about kindness and empathy. Includes fun activities and crafts!',
  500,
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  ARRAY['Colored paper (red, blue, yellow, green)', 'Safety scissors', 'Glue sticks', 'Crayons', 'Construction paper', 'Stickers'],
  'Week 1'
),
(
  'Week 2: Shapes & Sharing',
  'week-2-shapes-sharing',
  'Discover shapes through fun activities while learning the importance of sharing with others.',
  500,
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  ARRAY['Shape cutouts', 'Play dough', 'Cookie cutters', 'Markers', 'Cardboard'],
  'Week 2'
),
(
  'Summer Learning Bundle',
  'summer-bundle',
  'Get access to all 12 weeks of our curriculum at a special price. Perfect for the complete learning experience!',
  3000,
  NULL,
  ARRAY['All materials from individual weeks', 'Bonus activities', 'Parent guide'],
  'Bundle'
);

-- Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE purchases ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Products are viewable by everyone" ON products FOR SELECT USING (true);

CREATE POLICY "Users can view their own subscriptions" ON subscriptions FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can view their own purchases" ON purchases FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Anyone can insert messages" ON messages FOR INSERT WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX idx_products_slug ON products(slug);
CREATE INDEX idx_products_created_at ON products(created_at);
CREATE INDEX idx_subscriptions_user_id ON subscriptions(user_id);
CREATE INDEX idx_purchases_user_id ON purchases(user_id);
CREATE INDEX idx_messages_created_at ON messages(created_at); 