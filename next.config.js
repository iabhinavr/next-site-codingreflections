/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wp.codingreflections.com',
        port: '',
        pathname: '/wp-content/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn-1.codingreflections.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
