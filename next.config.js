const isProd = process.env.NODE_ENV === 'production';

/**
 * @type {import('next').NextConfig}
 **/

module.exports = {
   images: {
      loader: 'imgix',
      path: isProd ? 'https://markdownit.ga' : 'http://localhost:3000'
   }
};
