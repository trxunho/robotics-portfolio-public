import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The portfolio has no server-only routes. A static export makes the exact
  // same build deployable on Vercel, EdgeOne Pages, or any Nginx server.
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
