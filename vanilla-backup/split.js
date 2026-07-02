const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'abule-tech.html');
let html = fs.readFileSync(filePath, 'utf-8');

// Extract CSS
const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
if (styleMatch) {
    fs.writeFileSync(path.join(__dirname, 'styles.css'), styleMatch[1].trim() + '\n');
    html = html.replace(/<style>[\s\S]*?<\/style>/, '<link rel="stylesheet" href="./styles.css">');
}

// Extract JS
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
if (scriptMatch) {
    fs.writeFileSync(path.join(__dirname, 'app.js'), scriptMatch[1].trim() + '\n');
    html = html.replace(/<script>[\s\S]*?<\/script>/, '<script src="./app.js" defer></script>');
}

fs.writeFileSync(filePath, html);
console.log('Split completed successfully.');
