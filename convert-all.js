const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const directories = [
  './public/images',
  './src/assets/images',
  './src/assets'
];

async function convertImage(filePath, webpPath) {
  try {
    await sharp(filePath).webp({ quality: 80 }).toFile(webpPath);
    console.log(`SUCCESS: ${filePath} -> ${webpPath}`);
    fs.unlinkSync(filePath); // Delete original
  } catch (err) {
    console.error(`ERROR converting ${filePath}:`, err);
  }
}

async function run() {
  let count = 0;
  for (const dir of directories) {
    if (!fs.existsSync(dir)) {
      console.log(`Directory not found: ${dir}`);
      continue;
    }
    
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isFile() && /\.(png|jpe?g)$/i.test(file)) {
        if (['logo192.png', 'logo512.png', 'og-image.png', 'favicon.ico'].includes(file)) continue;

        const ext = path.extname(file);
        // Special case for files like dashboard.png.png
        const baseName = file.replace(new RegExp(`\\.png\\.png$|\\.png$|\\.jpe?g$`, 'i'), '');
        const webpPath = path.join(dir, `${baseName}.webp`);
        
        await convertImage(filePath, webpPath);
        count++;
      }
    }
  }
  console.log(`Finished converting ${count} images.`);
}

run();
