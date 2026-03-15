const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const directories = [
  './public/images',
  './public',
  './src/assets/images',
  './src/assets',
];

async function processDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isFile() && /\.(png|jpe?g)$/i.test(file)) {
      // Preserve specific files that need their original formats
      if (['logo192.png', 'logo512.png', 'og-image.png', 'favicon.ico'].includes(file)) continue;

      const ext = path.extname(file);
      const webpPath = filePath.replace(new RegExp(`${ext}$`, 'i'), '.webp');
      
      console.log(`Converting ${filePath} -> ${webpPath}`);
      try {
        await sharp(filePath)
          .webp({ quality: 80 })
          .toFile(webpPath);
          
        fs.unlinkSync(filePath); // delete original
      } catch (err) {
        console.error(`Error converting ${filePath}:`, err);
      }
    }
  }
}

async function run() {
  for (const dir of directories) {
    await processDirectory(dir);
  }
  console.log('Conversion complete!');
}

run();
