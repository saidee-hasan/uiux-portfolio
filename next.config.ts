import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["avatar.vercel.sh"],
  },
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
};

export default nextConfig;
