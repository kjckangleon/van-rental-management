import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Us - Book Your Cebu Tour",
  description: "Get in touch with Cebu Van Tours to book your perfect Cebu adventure. Professional tour operators ready to help plan your unforgettable Philippines experience.",
  path: "/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
