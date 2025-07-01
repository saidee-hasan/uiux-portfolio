import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["avatar.vercel.sh"],
  },
  output: "export", 
};

export default nextConfig;
