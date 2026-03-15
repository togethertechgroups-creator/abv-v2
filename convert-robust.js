const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDirs = [
  path.join(__dirname, 'public', 'images'),
  path.join(__dirname, 'src', 'assets', 'images'),
  path.join(__dirname, 'src', 'assets')
];

async function convertAll() {
  console.log('Starting conversion...');
  let totalConverted = 0;

  for (const dir of inputDirs) {
    console.log(`Checking directory: ${dir}`);
    if (!fs.existsSync(dir)) {
      console.log(` ! Directory does not exist: ${dir}`);
      continue;
    }

    const files = fs.readdirSync(dir);
    console.log(` - Found ${files.length} files in ${dir}`);

    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        if (['logo192.png', 'logo512.png', 'favicon.ico', 'og-image.png'].includes(file)) {
           console.log(` - Skipping excluded file: ${file}`);
           continue;
        }

        const filePath = path.join(dir, file);
        const baseName = file.replace(new RegExp(`${ext}$`, 'i'), '');
        // For files like dashboard.png.png
        const cleanBaseName = baseName.replace(/\.png$/i, ''); 
        const webpPath = path.join(dir, `${cleanBaseName}.webp`);

        try {
          console.log(` - Converting ${file} to .webp...`);
          await sharp(filePath).webp({ quality: 80 }).toFile(webpPath);
          fs.unlinkSync(filePath);
          totalConverted++;
          console.log(`   > Success`);
        } catch (err) {
          console.error(`   > ERROR converting ${file}:`, err.message);
        }
      }
    }
  }

  console.log(`\nCOMPLETED. Total images converted: ${totalConverted}`);
}

convertAll().catch(err => {
  console.error("FATAL ERROR:", err);
});
