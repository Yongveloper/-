const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
const arr = input[1].split(' ').map((item) => +item);

const max = Math.max(...arr);
const newScore = arr
  .map((num) => (num / max) * 100)
  .reduce((prev, curr) => prev + curr);
console.log(newScore / arr.length);
