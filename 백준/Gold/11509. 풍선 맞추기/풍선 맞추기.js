const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

let [n, h] = input;
h = h.split(' ').map(Number);
let count = 0;
let arr = new Array(1000001).fill(0);

for (const x of h) {
  if (arr[x] === 0) {
    count++;
    arr[x - 1]++;
  } else {
    arr[x]--;
    arr[x - 1]++;
  }
}

console.log(count);
