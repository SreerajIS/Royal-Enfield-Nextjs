import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure proper static file handling
  trailingSlash: false,

  // Disable experimental features for stable deployment
  experimental: {},

  // Image optimization settings
  images: {
    remotePatterns: [],
    unoptimized: false,
  },
};

export default nextConfig;
