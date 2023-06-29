const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
const m = +input[0].split(' ')[1];
const numbers = input[1].split(' ');

let answer = 0;
let min = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < numbers.length; i++) {
  for (let j = i + 1; j < numbers.length; j++) {
    for (let k = j + 1; k < numbers.length; k++) {
      const sum = +numbers[i] + +numbers[j] + +numbers[k];
      const sub = m - sum;
      if (sub < min && sum <= m) {
        min = sub;
        answer = sum;
      }
    }
  }
}

console.log(answer);
