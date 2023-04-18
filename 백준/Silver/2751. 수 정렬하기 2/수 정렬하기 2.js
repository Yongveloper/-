const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().trim().split('\n').map(Number);
input.shift();
console.log(input.sort((a, b) => a - b).join('\n'));
