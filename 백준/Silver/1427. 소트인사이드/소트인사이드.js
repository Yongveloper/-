const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().trim();

console.log(
  input
    .split('')
    .sort((a, b) => b - a)
    .join('')
);
