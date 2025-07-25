import type { NextConfig } from "next";

const nextConfig = {
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
