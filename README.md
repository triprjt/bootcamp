# AI Bootcamp Landing Page

A modern, responsive landing page built with Next.js 15, TypeScript, and Tailwind CSS for lead generation with MongoDB integration.

## Features

- ✅ **SEO Optimized** - Complete meta tags, Open Graph, and Twitter Cards
- ✅ **Email Collection** - MongoDB integration for storing subscriber emails
- ✅ **Success Animations** - Framer Motion animations for form submissions
- ✅ **Responsive Design** - Mobile-first design with Tailwind CSS
- ✅ **Form Validation** - React Hook Form with email validation
- ✅ **Confirmation Page** - Animated success page after email submission

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Database**: MongoDB
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Icons**: Lucide React

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Variables**
   Create a `.env.local` file in the root directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/ai-bootcamp
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

3. **MongoDB Setup**
   - Install MongoDB locally or use MongoDB Atlas
   - Update the `MONGODB_URI` in your `.env.local` file
   - The app will automatically create the `subscribers` collection

4. **Start Development Server**
   ```bash
   npm run dev
   ```

5. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── api/subscribe/route.ts    # Email subscription API
│   ├── success/page.tsx          # Success confirmation page
│   ├── layout.tsx                # Root layout with SEO
│   └── page.tsx                  # Main landing page
├── components/
│   └── EmailForm.tsx             # Email subscription form
└── lib/
    └── mongodb.ts                # MongoDB connection utility
```

## API Endpoints

- `POST /api/subscribe` - Subscribe user email to MongoDB

## Features Overview

### Landing Page Sections
1. **Hero Section** - 2-column layout with animated SVG and email form
2. **Instructor Section** - Instructor credentials and experience
3. **What You'll Get** - 4 key benefits with icons using shadcn/ui cards
4. **Free Webinar** - Special offer with details in card layout
5. **Comparison Table** - Traditional vs Bootcamp approach
6. **Target Audience** - Who this is for/not for
7. **Success Stories** - Testimonials in shadcn/ui cards
8. **Final CTA** - Investment and guarantee info

### Email Form Features
- Real-time validation with shadcn/ui components
- Loading states with spinner
- Error handling with proper styling
- Success animations
- Duplicate email prevention
- Multiple variants (hero, cta, default)

### Success Page Features
- Animated checkmark with confetti effect
- Webinar details in shadcn/ui cards
- Smooth transitions and animations
- Mobile responsive design
- Professional shadcn/ui button styling

## Customization

- Update content in `src/app/page.tsx`
- Modify styling with Tailwind classes
- Add more form fields in `EmailForm.tsx`
- Customize animations in Framer Motion components
- Update SEO metadata in `layout.tsx`

## Deployment

1. **Vercel** (Recommended)
   - Connect your GitHub repository
   - Add environment variables
   - Deploy automatically

2. **Other Platforms**
   - Build: `npm run build`
   - Start: `npm start`
   - Ensure MongoDB is accessible

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `MONGODB_URI` | MongoDB connection string | Yes |
| `NEXT_PUBLIC_APP_URL` | App URL for redirects | Yes |

## License

MIT License - feel free to use this template for your own projects!