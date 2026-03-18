/**
 * generate-webp-assets.mjs
 * 
 * Converts SVG source files → WebP 1x/2x using Sharp.
 * SVGs live in:  public/assets/svg/
 * Output goes to: public/assets/raster/
 * 
 * Run: node generate-webp-assets.mjs
 * Requires: npm install sharp
 */

import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const root = process.cwd()
const svgDir    = path.join(root, 'public', 'assets', 'svg')
const rasterDir = path.join(root, 'public', 'assets', 'raster')

/**
 * Each entry maps an SVG source file to its output name.
 * The SVG files go in public/assets/svg/
 */
const assets = [
  { name: 'home-hero-orbit',     svg: 'home-hero-orbit.svg' },
  { name: 'product-ad-flow',     svg: 'product-ad-flow.svg' },
  { name: 'features-dashboard',  svg: 'features-dashboard.svg' },
  { name: 'integrations-network',svg: 'integrations-network.svg' },
]

/**
 * Build a single WebP at the given width/height from an SVG.
 */
async function buildVariant(svgPath, width, height, outFile) {
  const svgBuffer = await fs.readFile(svgPath)

  await sharp(svgBuffer, { density: Math.round((width / 1200) * 144) })
    .resize(width, height, { fit: 'cover', position: 'centre' })
    .webp({ quality: 88, effort: 6 })
    .toFile(path.join(rasterDir, outFile))

  console.log(`  ✓  ${outFile}`)
}

async function main() {
  await fs.mkdir(rasterDir, { recursive: true })

  for (const asset of assets) {
    const svgPath = path.join(svgDir, asset.svg)

    // Verify source exists
    try {
      await fs.access(svgPath)
    } catch {
      console.warn(`  ⚠  Missing: ${svgPath} – skipping`)
      continue
    }

    console.log(`\nProcessing: ${asset.name}`)
    await buildVariant(svgPath, 1200, 760, `${asset.name}.webp`)       // 1x
    await buildVariant(svgPath, 2400, 1520, `${asset.name}@2x.webp`)   // 2x retina
  }

  console.log('\n✅  All WebP assets generated.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
