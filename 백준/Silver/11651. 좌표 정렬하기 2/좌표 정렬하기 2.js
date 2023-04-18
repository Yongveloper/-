const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = input.shift();
const arr = input.map((item) => item.split(' ').map(Number));

arr.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});

let answer = '';

for (const x of arr) {
  answer += x.join(' ') + '\n';
}

console.log(answer);
