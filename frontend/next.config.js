/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost"], // Add any external domains you want to load images from as well
  },
};

module.exports = {
  env: {},
  ...nextConfig,
};
