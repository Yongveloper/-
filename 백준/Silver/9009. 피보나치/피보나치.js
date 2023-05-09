const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

let testCase = Number(input[0]);
let answer = '';
const pibo = [0, 1];
while (pibo[pibo.length - 1] < 1e9) {
  pibo.push(pibo[pibo.length - 1] + pibo[pibo.length - 2]);
}

for (let tc = 1; tc <= testCase; tc++) {
  let num = Number(input[tc]);
  const arr = [];
  for (let i = pibo.length; num > 0; i--) {
    if (num >= pibo[i]) {
      num -= pibo[i];
      arr.push(pibo[i]);
    }
  }
  answer += arr.reverse().join(' ') + '\n';
}

console.log(answer.trim());
