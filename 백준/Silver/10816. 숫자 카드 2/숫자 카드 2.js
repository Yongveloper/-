const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const arr1 = input[1].split(' ').map(Number);
const arr2 = input[3].split(' ').map(Number);
const map = new Map();
let answer = '';

for (const x of arr1) {
  map.set(x, map.get(x) + 1 || 1);
}

for (const x of arr2) {
  answer += `${map.get(x) || 0} `;
}

console.log(answer);
