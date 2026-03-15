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
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let newContent = content;

  if (f.includes('HeroSection.jsx') || f.includes('Header.jsx') || f.includes('TogetherTechLoader.jsx')) {
    // Only add width/height to above-the-fold, no lazy loading
    newContent = newContent.replace(/<(motion\.)?img(?![^>]*width=)/g, '<$1img width="800" height="600"');
  } else {
    // Add lazy loading + width/height to the rest
    newContent = newContent.replace(/<(motion\.)?img(?![^>]*loading=)/g, '<$1img loading="lazy" width="800" height="600"');
  }

  if (content !== newContent) {
    fs.writeFileSync(f, newContent);
    console.log(`Updated images in ${f}`);
  }
});
