const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '../public');
const ASSETS_DIR = path.join(PUBLIC_DIR, 'assets');

// Configurações de otimização
const OPTIMIZATION_CONFIG = {
  webp: {
    quality: 85,
    effort: 6, // 0-6, maior = melhor compressão mas mais lento
  },
  jpeg: {
    quality: 85,
    progressive: true,
    mozjpeg: true,
  },
  png: {
    compressionLevel: 9,
    quality: 85,
  }
};

// Tamanhos máximos recomendados
const MAX_SIZES = {
  hero: 1920,
  project: 800,
  icon: 128,
  default: 1200,
};

async function optimizeImage(inputPath, outputPath, options = {}) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    console.log(`\n📸 Processando: ${path.basename(inputPath)}`);
    console.log(`   Tamanho original: ${metadata.width}x${metadata.height}`);
    console.log(`   Formato: ${metadata.format}`);

    let pipeline = image;

    // Redimensionar se necessário
    if (options.maxWidth && metadata.width > options.maxWidth) {
      pipeline = pipeline.resize(options.maxWidth, null, {
        withoutEnlargement: true,
        fit: 'inside',
      });
      console.log(`   ✂️  Redimensionado para: ${options.maxWidth}px largura`);
    }

    // Converter para WebP
    const webpPath = outputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    await pipeline
      .webp(OPTIMIZATION_CONFIG.webp)
      .toFile(webpPath);

    const webpStats = fs.statSync(webpPath);
    const originalStats = fs.statSync(inputPath);
    const savings = ((1 - webpStats.size / originalStats.size) * 100).toFixed(1);

    console.log(`   ✅ WebP salvo: ${path.basename(webpPath)}`);
    console.log(`   💾 Tamanho: ${(originalStats.size / 1024).toFixed(1)}KB → ${(webpStats.size / 1024).toFixed(1)}KB (-${savings}%)`);

    return {
      original: inputPath,
      webp: webpPath,
      originalSize: originalStats.size,
      webpSize: webpStats.size,
      savings: parseFloat(savings),
    };
  } catch (error) {
    console.error(`   ❌ Erro ao processar ${inputPath}:`, error.message);
    return null;
  }
}

async function findImages(dir, images = []) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      await findImages(filePath, images);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      // Pular se já existe versão WebP
      const webpPath = filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      if (!fs.existsSync(webpPath)) {
        images.push(filePath);
      }
    }
  }

  return images;
}

function getMaxWidthForImage(imagePath) {
  const basename = path.basename(imagePath).toLowerCase();

  if (basename.includes('hero') || basename.includes('background')) {
    return MAX_SIZES.hero;
  }
  if (imagePath.includes('/assets/') && !imagePath.includes('/tech/')) {
    return MAX_SIZES.project;
  }
  if (imagePath.includes('/tech/') || basename.includes('icon')) {
    return MAX_SIZES.icon;
  }
  return MAX_SIZES.default;
}

async function main() {
  console.log('🖼️  Iniciando otimização de imagens...\n');
  console.log(`📁 Diretório: ${PUBLIC_DIR}\n`);

  const images = await findImages(PUBLIC_DIR);

  if (images.length === 0) {
    console.log('✨ Todas as imagens já estão otimizadas!');
    return;
  }

  console.log(`📊 Encontradas ${images.length} imagens para otimizar\n`);
  console.log('━'.repeat(60));

  const results = [];
  let totalOriginalSize = 0;
  let totalWebpSize = 0;

  for (const imagePath of images) {
    const maxWidth = getMaxWidthForImage(imagePath);
    const result = await optimizeImage(imagePath, imagePath, { maxWidth });

    if (result) {
      results.push(result);
      totalOriginalSize += result.originalSize;
      totalWebpSize += result.webpSize;
    }
  }

  console.log('\n' + '━'.repeat(60));
  console.log('\n📈 RESUMO DA OTIMIZAÇÃO\n');
  console.log(`   Imagens processadas: ${results.length}`);
  console.log(`   Tamanho original: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Tamanho WebP: ${(totalWebpSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Economia total: ${((1 - totalWebpSize / totalOriginalSize) * 100).toFixed(1)}%`);
  console.log(`   Espaço economizado: ${((totalOriginalSize - totalWebpSize) / 1024 / 1024).toFixed(2)} MB`);
  console.log('\n✅ Otimização concluída!\n');
  console.log('💡 Dica: Atualize seus imports para usar as versões .webp');
}

main().catch(console.error);
