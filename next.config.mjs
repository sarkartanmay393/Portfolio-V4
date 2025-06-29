/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "**.hashnode.com",
        port: "",
        pathname: "/res/hashnode/image/upload/**",
      },
      {
        protocol: "https",
        hostname: "**.giphy.com",
      },
      {
        protocol: "https",
        hostname: "prepinsta.com",
      },
      {
        protocol: "https",
        hostname: "miro.medium.com",
      },
      {
        protocol: "https",
        hostname: "ghchart.rshah.org",
      },
      {
        protocol: "https",
        hostname: "i.scdn.co",
        port: "",
        pathname: "/image/**",
      },
      {
        protocol: "https",
        hostname: "**.spotifycdn.com",
      }
    ],
  },
};

export default nextConfig;
