import sharp from 'sharp'

const assets = [
  {
    input: '/Users/niyastheenofficialgmail.com/Downloads/Zeal Creations/Logo-01.png',
    output: 'public/brand/mas-symbol.png',
    width: 512,
  },
  {
    input: '/Users/niyastheenofficialgmail.com/Downloads/Zeal Creations/Logo-02.png',
    output: 'public/brand/mas-wordmark.png',
    width: 1400,
  },
]

for (const asset of assets) {
  const { data, info } = await sharp(asset.input)
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })

  const rgba = Buffer.alloc(info.width * info.height * 4)

  for (let source = 0, target = 0; source < data.length; source += 3, target += 4) {
    const red = data[source]
    const green = data[source + 1]
    const blue = data[source + 2]
    const distanceFromWhite = Math.max(255 - red, 255 - green, 255 - blue)
    const alpha = Math.max(0, Math.min(255, (distanceFromWhite - 4) * 3))

    rgba[target] = red
    rgba[target + 1] = green
    rgba[target + 2] = blue
    rgba[target + 3] = alpha
  }

  await sharp(rgba, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .resize({ width: asset.width, withoutEnlargement: true })
    .png({ compressionLevel: 9 })
    .toFile(asset.output)
}

await sharp('public/brand/mas-symbol.png')
  .resize(64, 64, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png({ compressionLevel: 9 })
  .toFile('public/favicon.png')
