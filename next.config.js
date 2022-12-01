/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    fontLoaders: [
        {
            loader: '@next/font/local'
        }
    ]
  },
  swcMinify: true,
}

module.exports = nextConfig
