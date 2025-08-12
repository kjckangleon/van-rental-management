# G&L Van Rental - Setup Instructions

This guide will help you set up and deploy your G&L Van Rental website.

## Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager
- Git

## Initial Setup

### 1. Create Next.js Project (if starting from scratch)

```bash
npx create-next-app@latest cebu-van-tours --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd cebu-van-tours
```

### 2. Install Dependencies

The project uses the following key dependencies:
- Next.js 15.4.6 with App Router
- Tailwind CSS v4
- TypeScript
- React 19

All dependencies are already configured in `package.json`.

```bash
npm install
```

### 3. Environment Configuration

Create a `.env.local` file in the root directory:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX

# Contact Form (optional - for form submission)
NEXT_PUBLIC_FORM_ENDPOINT=your-form-endpoint-url

# Google Maps (optional)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
```

### 4. Customize Your Business Information

Edit `src/lib/seo.ts` to update your business details:

```typescript
export const siteConfig = {
  // Update these with your actual business information
  name: "Your Business Name",
  url: "https://your-domain.com",
  phone: "+63 XXX XXX XXXX",
  email: "your-email@domain.com",
  address: {
    street: "Your Street Address",
    city: "Your City",
    // ... other address details
  },
  // ... other configuration
};
```

### 5. Replace Placeholder Images

Replace all placeholder images in the `/public/images/` directory with your actual photos:

**Required Images:**
- `/public/images/hero-cebu.png` (1920x1080px) - Hero background
- `/public/images/og-default.jpg` (1200x630px) - Social media sharing
- `/public/images/tours/[tour-name]-main.jpg` (800x600px) - Tour main images
- `/public/images/tours/[tour-name]-[1-4].jpg` - Tour gallery images
- `/public/images/blog/[post-name].jpg` - Blog post images
- `/public/images/about-our-story.jpg` - About page image

**Image Optimization Tips:**
- Use WebP format when possible for better performance
- Optimize images before upload (recommended tools: TinyPNG, ImageOptim)
- Use descriptive file names for better SEO

## Development

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

## Content Management

### Adding New Tours

1. Edit `src/data/tours.ts`
2. Add your tour object to the `tours` array
3. Include all required images in `/public/images/tours/`
4. The tour will automatically appear on the tours page and be included in the sitemap

### Updating Tour Information

All tour data is stored in `src/data/tours.ts`. Update the tour objects as needed.

### Blog Posts

Currently, blog posts are hardcoded in `src/app/blog/page.tsx`. For a production site, consider integrating with a CMS like:
- Contentful
- Strapi
- Sanity
- WordPress (headless)

## SEO Configuration

### Google Analytics

1. Create a Google Analytics 4 property
2. Add your measurement ID to `src/lib/seo.ts`:
   ```typescript
   googleAnalyticsId: "G-XXXXXXXXXX"
   ```

### Google Search Console

1. Verify your website with Google Search Console
2. Submit your sitemap: `https://your-domain.com/sitemap.xml`

### Local Business SEO

Update the JSON-LD schema in `src/lib/seo.ts` with accurate business information for better local search visibility.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

### Custom Server

For VPS or dedicated server deployment:

```bash
npm run build
npm run start
```

## Performance Optimization

### Image Optimization

- Use Next.js Image component (already implemented)
- Consider using a CDN for images
- Implement lazy loading (built into Next.js Image)

### Caching

- Enable static generation for tour pages (already implemented)
- Consider adding ISR (Incremental Static Regeneration) for dynamic content

### Bundle Analysis

```bash
npx @next/bundle-analyzer
```

## Maintenance

### Regular Updates

- Keep dependencies updated
- Monitor Core Web Vitals in Google Search Console
- Update tour information and pricing regularly
- Add new blog content for better SEO

### Backup

- Regularly backup your codebase
- Consider version control for content changes
- Backup uploaded images

## Troubleshooting

### Common Issues

1. **Images not loading**: Check file paths and ensure images exist
2. **Build failures**: Run `npm run lint` to check for errors
3. **SEO issues**: Validate metadata using browser dev tools

### Getting Help

- Check Next.js documentation: https://nextjs.org/docs
- Tailwind CSS documentation: https://tailwindcss.com/docs
- Open an issue in your repository for specific problems

## Security

### Best Practices

- Keep dependencies updated
- Use environment variables for sensitive data
- Implement HTTPS in production
- Regular security audits: `npm audit`

### Contact Form Security

If implementing a working contact form:
- Use CSRF protection
- Implement rate limiting
- Validate and sanitize all inputs
- Consider using services like Formspree or Netlify Forms

## Additional Features

### Future Enhancements

Consider adding these features as your business grows:
- Online booking system
- Customer reviews and testimonials
- Real-time availability calendar
- Multiple language support
- Payment integration
- Customer dashboard
- Email marketing integration

## Support

For technical support or questions about this setup, refer to:
- Next.js documentation
- This README file
- Your development team or agency
