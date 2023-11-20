const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [n, x] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let maxVisited = 0;
let count = 0;
let end = 0;
let sum = 0;

for (let start = 0; start < n; start++) {
  while (end - start < x && end < n) {
    sum += arr[end];
    end++;
  }

  if (sum > maxVisited) {
    maxVisited = sum;
    count = 1;
  } else if (sum === maxVisited) {
    count++;
  }

  sum -= arr[start];
}

if (maxVisited === 0) {
  console.log('SAD');
} else {
  console.log(maxVisited + '\n' + count);
}
