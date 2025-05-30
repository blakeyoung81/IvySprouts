# Ivy Sprouts - Joyful Early Learning Platform

A production-ready educational platform built with Next.js 14, designed to provide joyful, meaningful early learning experiences for children ages 2-5.

## 🌟 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, TailwindCSS
- **Beautiful UI**: Custom pastel preschool palette with shadcn/ui components
- **Video Learning**: YouTube integration for educational content
- **E-commerce**: Stripe integration for one-time purchases and subscriptions
- **User Management**: Supabase authentication and database
- **File Uploads**: UploadThing for secure PDF and image uploads
- **Responsive Design**: Mobile-first approach with beautiful animations
- **SEO Optimized**: Built-in SEO with next-seo

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm/yarn/pnpm
- Supabase account
- Stripe account
- UploadThing account

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd ivy-sprouts
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```

4. **Configure your environment variables** (see Environment Setup below)

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Environment Setup

### Required Environment Variables

Create a `.env.local` file in your project root with the following variables:

#### Application URL
```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

#### Supabase Configuration
Get these from your [Supabase Dashboard](https://supabase.com/dashboard):

1. Create a new project
2. Go to Settings > API
3. Copy the values:

```env
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

#### Stripe Configuration
Get these from your [Stripe Dashboard](https://dashboard.stripe.com/apikeys):

1. Go to Developers > API keys
2. Copy the publishable and secret keys:

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
```

3. For webhooks, go to Developers > Webhooks:
```env
STRIPE_WEBHOOK_SECRET=whsec_your_stripe_webhook_secret
```

#### UploadThing Configuration
Get these from your [UploadThing Dashboard](https://uploadthing.com/dashboard):

1. Create a new app
2. Copy the secret and app ID:

```env
UPLOADTHING_SECRET=sk_live_your_uploadthing_secret
UPLOADTHING_APP_ID=your_uploadthing_app_id
```

## 🗄️ Database Setup

### Supabase Database Schema

1. **Run the seed file**
   ```bash
   # In your Supabase SQL editor, run:
   supabase/seed.sql
   ```

2. **Generate TypeScript types**
   ```bash
   npx supabase gen types typescript --project-id YOUR_PROJECT_ID > types/database.ts
   ```

### Database Tables

- **products**: Store lesson information, videos, PDFs, and materials
- **subscriptions**: Track user subscriptions via Stripe
- **purchases**: Record one-time purchases
- **messages**: Store contact form submissions

## 💳 Payment Setup

### Stripe Products

Create these products in your Stripe dashboard:

1. **Individual Lessons**: $5.00 each
2. **Summer Bundle**: $30.00 (12 weeks)
3. **Monthly Subscription**: $15.00/month

### Webhook Configuration

Set up a webhook endpoint in Stripe:
- URL: `https://yourdomain.com/api/webhooks/stripe`
- Events: `checkout.session.completed`, `invoice.payment_succeeded`

## 📁 Project Structure

```
ivy-sprouts/
├── app/                    # Next.js 14 App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   ├── store/            # Store pages
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   └── api/              # API routes
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── navbar.tsx        # Navigation
│   ├── footer.tsx        # Footer
│   └── ...               # Feature components
├── lib/                  # Utility functions
│   ├── utils.ts          # General utilities
│   ├── supabase.ts       # Database client
│   └── getDailyVideo.ts  # Daily video logic
├── types/                # TypeScript definitions
├── supabase/            # Database schema and migrations
└── public/              # Static assets
```

## 🎨 Design System

### Color Palette

- **Soft Green**: `#CFF6CF` - Primary brand color
- **Light Yellow**: `#FFF8C5` - Secondary accent
- **Soft Pink**: `#FFD6E8` - Tertiary accent

### Typography

- **Font**: Inter (Google Fonts)
- **Headings**: Bold, large sizes for impact
- **Body**: Regular weight, readable sizes

## 🚀 Deployment

### Vercel Deployment

1. **Connect to Vercel**
   ```bash
   npx vercel
   ```

2. **Set environment variables**
   - Go to your Vercel dashboard
   - Add all environment variables from `.env.local`

3. **Configure domains**
   - Update `NEXT_PUBLIC_APP_URL` to your production domain
   - Update Stripe webhook URLs
   - Update Supabase redirect URLs

### Database Migration

1. **Production database**
   - Run the seed file in your production Supabase instance
   - Update RLS policies as needed

2. **Stripe webhook**
   - Update webhook URL to production domain
   - Test webhook functionality

## 🧪 Testing

### Run Tests
```bash
npm run test
```

### Type Checking
```bash
npm run type-check
```

### Linting
```bash
npm run lint
```

## 📝 Content Management

### Adding New Lessons

1. **Create product in database**
   ```sql
   INSERT INTO products (title, slug, description, price_cents, video_url, materials, theme_week)
   VALUES ('Week 3: Numbers & Nature', 'week-3-numbers-nature', '...', 500, 'youtube_url', ARRAY['materials'], 'Week 3');
   ```

2. **Upload materials**
   - Use the admin interface (when implemented)
   - Or upload directly to UploadThing

3. **Create Stripe product**
   - Add corresponding product in Stripe dashboard
   - Update `stripe_price_id` in database

## 🔒 Security

- **Row Level Security**: Enabled on all Supabase tables
- **Environment Variables**: Never commit secrets to git
- **HTTPS**: Required for production (handled by Vercel)
- **Input Validation**: Zod schemas for all forms

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For questions or support:
- Email: hello@ivysprouts.com
- Documentation: This README
- Issues: GitHub Issues

## 🎯 Roadmap

- [ ] Admin dashboard for content management
- [ ] User dashboard with progress tracking
- [ ] Mobile app (React Native)
- [ ] Advanced analytics
- [ ] Multi-language support
- [ ] Parent community features

---

Made with ❤️ for little learners everywhere. 