# Cebu Van Tours - Next.js Website

A modern, SEO-optimized website for a van rental and tour operator business in Cebu, Philippines. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, Tailwind CSS v4
- **SEO Optimized**: Complete meta tags, Open Graph, Twitter Cards, JSON-LD schema
- **Mobile-First Design**: Responsive design that works perfectly on all devices
- **Static Site Generation**: Fast-loading tour pages with SSG
- **Professional UI**: Clean, modern design with excellent UX
- **Tour Management**: Easy-to-update tour data structure
- **Contact Forms**: Booking form with tour pre-filling functionality
- **Blog Ready**: Blog section for content marketing
- **Performance Focused**: Optimized images, lazy loading, Core Web Vitals

## 🏗️ Project Structure

```
cebu-van-tours/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── blog/              # Blog section
│   │   ├── contact/           # Contact/booking page
│   │   ├── tours/             # Tours listing and detail pages
│   │   ├── layout.tsx         # Root layout with SEO
│   │   ├── page.tsx           # Homepage
│   │   └── sitemap.xml/       # Dynamic sitemap generation
│   ├── components/            # Reusable UI components
│   │   ├── Header.tsx         # Navigation header
│   │   ├── Footer.tsx         # Site footer
│   │   ├── Hero.tsx           # Hero section component
│   │   └── TourGrid.tsx       # Tour listing component
│   ├── data/                  # Data and content
│   │   └── tours.ts           # Tour data and helper functions
│   └── lib/                   # Utilities and configuration
│       └── seo.ts             # SEO configuration and helpers
├── public/
│   ├── images/                # Static images (tours, blog, etc.)
│   └── robots.txt             # Search engine directives
├── SETUP.md                   # Detailed setup instructions
├── SEO-CHECKLIST.md          # Pre-launch SEO checklist
└── README.md                  # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17 or later
- npm or yarn

### Installation

1. **Clone and install dependencies:**
   ```bash
   git clone <repository-url>
   cd cebu-van-tours
   npm install
   ```

2. **Configure your business information:**
   - Edit `src/lib/seo.ts` with your actual business details
   - Update contact information, address, and social media links

3. **Replace placeholder images:**
   - Add your actual tour photos to `/public/images/tours/`
   - Replace hero image at `/public/images/hero-cebu.png`
   - Add Open Graph image at `/public/images/og-default.jpg`

4. **Run development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

## 📋 Customization Guide

### Business Information
All business details are centralized in `src/lib/seo.ts`:
- Company name and tagline
- Contact information (phone, email, address)
- Social media profiles
- Business hours
- SEO keywords

### Tours Management
Add/edit tours in `src/data/tours.ts`:
- Tour details, pricing, and itineraries
- Images and descriptions
- Categories and difficulty levels
- SEO metadata for each tour

### Styling
- Built with Tailwind CSS v4
- Custom color scheme in `tailwind.config.ts`
- Responsive breakpoints and utilities
- Dark mode ready (can be enabled)

## 🎯 SEO Features

### Technical SEO
- ✅ Custom metadata for every page
- ✅ Open Graph and Twitter Cards
- ✅ JSON-LD structured data (LocalBusiness, TouristTrip)
- ✅ Dynamic sitemap generation
- ✅ Robots.txt configuration
- ✅ Canonical URLs
- ✅ Performance optimized

### Content SEO
- ✅ Keyword-optimized page titles and descriptions
- ✅ Proper heading hierarchy
- ✅ Image alt tags and optimization
- ✅ Internal linking structure
- ✅ Local business schema markup

## 🏪 Business Features

### Tours System
- Individual tour detail pages with SSG
- Tour categories and filtering
- Pricing and availability display
- Photo galleries
- Detailed itineraries
- Booking CTAs

### Contact & Booking
- Contact form with tour pre-filling
- Multiple contact methods (phone, email, WhatsApp)
- Business hours display
- Quick response guarantees

### Content Marketing
- Blog section for travel guides
- Category filtering
- Author profiles
- Newsletter signup
- Social sharing ready

## 📱 Mobile Experience

- Fully responsive design
- Touch-friendly navigation
- Optimized images for mobile
- Fast loading on all devices
- Mobile-first approach

## 🚀 Deployment

### Recommended: Vercel
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Options
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Any Node.js hosting provider

## 📊 Analytics & Tracking

### Included Integrations
- Google Analytics 4 ready
- Google Search Console preparation
- Performance monitoring setup
- Core Web Vitals tracking

## 🔧 Development

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Key Dependencies
- Next.js 15.4.6
- React 19
- TypeScript 5
- Tailwind CSS 4
- ESLint configuration

## 📚 Documentation

- **[SETUP.md](SETUP.md)**: Complete setup and configuration guide
- **[SEO-CHECKLIST.md](SEO-CHECKLIST.md)**: Pre-launch SEO optimization checklist

## 🎨 Design System

### Colors
- **Primary**: Blue tones (sky-blue palette)
- **Secondary**: Yellow/amber accents
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Primary Font**: Geist Sans (clean, modern)
- **Mono Font**: Geist Mono (code/technical content)

### Components
- Fully reusable component architecture
- Consistent spacing and sizing
- Accessible design patterns

## 🔒 Security

- TypeScript for type safety
- Input validation ready
- HTTPS required in production
- Security headers recommended

## 🌏 Localization Ready

The site structure supports future localization:
- Separate content from components
- Centralized text configuration
- Route structure supports i18n

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

- Check the [SETUP.md](SETUP.md) for detailed configuration
- Review [SEO-CHECKLIST.md](SEO-CHECKLIST.md) before launch
- Open GitHub issues for bugs or feature requests

## 🏆 Production Checklist

Before going live:
- [ ] Update all business information in `src/lib/seo.ts`
- [ ] Replace all placeholder images
- [ ] Configure Google Analytics
- [ ] Set up Google Search Console
- [ ] Create Google My Business profile
- [ ] Complete SEO checklist
- [ ] Test contact forms
- [ ] Verify mobile experience
- [ ] Check Core Web Vitals

---

**Ready to launch your Cebu tour business online? This website provides everything you need for a professional, SEO-optimized web presence that converts visitors into customers.**