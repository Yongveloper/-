const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split(' ');

let [num1, num2] = input;
let answer = 1;

while (+num1 < +num2) {
  num2 = String(num2);
  if (num2[num2.length - 1] == 1) {
    num2 = num2.substring(0, num2.length - 1);
  } else {
    num2 /= 2;
  }
  answer++;
}

console.log(num1 > num2 ? -1 : answer);
