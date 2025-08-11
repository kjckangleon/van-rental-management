import Link from 'next/link';
import Image from 'next/image';
import { Tour } from '@/data/tours';

interface TourGridProps {
  tours: Tour[];
  showAll?: boolean;
  title?: string;
  subtitle?: string;
}

export default function TourGrid({ 
  tours, 
  showAll = false, 
  title = "Popular Tours",
  subtitle = "Discover the best of Cebu with our carefully curated tour packages"
}: TourGridProps) {
  const displayTours = showAll ? tours : tours.slice(0, 3);

  const getDifficultyColor = (difficulty: Tour['difficulty']) => {
    switch (difficulty) {
      case 'Easy':
        return 'text-green-600 bg-green-100';
      case 'Moderate':
        return 'text-yellow-600 bg-yellow-100';
      case 'Challenging':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getCategoryColor = (category: Tour['category']) => {
    switch (category) {
      case 'City Tour':
        return 'text-blue-600 bg-blue-100';
      case 'Nature & Adventure':
        return 'text-green-600 bg-green-100';
      case 'Cultural':
        return 'text-purple-600 bg-purple-100';
      case 'Beach & Island':
        return 'text-cyan-600 bg-cyan-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayTours.map((tour) => (
            <div
              key={tour.slug}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Tour Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={tour.images.main}
                  alt={tour.images.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Featured Badge */}
                {tour.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                )}

                {/* Price Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                    <div className="text-sm text-gray-600">Starting from</div>
                    <div className="font-bold text-primary-600">
                      ₱{tour.price.van.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>

              {/* Tour Content */}
              <div className="p-6">
                {/* Tour Tags */}
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(tour.category)}`}>
                    {tour.category}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(tour.difficulty)}`}>
                    {tour.difficulty}
                  </span>
                </div>

                {/* Tour Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  <Link href={`/tours/${tour.slug}`}>
                    {tour.title}
                  </Link>
                </h3>

                {/* Tour Summary */}
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {tour.summary}
                </p>

                {/* Tour Details */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                      </svg>
                      <span>Max {tour.maxGuests}</span>
                    </div>
                  </div>
                </div>

                {/* Tour Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Highlights:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {tour.highlights.slice(0, 3).map((highlight, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <svg className="w-3 h-3 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="line-clamp-1">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="flex space-x-2">
                  <Link
                    href={`/tours/${tour.slug}`}
                    className="flex-1 bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors text-center"
                  >
                    View Details
                  </Link>
                  <Link
                    href={`/contact?tour=${tour.slug}`}
                    className="flex-1 bg-gray-100 text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors text-center"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Tours CTA */}
        {!showAll && tours.length > 3 && (
          <div className="text-center mt-12">
            <Link
              href="/tours"
              className="inline-flex items-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
            >
              View All Tours
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
