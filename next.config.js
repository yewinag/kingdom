/** @type {import('next').NextConfig} */

const path = require('path');

const withPWA = require('next-pwa')({
  dest: 'public'
});

const settings = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  images: {
    domains: ['stg-images.soulkingdom.net']
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  }
};
const settingsProd = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  images: {
    domains: ['images.soulkingdom.net']
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  }
};
module.exports =
  process.env.NODE_ENV === 'development' ? settings : withPWA(settingsProd);
