const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

let [size, ...arr] = input;
let [n, k] = size.split(' ').map((num) => +num);
arr = arr.map((num) => +num).sort((a, b) => b - a);

let answer = 0;
arr.forEach((num) => {
  answer += Math.floor(k / num);
  k = k % num;
});

console.log(answer);
