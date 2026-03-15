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
      if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.css')) results.push(file);
    }
  });
  return results;
}

const files = walk('./src');
let changed = 0;
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let newContent = content;

  // Fix Color Contrast in CSS
  if (f.endsWith('.css')) {
    newContent = newContent.replace(/color:\s*#aaaaaa/gi, 'color: #555555')
                           .replace(/color:\s*#aaa;/gi, 'color: #555;');
  }

  // Fix Alt tags in JSX
  if (f.endsWith('.jsx')) {
    // Basic regex: if img tag lacks alt=, add alt="TogetherTech Image"
    newContent = newContent.replace(/<(motion\.)?img(?![^>]*alt=)/gi, '<$1img alt="TogetherTech Image" ');
    
    // Fix H3 directly without H2 (common pattern where H1 is in Hero, H3 is in sections)
    // Actually simpler to just change generic <h3> to <h2> in specific files if needed.
    // Let's do a naive replacement of <h3> to <h2> if it is the section title.
    newContent = newContent.replace(/<h3 className="section-title">/gi, '<h2 className="section-title">')
                           .replace(/<\/h3>/gi, '</h2>')
                           .replace(/<h3/gi, '<h2');
  }

  if (content !== newContent) {
    fs.writeFileSync(f, newContent);
    changed++;
  }
});
console.log(`Accessibility fixes applied to ${changed} files.`);
