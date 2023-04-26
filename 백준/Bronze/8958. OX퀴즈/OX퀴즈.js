const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
const arr = [];

for (let i = 1; i < input.length; i++) {
  arr.push(input[i]);
}

arr.forEach((item) => {
  let sum = 0;
  let count = 0;
  for (const x of item) {
    if (x === 'O') {
      count++;
      sum += count;
    } else {
      count = 0;
    }
  }
  console.log(sum);
});
