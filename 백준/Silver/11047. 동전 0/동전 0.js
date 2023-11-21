const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

let [n, k] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(Number);

let answer = 0;

for (let i = n - 1; i >= 0; i--) {
  if (k === 0) {
    break;
  }
  if (arr[i] > k) continue;

  const div = Math.floor(k / arr[i]);

  answer += div;
  k -= arr[i] * div;
}

console.log(answer);
