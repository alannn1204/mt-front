import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false, // ignore fs di frontend
    };
    return config;
  },
};

export default nextConfig; // ✅ cuma export default
