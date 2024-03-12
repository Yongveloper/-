const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let start = 0;
let end = Math.max(...arr);
let answer = 0;

while (start <= end) {
  let mid = Math.ceil((start + end) / 2);
  let total = 0;
  for (const x of arr) {
    if (x >= mid) {
      total += x - mid;
    }
  }

  if (total >= m) {
    start = mid + 1;
    answer = mid;
  } else {
    end = mid - 1;
  }
}

console.log(answer);
