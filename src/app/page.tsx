import { Metadata } from 'next';
import Hero from '@/components/Hero';
import TourGrid from '@/components/TourGrid';
import { getFeaturedTours } from '@/data/tours';
import { generatePageMetadata } from '@/lib/seo';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = generatePageMetadata({
  title: "Premium Van Tours & Rentals in Cebu",
  description: "Discover Cebu with our comfortable van rental and tour services. Professional drivers, air-conditioned vehicles, and unforgettable experiences throughout Cebu, Philippines.",
  path: "/",
});

export default function Home() {
  const featuredTours = getFeaturedTours();

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Discover Cebu in Comfort"
        subtitle="Premium Van Tours & Rentals"
        description="Experience the beauty of Cebu with our comfortable, air-conditioned vans and professional drivers. From city tours to adventure trips, we make your journey unforgettable."
        backgroundImage="/images/hero-cebu.jpg"
      />

      {/* Featured Tours */}
      <TourGrid 
        tours={featuredTours}
        title="Featured Tours"
        subtitle="Our most popular tours that showcase the best of Cebu"
      />

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Cebu Van Tours?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to providing you with safe, comfortable, and memorable experiences throughout Cebu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Professional Drivers */}
            <div className="text-center p-6">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Drivers</h3>
              <p className="text-gray-600">Experienced, licensed drivers who know Cebu like the back of their hand.</p>
            </div>

            {/* Comfortable Vehicles */}
            <div className="text-center p-6">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Modern Fleet</h3>
              <p className="text-gray-600">Well-maintained, air-conditioned vehicles for your comfort and safety.</p>
            </div>

            {/* 24/7 Support */}
            <div className="text-center p-6">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support for all your travel needs.</p>
            </div>

            {/* Local Expertise */}
            <div className="text-center p-6">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Expertise</h3>
              <p className="text-gray-600">Insider knowledge of the best spots, hidden gems, and local culture.</p>
            </div>

            {/* Flexible Booking */}
            <div className="text-center p-6">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Booking</h3>
              <p className="text-gray-600">Easy online booking with flexible cancellation policies.</p>
            </div>

            {/* Best Rates */}
            <div className="text-center p-6">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Competitive Rates</h3>
              <p className="text-gray-600">Fair, transparent pricing with no hidden fees or surprises.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Explore Cebu?
          </h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Book your tour today and discover why thousands of travelers choose us for their Cebu adventures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Your Tour
            </Link>
            <Link
              href="/tours"
              className="bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-800 transition-colors inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              View All Tours
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
