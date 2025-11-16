import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbopackFileSystemCacheForDev: true,
    /*Enable turbo pack file system cache for development to improve performance, 
    as new feature of Next.js */ 
  },
};

export default nextConfig;
