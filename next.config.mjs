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
    deviceSizes: [390, 640, 750, 828, 1080, 1200, 1920, 2560],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 604800,
    dangerouslyAllowSVG: false,
  },

  compress: true,

  typescript: {
    ignoreBuildErrors: true,
  },

  async rewrites() {
    return [
      // /sitemap.xml -> sitemap index
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap-index",
      },
      // /sitemap/:id.xml -> /api/sitemap/:id (for sub-sitemaps)
      {
        source: "/sitemap/:id.xml",
        destination: "/api/sitemap/:id",
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
        ],
      },
    ];
  },
};

export default nextConfig;

