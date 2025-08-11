import Link from 'next/link';
import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  showBookingCTA?: boolean;
}

export default function Hero({
  title,
  subtitle,
  description,
  ctaText = "Book Your Tour",
  ctaLink = "/contact",
  backgroundImage = "/images/hero-cebu.jpg",
  showBookingCTA = true
}: HeroProps) {
  return (
    <section className="relative min-h-[800px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Cebu landscape"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="mb-6">
            <div
              className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium shadow-lg mx-auto"
              style={{ backgroundColor: '#0284c7', color: '#ffffff', border: '2px solid rgba(255, 255, 255, 0.2)' }}
            >
              <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <span>{subtitle}</span>
            </div>
          </div>

          {/* Main Title */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{ color: '#ffffff', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
          >
            {title}
          </h1>

          {/* Description */}
          <p
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
            style={{ color: '#ffffff', opacity: '0.95', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}
          >
            {description}
          </p>

          {/* CTA Buttons */}
          {showBookingCTA && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link
                href={ctaLink}
                className="inline-flex items-center px-8 py-4 font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                style={{ backgroundColor: '#f59e0b', color: '#ffffff' }}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {ctaText}
              </Link>

              <Link
                href="/tours"
                className="inline-flex items-center px-8 py-4 font-semibold rounded-lg transition-all duration-200 border-2 hover:shadow-lg transform hover:scale-105"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#ffffff', borderColor: '#ffffff', backdropFilter: 'blur(10px)' }}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                View All Tours
              </Link>
            </div>
          )}

          {/* Trust Indicators */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div
              className="flex items-center justify-center space-x-2 px-4 py-2 rounded-lg"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#ffffff', backdropFilter: 'blur(10px)' }}
            >
              <svg className="w-5 h-5" style={{ color: '#f59e0b' }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Licensed & Insured</span>
            </div>

            <div
              className="flex items-center justify-center space-x-2 px-4 py-2 rounded-lg"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#ffffff', backdropFilter: 'blur(10px)' }}
            >
              <svg className="w-5 h-5" style={{ color: '#f59e0b' }} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-medium">5-Star Reviews</span>
            </div>

            <div
              className="flex items-center justify-center space-x-2 px-4 py-2 rounded-lg"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#ffffff', backdropFilter: 'blur(10px)' }}
            >
              <svg className="w-5 h-5" style={{ color: '#f59e0b' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
