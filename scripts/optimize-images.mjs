#!/usr/bin/env node
/**
 * Image Optimization Script
 * Converts all book images to optimized WebP format
 * Creates multiple sizes for responsive images
 */

import sharp from 'sharp';
import { readdir, mkdir, stat } from 'fs/promises';
import { join, extname, basename, dirname, relative } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SOURCE_DIR = join(ROOT, 'public/images/books');
const OUTPUT_DIR = join(ROOT, 'public/images/books-optimized');

// Size configurations
const SIZES = {
  hero: { width: 1200, quality: 80 },    // Hero images, carousels
  product: { width: 800, quality: 82 },   // Product cards, main images
  thumb: { width: 400, quality: 80 },     // Thumbnails, galleries
};

const SUPPORTED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

async function getFiles(dir) {
  const files = [];
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await getFiles(fullPath));
    } else if (SUPPORTED_EXTENSIONS.includes(extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }
  return files;
}

async function optimizeImage(inputPath, outputDir) {
  const ext = extname(inputPath).toLowerCase();
  const name = basename(inputPath, ext);
  const relPath = relative(SOURCE_DIR, dirname(inputPath));
  const targetDir = join(outputDir, relPath);

  await mkdir(targetDir, { recursive: true });

  const inputStats = await stat(inputPath);
  const inputSizeKB = Math.round(inputStats.size / 1024);

  const results = [];

  for (const [sizeName, config] of Object.entries(SIZES)) {
    const outputName = `${name}-${sizeName}.webp`;
    const outputPath = join(targetDir, outputName);

    try {
      const info = await sharp(inputPath)
        .resize(config.width, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality: config.quality })
        .toFile(outputPath);

      const outputSizeKB = Math.round(info.size / 1024);
      const savings = Math.round((1 - info.size / inputStats.size) * 100);

      results.push({
        size: sizeName,
        outputKB: outputSizeKB,
        savings: `${savings}%`
      });
    } catch (err) {
      console.error(`  Error creating ${sizeName}: ${err.message}`);
    }
  }

  // Also create a default optimized version (product size)
  const defaultOutput = join(targetDir, `${name}.webp`);
  await sharp(inputPath)
    .resize(SIZES.product.width, null, { withoutEnlargement: true, fit: 'inside' })
    .webp({ quality: SIZES.product.quality })
    .toFile(defaultOutput);

  return { inputPath, inputSizeKB, results };
}

async function main() {
  console.log('Image Optimization Script');
  console.log('=========================\n');

  const files = await getFiles(SOURCE_DIR);
  console.log(`Found ${files.length} images to optimize\n`);

  let totalInputKB = 0;
  let totalOutputKB = 0;

  for (const file of files) {
    const relPath = relative(SOURCE_DIR, file);
    console.log(`Processing: ${relPath}`);

    const result = await optimizeImage(file, OUTPUT_DIR);
    totalInputKB += result.inputSizeKB;

    for (const r of result.results) {
      console.log(`  ${r.size}: ${r.outputKB}KB (${r.savings} savings)`);
      if (r.size === 'product') totalOutputKB += r.outputKB;
    }
  }

  console.log('\n=========================');
  console.log(`Total input: ${Math.round(totalInputKB / 1024)}MB`);
  console.log(`Total output (product size): ${Math.round(totalOutputKB / 1024)}MB`);
  console.log(`Overall savings: ${Math.round((1 - totalOutputKB / totalInputKB) * 100)}%`);
}

main().catch(console.error);
