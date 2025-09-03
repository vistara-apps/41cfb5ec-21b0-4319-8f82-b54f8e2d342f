/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['placeholder.pics', 'images.unsplash.com', 'api.dicebear.com'],
  },
  experimental: {
    appDir: true,
  },
}

export default nextConfig
