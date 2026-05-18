/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Enable compression
  compress: true,
};

export default nextConfig;
