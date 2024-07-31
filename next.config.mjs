/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'frontendday.descompliqueapps.com.br',
        port: '',
        pathname: '/2024/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/u/**',
      },
    ],
  },
  rewrites: async () => {
    return [
      {
        source: '/agenda/:path*',
        destination: process.env.AGENDA_MF_URL || '',
      },
    ];
  },
};

export default nextConfig;
