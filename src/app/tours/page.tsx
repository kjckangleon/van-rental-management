import { Metadata } from 'next';
import TourGrid from '@/components/TourGrid';
import { tours } from '@/data/tours';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: "Cebu Tours & Packages",
  description: "Browse our complete collection of Cebu tours and travel packages. From city heritage tours to adventure trips, find the perfect tour for your Cebu experience.",
  path: "/tours",
});

export default function ToursPage() {
  return (
    <div className="pt-8">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Cebu Tours & Packages
          </h1>
          <p className="text-lg md:text-xl text-primary-100 max-w-2xl mx-auto">
            Discover the beauty and culture of Cebu with our carefully crafted tour packages. 
            From historical city tours to exciting adventures, we have something for everyone.
          </p>
        </div>
      </div>

      {/* Tours Grid */}
      <TourGrid 
        tours={tours}
        showAll={true}
        title="All Available Tours"
        subtitle="Choose from our complete collection of Cebu experiences"
      />

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need a Custom Tour?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Don&apos;t see exactly what you&apos;re looking for? We can create a personalized itinerary 
            tailored to your interests, schedule, and budget.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Contact Us for Custom Tours
          </a>
        </div>
      </section>
    </div>
  );
}
