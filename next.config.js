const isProd = process.env.NODE_ENV === 'production';
const withPWA = require('next-pwa');

/**
 * @type {import('next').NextConfig}
 **/

module.exports = withPWA({
   images: {
      loader: 'imgix',
      path: isProd ? 'https://markdownit.ga' : 'http://localhost:3000'
   },
   pwa: {
      dest: 'public',
      runtimeCaching,
      buildExcludes: [/middleware-manifest.json$/],
      register: true,
      skipWaiting: true
   }
});
