import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: "Travel Blog - Cebu Travel Tips & Guides",
  description: "Discover insider tips, travel guides, and stories about exploring Cebu, Philippines. From hidden gems to local culture, get the most out of your Cebu adventure.",
  path: "/blog",
});

// Sample blog posts - in a real app, this would come from a CMS or database
const blogPosts = [
  {
    id: 1,
    title: "10 Hidden Gems in Cebu You Must Visit",
    excerpt: "Discover the secret spots that only locals know about. From secluded beaches to mystical caves, explore the hidden treasures of Cebu.",
    author: "Maria Santos",
    date: "December 15, 2024",
    readTime: "5 min read",
    image: "/images/blog/hidden-gems-cebu.svg",
    category: "Travel Guide",
    slug: "hidden-gems-cebu"
  },
  {
    id: 2,
    title: "Best Time to Visit Oslob for Whale Shark Swimming",
    excerpt: "Planning your whale shark encounter? Learn about the best seasons, times of day, and what to expect during your visit to Oslob.",
    author: "Carlos Reyes",
    date: "December 10, 2024",
    readTime: "4 min read",
    image: "/images/blog/oslob-whale-sharks.svg",
    category: "Wildlife",
    slug: "best-time-oslob-whale-sharks"
  },
  {
    id: 3,
    title: "Cebu Food Guide: Must-Try Local Delicacies",
    excerpt: "From lechon to sutukil, explore the rich culinary heritage of Cebu. A foodie's guide to the best local dishes and where to find them.",
    author: "Juan dela Cruz",
    date: "December 5, 2024",
    readTime: "6 min read",
    image: "/images/blog/cebu-food-guide.svg",
    category: "Food & Culture",
    slug: "cebu-food-guide"
  },
  {
    id: 4,
    title: "Historical Sites in Cebu: A Journey Through Time",
    excerpt: "Walk through centuries of history as we explore Cebu's most significant historical landmarks and their fascinating stories.",
    author: "Maria Santos",
    date: "November 28, 2024",
    readTime: "7 min read",
    image: "/images/blog/cebu-historical-sites.svg",
    category: "History",
    slug: "cebu-historical-sites"
  },
  {
    id: 5,
    title: "Island Hopping Near Cebu: Complete Guide",
    excerpt: "Discover the pristine islands and beaches around Cebu. Your complete guide to island hopping adventures and what to expect.",
    author: "Carlos Reyes",
    date: "November 20, 2024",
    readTime: "8 min read",
    image: "/images/blog/island-hopping-cebu.svg",
    category: "Adventure",
    slug: "island-hopping-cebu"
  },
  {
    id: 6,
    title: "Travel Tips for First-Time Visitors to Cebu",
    excerpt: "Essential tips and advice for first-time visitors to Cebu. From transportation to cultural etiquette, make the most of your trip.",
    author: "Juan dela Cruz",
    date: "November 15, 2024",
    readTime: "5 min read",
    image: "/images/blog/first-time-cebu-tips.svg",
    category: "Travel Tips",
    slug: "first-time-cebu-tips"
  }
];

const categories = ["All", "Travel Guide", "Wildlife", "Food & Culture", "History", "Adventure", "Travel Tips"];

export default function BlogPage() {
  return (
    <div className="pt-8">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Travel Blog
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Discover insider tips, hidden gems, and travel guides to make your Cebu adventure unforgettable.
          </p>
        </div>
      </section>

      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-primary-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                      {blogPosts[0].category}
                    </span>
                    <span className="text-gray-500 text-sm">{blogPosts[0].readTime}</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                      <div>
                        <p className="font-medium text-gray-900">{blogPosts[0].author}</p>
                        <p className="text-gray-500 text-sm">{blogPosts[0].date}</p>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${blogPosts[0].slug}`}
                      className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-xs">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary-600 transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                        <div>
                          <p className="font-medium text-gray-900 text-sm">{post.author}</p>
                          <p className="text-gray-500 text-xs">{post.date}</p>
                        </div>
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl p-8 lg:p-12 text-center text-white">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Stay Updated with Cebu Travel Tips
            </h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest travel guides, insider tips, 
              and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary-400"
              />
              <button className="bg-secondary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary-600 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-primary-200 text-sm mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
