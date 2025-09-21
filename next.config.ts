import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Explicitly disable experimental features that might trigger Turbopack
  experimental: {
    turbo: undefined,
  },
  // Use webpack bundler instead of Turbopack
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
