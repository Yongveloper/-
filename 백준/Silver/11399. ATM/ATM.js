const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const arr = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let sum = 0;
let answer = 0;

arr.forEach((num) => {
  sum += num;
  answer += sum;
});

console.log(answer);
