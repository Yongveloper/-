const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split(' ').map(Number);

let [num1, num2] = input;
let answer = 1;

while (num1 < num2) {
  if (num2 % 10 === 1) {
    num2 = parseInt(num2 / 10, 10);
  } else {
    num2 /= 2;
  }
  answer++;
}

console.log(num1 > num2 ? -1 : answer);
