export interface Tour {
  slug: string;
  title: string;
  summary: string;
  seoDescription: string;
  price: {
    van: number;
    currency: string;
    duration: string;
  };
  duration: string;
  maxGuests: number;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  highlights: string[];
  itinerary: {
    time: string;
    activity: string;
    description: string;
  }[];
  inclusions: string[];
  exclusions: string[];
  images: {
    main: string;
    gallery: string[];
    alt: string;
  };
  category: 'City Tour' | 'Nature & Adventure' | 'Cultural' | 'Beach & Island';
  featured: boolean;
  available: boolean;
}

export const tours: Tour[] = [
  {
    slug: "cebu-city-heritage-tour",
    title: "Cebu City Heritage Tour",
    summary: "Discover the rich history and culture of Cebu City with visits to iconic landmarks and historical sites.",
    seoDescription: "Explore Cebu's fascinating history on our heritage city tour. Visit Magellan's Cross, Basilica del Santo Niño, Fort San Pedro, and more historical landmarks with our comfortable van service.",
    price: {
      van: 3500,
      currency: "PHP",
      duration: "8 hours"
    },
    duration: "8 hours",
    maxGuests: 15,
    difficulty: "Easy",
    highlights: [
      "Magellan's Cross",
      "Basilica del Santo Niño", 
      "Fort San Pedro",
      "Heritage Monument",
      "Temple of Leah",
      "Yap-Sandiego Ancestral House"
    ],
    itinerary: [
      {
        time: "8:00 AM",
        activity: "Hotel Pickup",
        description: "Comfortable van pickup from your hotel in Cebu City"
      },
      {
        time: "8:30 AM",
        activity: "Magellan's Cross",
        description: "Visit the historic cross planted by Ferdinand Magellan in 1521"
      },
      {
        time: "9:00 AM", 
        activity: "Basilica del Santo Niño",
        description: "Explore the oldest Roman Catholic church in the Philippines"
      },
      {
        time: "10:00 AM",
        activity: "Fort San Pedro",
        description: "Tour the smallest triangular fort in the Philippines"
      },
      {
        time: "11:00 AM",
        activity: "Heritage Monument",
        description: "Learn about Cebu's history through sculptural tableaux"
      },
      {
        time: "12:00 PM",
        activity: "Lunch Break",
        description: "Traditional Filipino lunch at a local restaurant"
      },
      {
        time: "2:00 PM",
        activity: "Temple of Leah",
        description: "Visit the Roman-inspired temple with panoramic city views"
      },
      {
        time: "3:30 PM",
        activity: "Yap-Sandiego Ancestral House",
        description: "Explore one of the oldest houses in the Philippines"
      },
      {
        time: "4:30 PM",
        activity: "Return to Hotel",
        description: "Comfortable ride back to your accommodation"
      }
    ],
    inclusions: [
      "Air-conditioned van transportation",
      "Professional English-speaking driver",
      "Fuel and parking fees",
      "Entrance fees to all attractions",
      "Lunch at local restaurant",
      "Bottled water",
      "Travel insurance"
    ],
    exclusions: [
      "Personal expenses",
      "Tips and gratuities",
      "Additional food and drinks",
      "Accommodation"
    ],
    images: {
      main: "/images/tours/cebu-heritage-main.svg",
      gallery: [
        "/images/tours/cebu-heritage-1.svg",
        "/images/tours/cebu-heritage-2.svg", 
        "/images/tours/cebu-heritage-3.svg",
        "/images/tours/cebu-heritage-4.svg"
      ],
      alt: "Cebu City Heritage Tour - Historical landmarks and cultural sites"
    },
    category: "Cultural",
    featured: true,
    available: true
  },
  {
    slug: "oslob-whale-shark-adventure",
    title: "Oslob Whale Shark Swimming Adventure",
    summary: "Once-in-a-lifetime experience swimming with gentle whale sharks in the crystal-clear waters of Oslob.",
    seoDescription: "Swim with whale sharks in Oslob, Cebu! Join our guided tour with comfortable van transport, professional guides, and unforgettable encounters with these gentle giants.",
    price: {
      van: 6500,
      currency: "PHP", 
      duration: "12 hours"
    },
    duration: "12 hours",
    maxGuests: 15,
    difficulty: "Moderate",
    highlights: [
      "Swimming with whale sharks",
      "Tumalog Falls visit",
      "Scenic coastal drive",
      "Marine sanctuary experience",
      "Professional guide assistance",
      "Underwater photography opportunities"
    ],
    itinerary: [
      {
        time: "3:30 AM",
        activity: "Hotel Pickup",
        description: "Early morning pickup for the 3-hour journey to Oslob"
      },
      {
        time: "6:30 AM",
        activity: "Travel to Oslob",
        description: "Scenic drive along Cebu's southern coastline"
      },
      {
        time: "7:00 AM",
        activity: "Registration & Briefing",
        description: "Safety briefing and whale shark interaction guidelines"
      },
      {
        time: "7:30 AM",
        activity: "Whale Shark Encounter",
        description: "30-minute swimming experience with whale sharks"
      },
      {
        time: "9:00 AM",
        activity: "Breakfast",
        description: "Local breakfast near the whale shark site"
      },
      {
        time: "10:30 AM",
        activity: "Tumalog Falls",
        description: "Visit the beautiful curtain-like waterfall"
      },
      {
        time: "12:00 PM",
        activity: "Lunch",
        description: "Fresh seafood lunch at a local restaurant"
      },
      {
        time: "2:00 PM",
        activity: "Return Journey",
        description: "Comfortable ride back to Cebu City"
      },
      {
        time: "7:00 PM",
        activity: "Hotel Drop-off",
        description: "Arrival back at your accommodation"
      }
    ],
    inclusions: [
      "Air-conditioned van transportation",
      "Professional driver and guide",
      "Whale shark watching fee",
      "Snorkeling gear (mask, snorkel, life vest)",
      "Tumalog Falls entrance fee",
      "Breakfast and lunch",
      "Bottled water",
      "Travel insurance"
    ],
    exclusions: [
      "Underwater camera rental (₱500)",
      "Personal expenses",
      "Tips and gratuities",
      "Additional food and drinks"
    ],
    images: {
      main: "/images/tours/oslob-whale-shark-main.svg",
      gallery: [
        "/images/tours/oslob-whale-shark-1.svg",
        "/images/tours/oslob-whale-shark-2.svg",
        "/images/tours/oslob-whale-shark-3.svg",
        "/images/tours/oslob-whale-shark-4.svg"
      ],
      alt: "Oslob Whale Shark Adventure - Swimming with whale sharks experience"
    },
    category: "Nature & Adventure",
    featured: true,
    available: true
  },
  {
    slug: "bohol-countryside-tour",
    title: "Bohol Countryside Day Tour",
    summary: "Explore the natural wonders of Bohol including the famous Chocolate Hills, tarsier sanctuary, and historic sites.",
    seoDescription: "Discover Bohol's countryside on this comprehensive day tour. See the Chocolate Hills, meet tarsiers, cruise the Loboc River, and visit historic churches with comfortable van transport from Cebu.",
    price: {
      van: 8500,
      currency: "PHP",
      duration: "14 hours"
    },
    duration: "14 hours",
    maxGuests: 15,
    difficulty: "Easy",
    highlights: [
      "Famous Chocolate Hills viewpoint",
      "Philippine Tarsier Sanctuary",
      "Loboc River cruise with lunch",
      "Blood Compact Monument",
      "Baclayon Church heritage site",
      "Man-made Mahogany Forest"
    ],
    itinerary: [
      {
        time: "4:00 AM",
        activity: "Hotel Pickup",
        description: "Early departure for ferry terminal"
      },
      {
        time: "6:00 AM",
        activity: "Ferry to Bohol",
        description: "2-hour scenic ferry ride to Tagbilaran, Bohol"
      },
      {
        time: "8:30 AM",
        activity: "Blood Compact Monument",
        description: "Historical site commemorating the first treaty in the Philippines"
      },
      {
        time: "9:30 AM",
        activity: "Baclayon Church",
        description: "Visit one of the oldest stone churches in the Philippines"
      },
      {
        time: "10:30 AM",
        activity: "Tarsier Sanctuary",
        description: "See the world's smallest primates in their natural habitat"
      },
      {
        time: "12:00 PM",
        activity: "Loboc River Cruise",
        description: "Buffet lunch aboard a floating restaurant"
      },
      {
        time: "2:00 PM",
        activity: "Man-made Mahogany Forest",
        description: "Drive through the enchanting forest tunnel"
      },
      {
        time: "2:30 PM",
        activity: "Chocolate Hills",
        description: "Iconic geological formation and Bohol's top attraction"
      },
      {
        time: "4:00 PM",
        activity: "Return to Tagbilaran",
        description: "Journey back to the ferry terminal"
      },
      {
        time: "6:00 PM",
        activity: "Ferry to Cebu",
        description: "Evening ferry back to Cebu"
      },
      {
        time: "10:00 PM",
        activity: "Hotel Drop-off",
        description: "Arrival back at your Cebu accommodation"
      }
    ],
    inclusions: [
      "Air-conditioned van transportation in Cebu and Bohol",
      "Round-trip ferry tickets",
      "Professional driver and guide",
      "All entrance fees and environmental fees",
      "Loboc River cruise with buffet lunch",
      "Bottled water throughout the tour",
      "Travel insurance"
    ],
    exclusions: [
      "Personal expenses",
      "Tips and gratuities", 
      "Dinner",
      "Additional food and drinks",
      "Souvenir shopping"
    ],
    images: {
      main: "/images/tours/bohol-countryside-main.svg",
      gallery: [
        "/images/tours/bohol-countryside-1.svg",
        "/images/tours/bohol-countryside-2.svg",
        "/images/tours/bohol-countryside-3.svg", 
        "/images/tours/bohol-countryside-4.svg"
      ],
      alt: "Bohol Countryside Tour - Chocolate Hills and natural attractions"
    },
    category: "Nature & Adventure",
    featured: true,
    available: true
  }
];

// Helper functions
export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find(tour => tour.slug === slug);
}

export function getFeaturedTours(): Tour[] {
  return tours.filter(tour => tour.featured && tour.available);
}

export function getToursByCategory(category: Tour['category']): Tour[] {
  return tours.filter(tour => tour.category === category && tour.available);
}

export function getAllTourSlugs(): string[] {
  return tours.map(tour => tour.slug);
}
