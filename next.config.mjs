/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "img.youtube.com",
        protocol: "https",
      },
      {
        hostname: "i.ytimg.com",
        protocol: "https",
      },

      {
        hostname: "img.clerk.com",
        protocol: "https",
      },
      {
        hostname: "m.media-amazon.com",
        protocol: "https",
      },
      {
        hostname: "preview.colorlib.com",
        protocol: "https",
      },
      {
        hostname: "images.unsplash.com",
        protocol: "https",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
