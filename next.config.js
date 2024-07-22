const withsvgr = require("next-svgr");

/** @type {import('next').NextConfig} */
const nextConfig = withsvgr({
  darkMode: "class",
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
});

module.exports = nextConfig;
