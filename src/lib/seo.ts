// SEO Configuration for Cebu Van Tours
export const siteConfig = {
  // Business Information
  name: "Cebu Van Tours",
  tagline: "Explore Cebu with Comfort and Style",
  description: "Premium van rental and tour services in Cebu, Philippines. Discover the beauty of Cebu with our comfortable vehicles and experienced drivers.",
  url: "https://cebu-van-tours.com", // Update with your actual domain
  
  // Contact Information
  phone: "+63 123 456 7890", // Update with your actual phone
  email: "info@cebu-van-tours.com", // Update with your actual email
  whatsapp: "+63 123 456 7890", // Update with your WhatsApp number
  
  // Business Address
  address: {
    street: "123 Tourism Street",
    city: "Cebu City",
    state: "Cebu",
    postalCode: "6000",
    country: "Philippines",
    full: "123 Tourism Street, Cebu City, Cebu 6000, Philippines"
  },
  
  // Social Media (update with your actual profiles)
  social: {
    facebook: "https://facebook.com/cebu-van-tours",
    instagram: "https://instagram.com/cebu_van_tours",
    tiktok: "https://tiktok.com/@cebu_van_tours",
    youtube: "https://youtube.com/@cebu-van-tours"
  },
  
  // Business Hours
  businessHours: {
    monday: "8:00 AM - 6:00 PM",
    tuesday: "8:00 AM - 6:00 PM", 
    wednesday: "8:00 AM - 6:00 PM",
    thursday: "8:00 AM - 6:00 PM",
    friday: "8:00 AM - 6:00 PM",
    saturday: "8:00 AM - 6:00 PM",
    sunday: "8:00 AM - 6:00 PM"
  },
  
  // SEO Settings
  keywords: [
    "Cebu van rental",
    "Cebu tours",
    "van hire Cebu",
    "Cebu city tour",
    "private van rental Philippines",
    "Cebu tourist transport",
    "van with driver Cebu",
    "Cebu sightseeing tours"
  ],
  
  // Default Open Graph Image
  ogImage: "/images/hero-cebu.png", // Add your default OG image
  
  // Google Analytics ID (optional)
  googleAnalyticsId: "G-XXXXXXXXXX", // Replace with your GA4 ID
  
  // Google Maps Place ID (optional - for reviews)
  googleMapsPlaceId: "ChIJXXXXXXXXXXXXXXXXXXXX", // Replace with your Google My Business Place ID
};

// Helper function to generate page metadata
export function generatePageMetadata({
  title,
  description,
  path = "",
  ogImage,
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}) {
  const url = `${siteConfig.url}${path}`;
  const image = ogImage || siteConfig.ogImage;
  
  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    robots: noIndex ? "noindex,nofollow" : "index,follow",
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      title: `${title} | ${siteConfig.name}`,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [image],
      creator: "@cebu_van_tours", // Update with your Twitter handle
    },
  };
}

// JSON-LD Schema for Local Business
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}#business`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "10.3157", // Cebu City coordinates
      longitude: "123.8854"
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "08:00",
        closes: "18:00"
      }
    ],
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.tiktok,
      siteConfig.social.youtube
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127"
    },
    priceRange: "₱₱",
    serviceArea: {
      "@type": "State",
      name: "Cebu"
    }
  };
}

// JSON-LD Schema for Tour Service
export function generateTourServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "Cebu Van Tours & Transportation Services",
    description: "Professional van rental and guided tour services throughout Cebu, Philippines",
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        addressCountry: siteConfig.address.country
      }
    },
    touristType: "Families, Groups, Solo Travelers",
    includesObject: [
      "Professional Driver",
      "Air-conditioned Van",
      "Fuel",
      "Insurance"
    ]
  };
}
