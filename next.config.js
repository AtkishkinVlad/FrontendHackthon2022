/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    fontLoaders: [
        {
            loader: '@next/font/local'
        }
    ],
  },
  images: {
    domains: ['replicate.delivery']
  },
  swcMinify: true,
}

module.exports = nextConfig
