import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "play-lh.googleusercontent.com",
        port: "",
        pathname: "**"
      },
      {
        protocol: "http",
        hostname: "apistore.cybersoft.edu.vn",
        port: "",
        pathname: "**"
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        port: "",
        pathname: "**"
      },

    ]
  }
};

export default nextConfig;
