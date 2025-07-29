/** @type {import('next').NextConfig} */

const nextConfig = {
   // Enable app directory
   experimental: {
      appDir: true,
   },
   
   // Image optimization
   images: {
      domains: ['localhost'],
      dangerouslyAllowSVG: true,
   },
   
   // Performance optimizations
   poweredByHeader: false,
   compress: true,
   
   // Enable static exports for better performance
   trailingSlash: false,
};

module.exports = nextConfig;