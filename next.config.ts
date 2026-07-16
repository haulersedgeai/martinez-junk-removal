import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/junk-removal", destination: "/dumpster-rental", permanent: true },
      { source: "/services", destination: "/dumpster-rental", permanent: true },
      { source: "/services/:path*", destination: "/dumpster-rental", permanent: true },
    ];
  },
};

export default nextConfig;
