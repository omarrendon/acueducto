import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizeCss: false,
    // turbo: false, // Removed to fix type error
  },
};

export default nextConfig;
