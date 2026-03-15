const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    if (fs.statSync(file).isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.js') || file.endsWith('.jsx')) results.push(file);
    }
  });
  return results;
}

const files = walk('./src');
let changed = 0;
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let newContent = content;

  // Revert common WebP replacements back to what they were
  newContent = newContent
    .replace(/arrow\.webp/g, 'arrow.png')
    .replace(/uparrow\.webp/g, 'uparrow.png')
    .replace(/hiw_growth\.webp/g, 'hiw_growth.png')
    .replace(/hiw_advantage\.webp/g, 'hiw_advantage.png')
    .replace(/bluebg\.webp/g, 'bluebg.jpg')
    .replace(/hero_portrait\.webp/g, 'hero_portrait.png')
    .replace(/dashboard\.png\.webp/g, 'dashboard.png.png')
    .replace(/URL QR Code\.webp/g, 'URL QR Code.png')
    .replace(/map\.webp/g, 'map.png')
    .replace(/restaurant_case\.webp/g, 'restaurant_case.png')
    .replace(/industrial_case\.webp/g, 'industrial_case.png')
    .replace(/aboutphone\.webp/g, 'aboutphone.png')
    .replace(/about_guard\.webp/g, 'about_guard.png')
    .replace(/mission_3d\.webp/g, 'mission_3d.png')
    .replace(/vision_3d\.webp/g, 'vision_3d.png')
    .replace(/values_3d\.webp/g, 'values_3d.png')
    .replace(/img1\.webp/g, 'img1.png')
    .replace(/img2\.webp/g, 'img2.png')
    .replace(/img3\.webp/g, 'img3.png')
    .replace(/img4\.webp/g, 'img4.png')
    .replace(/3phone\.webp/g, '3phone.png')
    .replace(/abv\.webp/g, 'abv.png')
    .replace(/cityyyy\.webp/g, 'cityyyy.png')
    // StrategicMap needs special treatment as it changed $\{z}/$\{x}/$\{y}.png to .webp
    .replace(/\{z\}\/\{x\}\/\{y\}\.webp/g, '{z}/{x}/{y}.png')
    .replace(/\.png\.webp/g, '.png.png'); // Catch-all for double extensions
    
  if (content !== newContent) {
    fs.writeFileSync(f, newContent);
    changed++;
  }
});

console.log(`Reverted image paths in ${changed} files.`);
