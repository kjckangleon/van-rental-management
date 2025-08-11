import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getTourBySlug, getAllTourSlugs } from '@/data/tours';
import { generatePageMetadata } from '@/lib/seo';

interface TourPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all tours
export async function generateStaticParams() {
  const slugs = getAllTourSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate metadata for each tour
export async function generateMetadata({ params }: TourPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTourBySlug(slug);

  if (!tour) {
    return {
      title: 'Tour Not Found',
      description: 'The requested tour could not be found.',
    };
  }

  return generatePageMetadata({
    title: tour.title,
    description: tour.seoDescription,
    path: `/tours/${tour.slug}`,
    ogImage: tour.images.main,
  });
}

export default async function TourPage({ params }: TourPageProps) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);

  if (!tour) {
    notFound();
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'text-green-700 bg-green-100 border-green-200';
      case 'Moderate':
        return 'text-yellow-700 bg-yellow-100 border-yellow-200';
      case 'Challenging':
        return 'text-red-700 bg-red-100 border-red-200';
      default:
        return 'text-gray-700 bg-gray-100 border-gray-200';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'City Tour':
        return 'text-blue-700 bg-blue-100 border-blue-200';
      case 'Nature & Adventure':
        return 'text-green-700 bg-green-100 border-green-200';
      case 'Cultural':
        return 'text-purple-700 bg-purple-100 border-purple-200';
      case 'Beach & Island':
        return 'text-cyan-700 bg-cyan-100 border-cyan-200';
      default:
        return 'text-gray-700 bg-gray-100 border-gray-200';
    }
  };

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] mb-8">
        <Image
          src={tour.images.main}
          alt={tour.images.alt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <div className="text-white max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(tour.category)}`}>
                  {tour.category}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getDifficultyColor(tour.difficulty)}`}>
                  {tour.difficulty}
                </span>
                {tour.featured && (
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-secondary-500 text-white">
                    Featured
                  </span>
                )}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{tour.title}</h1>
              <p className="text-lg md:text-xl text-gray-200">{tour.summary}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tour Details Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <svg className="w-6 h-6 text-primary-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="text-sm text-gray-600">Duration</div>
                  <div className="font-semibold">{tour.duration}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <svg className="w-6 h-6 text-primary-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <div className="text-sm text-gray-600">Max Guests</div>
                  <div className="font-semibold">{tour.maxGuests}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <svg className="w-6 h-6 text-primary-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <div className="text-sm text-gray-600">Difficulty</div>
                  <div className="font-semibold">{tour.difficulty}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <svg className="w-6 h-6 text-primary-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  <div className="text-sm text-gray-600">Price</div>
                  <div className="font-semibold">₱{tour.price.van.toLocaleString()}</div>
                </div>
              </div>
            </div>

            {/* Tour Highlights */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tour Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {tour.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-primary-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Itinerary */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Itinerary</h2>
              <div className="space-y-6">
                {tour.itinerary.map((item, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                        <span className="text-primary-600 font-semibold text-sm">{item.time}</span>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.activity}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Inclusions */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  What's Included
                </h3>
                <ul className="space-y-2">
                  {tour.inclusions.map((inclusion, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm">{inclusion}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  Not Included
                </h3>
                <ul className="space-y-2">
                  {tour.exclusions.map((exclusion, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <svg className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm">{exclusion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Photo Gallery */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Photo Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {tour.images.gallery.map((image, index) => (
                  <div key={index} className="relative h-40 rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={`${tour.title} gallery image ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {/* Booking Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    ₱{tour.price.van.toLocaleString()}
                  </div>
                  <div className="text-gray-600">per van ({tour.price.duration})</div>
                  <div className="text-sm text-gray-500">Up to {tour.maxGuests} passengers</div>
                </div>

                <div className="space-y-4">
                  <Link
                    href={`/contact?tour=${tour.slug}`}
                    className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center block"
                  >
                    Book This Tour
                  </Link>
                  <Link
                    href="/contact"
                    className="w-full bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-center block"
                  >
                    Ask Questions
                  </Link>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="text-sm text-gray-600 space-y-2">
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Free cancellation up to 24 hours</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Professional English-speaking driver</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Air-conditioned vehicle</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Need Help?</h3>
                <p className="text-primary-100 mb-4">Our friendly team is here to help you plan your perfect Cebu adventure.</p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+63 123 456 7890</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>info@cebu-van-tours.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    <span>WhatsApp: +63 123 456 7890</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
