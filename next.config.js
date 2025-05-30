/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['uploadthing.com', 'utfs.io', 'img.youtube.com', 'i.ytimg.com'],
  },
}

module.exports = nextConfig 