import type { NextConfig } from "next";

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/Accueil",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
