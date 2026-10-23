const fs = require('fs');
const path = require('path');

// 1. Update src/data/products.js
const productsPath = path.join(__dirname, '../src/data/products.js');
let productsContent = fs.readFileSync(productsPath, 'utf8');

const origLen = productsContent.length;
// Replace .png"), .jpeg"), .jpg") with .webp")
productsContent = productsContent
  .replace(/\.png"\)/g, '.webp")')
  .replace(/\.jpeg"\)/g, '.webp")')
  .replace(/\.jpg"\)/g, '.webp")')
  .replace(/\.PNG"\)/g, '.webp")');

fs.writeFileSync(productsPath, productsContent, 'utf8');
console.log('Updated src/data/products.js references to .webp');

// 2. Update src/data/blogs.js
const blogsPath = path.join(__dirname, '../src/data/blogs.js');
let blogsContent = fs.readFileSync(blogsPath, 'utf8');
blogsContent = blogsContent
  .replace(/\.png'/g, ".webp'")
  .replace(/\.png"/g, '.webp"');
fs.writeFileSync(blogsPath, blogsContent, 'utf8');
console.log('Updated src/data/blogs.js references to .webp');

// 3. Update src/components/SignatureShowcase.jsx
const sigPath = path.join(__dirname, '../src/components/SignatureShowcase.jsx');
let sigContent = fs.readFileSync(sigPath, 'utf8');
sigContent = sigContent
  .replace(/\.png'/g, ".webp'")
  .replace(/\.png"/g, '.webp"');
fs.writeFileSync(sigPath, sigContent, 'utf8');
console.log('Updated src/components/SignatureShowcase.jsx references to .webp');
