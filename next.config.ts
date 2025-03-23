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
};

export default nextConfig;
