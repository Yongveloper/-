const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().trim().split(' ').map(Number);

console.log(input.sort((a, b) => a - b).join(' '));
