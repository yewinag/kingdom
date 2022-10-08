/** @type {import('next').NextConfig} */

const path = require('path');

const withPWA = require('next-pwa')({
  dest: 'public'
});
module.exports = withPWA({
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  images: {
    domains: ['stg-images.soulkingdom.net']
  }
});
