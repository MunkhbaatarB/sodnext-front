// next.config.js
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "194.163.170.83",

        pathname: "/storage/**",
      },
    ],
  },
  // Remove broad rewrites to avoid clashing with Next.js App Router API routes
};

module.exports = nextConfig;
