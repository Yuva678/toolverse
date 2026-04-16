const fs = require('fs');
const path = require('path');

const walk = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory() && !file.includes('node_modules') && !file.includes('.git') && !file.includes('.next')) {
      results = results.concat(walk(file));
    } else if (
        file.endsWith('.js') || 
        file.endsWith('.jsx') || 
        file.endsWith('.html') || 
        file.endsWith('.json') || 
        file.endsWith('.txt') || 
        file.endsWith('.xml') || 
        file.endsWith('.md') ||
        file.endsWith('.mjs')
    ) {
      if (stat.isFile()) {
          results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./');
let count = 0;
files.forEach(f => {
  if (f.includes('package-lock.json')) return; // skip package-lock
  
  let content = fs.readFileSync(f, 'utf8');
  let origContent = content;
  
  // Handle various cases
  content = content.replace(/toolverse\.io/g, 'toolvexa.com')
                   .replace(/toolverse\.com/g, 'toolvexa.com')
                   .replace(/ToolVerse/g, 'ToolVexa')
                   .replace(/Toolverse/g, 'Toolvexa')
                   .replace(/toolverse/g, 'toolvexa')
                   .replace(/TOOLVERSE/g, 'TOOLVEXA');
                   
  if (content !== origContent) {
    fs.writeFileSync(f, content, 'utf8');
    console.log('Updated:', f);
    count++;
  }
});

console.log(`\nTotal files updated: ${count}`);
