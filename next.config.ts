import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*", // Allows images from any HTTPS source
      },
    ],
  },
  experimental: {
    ppr: "incremental",
  },
  devIndicators: {
    position: "bottom-left", // Updated from 'buildActivityPosition'
  },
};

export default nextConfig;
