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
    domains: ['replicate.delivery', 'i.pinimg.com', 'staff.skbkontur.ru']
  },
  swcMinify: true,
}

module.exports = nextConfig
