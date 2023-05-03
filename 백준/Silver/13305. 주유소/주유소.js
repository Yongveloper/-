const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const distances = input[1].split(' ');
const prices = input[2].split(' ');
const arr = distances.map((item, i) => [+prices[i], +item]);

let min = Infinity;
let sum = 0;

for (const [price, distance] of arr) {
  if (price <= min) {
    sum += price * distance;
    min = price;
  } else {
    sum += min * distance;
  }
}

console.log(sum);
