const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim();

let num = Number(input);
let sum = 0;
let curr = 0;

while (sum <= num) {
  curr++;
  sum += curr;
}

console.log(curr - 1);
