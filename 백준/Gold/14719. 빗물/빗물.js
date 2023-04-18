const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().split('\n');

const [[height, width], arr] = input.map((item) => item.split(' ').map(Number));

let count = 0;

let lMax = Number.MIN_SAFE_INTEGER;
let rMax = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;

for (let i = 1; i < width - 1; i++) {
  for (let j = i - 1; j >= 0; j--) {
    lMax = Math.max(lMax, arr[j]);
  }
  for (let j = i + 1; j < width; j++) {
    rMax = Math.max(rMax, arr[j]);
  }

  min = Math.min(lMax, rMax);

  const diff = min - arr[i];
  if (diff > 0) {
    count += diff;
  }

  lMax = Number.MIN_SAFE_INTEGER;
  rMax = Number.MIN_SAFE_INTEGER;
}

console.log(count);
