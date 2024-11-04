import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.cache = {
      type: 'filesystem', // Use 'filesystem' cache as required by Next.js
      cacheDirectory: path.resolve(__dirname, '.next/cache/webpack'),
      compression: 'gzip', // Compress cached files for reduced size
    };

    return config;
  },
  // Additional config options can go here if needed
};

export default nextConfig;
