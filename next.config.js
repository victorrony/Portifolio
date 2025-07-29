/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
   enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
   // Remove deprecated experimental.appDir (it's now stable)
   
   // Performance optimizations
   poweredByHeader: false,
   compress: true,
   
   // Image optimization
   images: {
      formats: ['image/webp', 'image/avif'],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      domains: ['localhost'],
      dangerouslyAllowSVG: true,
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
   },
   
   // Security headers
   async headers() {
      return [
         {
            source: '/(.*)',
            headers: [
               {
                  key: 'X-Frame-Options',
                  value: 'DENY',
               },
               {
                  key: 'X-Content-Type-Options',
                  value: 'nosniff',
               },
               {
                  key: 'Referrer-Policy',
                  value: 'origin-when-cross-origin',
               },
               {
                  key: 'Permissions-Policy',
                  value: 'camera=(), microphone=(), geolocation=()',
               },
            ],
         },
      ];
   },

   // Bundle optimization
   webpack: (config, { dev, isServer }) => {
      // Optimize bundle splitting
      if (!dev && !isServer) {
         config.optimization.splitChunks = {
            chunks: 'all',
            cacheGroups: {
               vendor: {
                  test: /[\\/]node_modules[\\/]/,
                  name: 'vendors',
                  chunks: 'all',
               },
               three: {
                  test: /[\\/]node_modules[\\/](three|@react-three)[\\/]/,
                  name: 'three',
                  chunks: 'all',
               },
            },
         };
      }
      
      return config;
   },

   // Enable static exports for better performance
   trailingSlash: false,
   
   // Output configuration for Docker
   output: 'standalone',
   
   // Experimental features for better performance
   experimental: {
      optimizeCss: true,
   },
};

module.exports = withBundleAnalyzer(nextConfig);
