const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().split('\n');

const n = +input[0];
const arr = [];

for (let i = 1; i < input.length; i++) {
  arr.push(input[i].split(' ').map((num) => +num));
}

const answer = Array.from({ length: n }, () => 1);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (arr[j][0] > arr[i][0] && arr[j][1] > arr[i][1]) {
      answer[i]++;
    }
  }
}

console.log(answer.join(' '));
