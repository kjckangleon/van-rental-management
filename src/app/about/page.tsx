import { Metadata } from 'next';
import Image from 'next/image';
import { generatePageMetadata } from '@/lib/seo';
import Link from 'next/link';

export const metadata: Metadata = generatePageMetadata({
  title: "About Us - Your Trusted Cebu Travel Partner",
  description: "Learn about Cebu Van Tours, your trusted travel partner in Cebu, Philippines. Professional drivers, modern fleet, and years of experience serving travelers from around the world.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white cta-section" style={{ backgroundColor: '#0284c7' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#ffffff' }}>
              About G&L Van Rental
            </h1>
            <p className="text-xl" style={{ color: '#ffffff', opacity: '0.9' }}>
              Your trusted travel partner for exploring the beautiful islands of Cebu, Philippines.
              We&apos;ve been creating unforgettable memories for travelers since 2010.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  Founded in 2010 by local Cebuano entrepreneurs, Cebu Van Tours started with a simple mission:
                  to show travelers the real beauty of Cebu through comfortable, safe, and authentic experiences.
                </p>
                <p>
                  What began as a small family business with just two vans has grown into one of Cebu&apos;s most
                  trusted tour operators, serving thousands of satisfied customers from around the world.
                </p>
                <p>
                  Our deep love for Cebu and commitment to excellent service has earned us countless 5-star
                  reviews and repeat customers who consider us not just a tour company, but friends who helped
                  make their Philippine adventure unforgettable.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/about-our-story.svg"
                alt="Cebu Van Tours team and vehicles"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We&apos;re committed to providing exceptional travel experiences while promoting
              sustainable tourism in Cebu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Safety First */}
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Safety First</h3>
              <p className="text-gray-600">
                Your safety is our top priority. All our vehicles undergo regular maintenance and our drivers
                are professionally trained and licensed.
              </p>
            </div>

            {/* Authentic Experiences */}
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Authentic Experiences</h3>
              <p className="text-gray-600">
                We believe in showing you the real Cebu - from hidden gems known only to locals to
                cultural experiences that connect you with our heritage.
              </p>
            </div>

            {/* Sustainable Tourism */}
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sustainable Tourism</h3>
              <p className="text-gray-600">
                We&apos;re committed to responsible tourism that benefits local communities while preserving
                Cebu&apos;s natural beauty for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our experienced and friendly team is here to make your Cebu adventure unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4">
                {/* Placeholder for team member photo */}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Juan dela Cruz</h3>
              <p className="text-primary-600 font-medium mb-3">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                A Cebu native with over 15 years in the tourism industry. Juan&apos;s passion for
                sharing Cebu&apos;s beauty started this company.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4">
                {/* Placeholder for team member photo */}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Maria Santos</h3>
              <p className="text-primary-600 font-medium mb-3">Operations Manager</p>
              <p className="text-gray-600 text-sm">
                Maria ensures every tour runs smoothly. With her attention to detail,
                you&apos;re guaranteed an exceptional experience.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4">
                {/* Placeholder for team member photo */}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Carlos Reyes</h3>
              <p className="text-primary-600 font-medium mb-3">Lead Driver & Guide</p>
              <p className="text-gray-600 text-sm">
                Carlos knows every corner of Cebu. His stories and local insights make
                every tour educational and entertaining.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Cebu Van Tours?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-600 text-white p-2 rounded-lg flex-shrink-0 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">13+ Years of Experience</h3>
                  <p className="text-gray-600">Over a decade of serving travelers with consistently excellent service.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary-600 text-white p-2 rounded-lg flex-shrink-0 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Expertise</h3>
                  <p className="text-gray-600">Born and raised in Cebu, we know the best spots and hidden gems.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary-600 text-white p-2 rounded-lg flex-shrink-0 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Modern Fleet</h3>
                  <p className="text-gray-600">Well-maintained, air-conditioned vehicles for maximum comfort.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-600 text-white p-2 rounded-lg flex-shrink-0 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Drivers</h3>
                  <p className="text-gray-600">Licensed, experienced drivers who prioritize your safety and comfort.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary-600 text-white p-2 rounded-lg flex-shrink-0 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">5-Star Reviews</h3>
                  <p className="text-gray-600">Consistently rated excellent by our customers on multiple platforms.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary-600 text-white p-2 rounded-lg flex-shrink-0 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
                  <p className="text-gray-600">Round-the-clock customer support before, during, and after your tour.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary-600 cta-section" style={{ backgroundColor: '#0284c7' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#ffffff' }}>
            Ready to Explore Cebu With Us?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#ffffff', opacity: '0.9' }}>
            Join the thousands of satisfied travelers who have discovered the beauty of Cebu with our expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center shadow-lg"
              style={{ backgroundColor: '#f59e0b', color: '#ffffff' }}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Your Tour Today
            </a>
            <Link
              href="/tours"
              className="px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center"
              style={{ backgroundColor: '#ffffff', color: '#0284c7', border: '2px solid #ffffff' }}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              View Our Tours
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
