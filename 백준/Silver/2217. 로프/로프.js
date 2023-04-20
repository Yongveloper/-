const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
let answer = 0;
const [n, ...arr] = input;

arr.sort((a, b) => a - b);

for (let i = 0; i < n; i++) {
  answer = Math.max(answer, arr[i] * (n - i));
}

console.log(answer);
