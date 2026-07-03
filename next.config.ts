import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/projects", destination: "/#work", permanent: true },
      { source: "/skillset", destination: "/#skills", permanent: true },
      { source: "/resume", destination: "/#resume", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
    ];
  },
};

export default nextConfig;
