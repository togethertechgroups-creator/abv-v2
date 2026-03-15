const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.js') || file.endsWith('.jsx')) results.push(file);
    }
  });
  return results;
}

const files = walk('./src');
let changedCount = 0;
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let newContent = content;

  // Replace import ... from '...png'
  // Or src="...png"
  // Safe way: replace .png' or .png" or .jpg' or .jpg"
  
  if (!f.includes('StrategicMap.jsx')) { // Skip map tiles
    newContent = newContent.replace(/\.png(['"`])/gi, '.webp$1')
                           .replace(/\.jpg(['"`])/gi, '.webp$1')
                           .replace(/\.jpeg(['"`])/gi, '.webp$1');
  }

  if (content !== newContent) {
    fs.writeFileSync(f, newContent);
    changedCount++;
  }
});
console.log(`Updated extensions in ${changedCount} src files.`);
