const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const testCase = Number(input[0]);
let line = 1;
for (let tc = 0; tc < testCase; tc++) {
  const n = Number(input[line]);
  const arr = [];
  for (let i = line + 1; i <= line + n; i++) {
    const data = input[i].split(' ').map(Number);
    arr.push(data);
  }

  arr.sort((a, b) => a[0] - b[0]);
  let count = 0;
  let min = Infinity;
  for (const [x, y] of arr) {
    if (y < min) {
      min = y;
      count++;
    }
  }

  console.log(count);
  line += n + 1;
}
