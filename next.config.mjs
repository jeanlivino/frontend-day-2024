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
  redirects: async () => {
    return [
      {
        source: '/agenda',
        destination: 'https://agenda.frontendday.com.br',
        permanent: true,
      },
    ];
  },
  rewrites: async () => {
    return [
      {
        source: '/api/agenda',
        destination: process.env.AGENDA_API_URL || '',
      },
      {
        source: '/meu-certificado/:path*',
        destination: 'https://certificates-api.hackathon.frontenday.com.br/certificate/:path*',
      }
    ];
  },
};

export default nextConfig;
