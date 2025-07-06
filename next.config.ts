import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "dynamicpencil-us.backendless.app",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
