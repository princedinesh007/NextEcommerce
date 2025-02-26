import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Enable static export
  images: {
    domains: ['fakestoreapi.com'], // Allow images from this domain
  },
};

export default nextConfig;
