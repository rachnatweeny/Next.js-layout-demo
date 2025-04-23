import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */images: {
    domains: ['images.pexels.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: 'photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"**',
        search: '',
      },
    ],
  },
  experimental: {
    authInterrupts: true,
  },
};

export default nextConfig;
