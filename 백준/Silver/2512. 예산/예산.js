const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const arr = input[1].split(' ').map(Number);
const m = Number(input[2]);

let start = 1;
let end = Math.max(...arr);

let result = 0;

while (start <= end) {
  const mid = Math.floor((start + end) / 2);
  let total = 0;
  for (const x of arr) {
    total += Math.min(x, mid);
  }
  if (total <= m) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(result);
