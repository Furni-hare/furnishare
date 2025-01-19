import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */

module.exports = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
};

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
