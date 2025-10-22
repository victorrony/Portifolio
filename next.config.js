/** @type {import('next').NextConfig} */
const nextConfig = {
   // App Router agora é estável no Next.js 13+
   experimental: {
      appDir: true,
      optimizeCss: true,
      optimizePackageImports: ['@react-three/drei', 'three', 'framer-motion'],
   },

   // Otimizações de imagem
   images: {
      formats: ['image/avif', 'image/webp'],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
   },

   // Compilador
   compiler: {
      removeConsole: process.env.NODE_ENV === 'production' ? {
         exclude: ['error', 'warn'],
      } : false,
   },

   // Minificação com SWC
   swcMinify: true,

   // Otimização de performance
   reactStrictMode: true,

   // Compressão
   compress: true,
};

module.exports = nextConfig;
