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
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://worldmongolians.com/api/job-applications",
      },
    ];
  },
};

module.exports = nextConfig;
