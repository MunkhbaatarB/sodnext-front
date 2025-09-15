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
};

module.exports = nextConfig;
