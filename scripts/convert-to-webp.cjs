const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const TARGET_DIRS = [
  path.join(__dirname, '../src/assets/Products'),
  path.join(__dirname, '../src/assets/signture products')
];

function getImages(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      getImages(fullPath, fileList);
    } else if (/\.(png|jpg|jpeg)$/i.test(item.name)) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

async function convertImages() {
  let allFiles = [];
  for (const dir of TARGET_DIRS) {
    allFiles = allFiles.concat(getImages(dir));
  }

  console.log(`Found ${allFiles.length} images to convert to WebP.`);

  let totalOriginalSize = 0;
  let totalNewSize = 0;
  let convertedCount = 0;
  let errorCount = 0;

  for (const file of allFiles) {
    const ext = path.extname(file);
    const webpPath = file.slice(0, -ext.length) + '.webp';

    try {
      const stats = fs.statSync(file);
      totalOriginalSize += stats.size;

      // Convert using sharp
      const pipeline = sharp(file)
        .resize({
          width: 800,
          height: 800,
          fit: 'inside',
          withoutEnlargement: true
        })
        .webp({
          quality: 80,
          alphaQuality: 85,
          effort: 4
        });

      await pipeline.toFile(webpPath);

      const newStats = fs.statSync(webpPath);
      totalNewSize += newStats.size;

      // Remove old file
      fs.unlinkSync(file);
      convertedCount++;

      if (convertedCount % 25 === 0 || convertedCount === allFiles.length) {
        console.log(`Converted ${convertedCount}/${allFiles.length}...`);
      }
    } catch (err) {
      console.error(`Error converting ${file}:`, err.message);
      errorCount++;
    }
  }

  const origMB = (totalOriginalSize / (1024 * 1024)).toFixed(2);
  const newMB = (totalNewSize / (1024 * 1024)).toFixed(2);
  const savedMB = (origMB - newMB).toFixed(2);
  const savedPercent = (((totalOriginalSize - totalNewSize) / totalOriginalSize) * 100).toFixed(1);

  console.log('\n========================================');
  console.log(`Optimization Completed!`);
  console.log(`Converted: ${convertedCount} images (Errors: ${errorCount})`);
  console.log(`Original Size: ${origMB} MB`);
  console.log(`New WebP Size: ${newMB} MB`);
  console.log(`Saved: ${savedMB} MB (${savedPercent}% reduction)`);
  console.log('========================================\n');
}

convertImages();
