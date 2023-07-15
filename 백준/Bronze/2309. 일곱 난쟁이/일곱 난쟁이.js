const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const arr = input.map(Number).sort((a, b) => a - b);
const total = arr.reduce((acc, curr) => acc + curr, 0);
const selected = [];
let find = false;
for (let i = 0; i < arr.length; i++) {
  if (find) {
    break;
  }
  for (let j = i + 1; j < arr.length; j++) {
    const sum = arr[i] + arr[j];

    if (total - sum === 100) {
      selected.push(arr[i]);
      selected.push(arr[j]);
      find = true;
      break;
    }
  }
}

const answer = [];

for (const x of arr) {
  if (!selected.includes(x)) {
    answer.push(x);
  }
}

console.log(answer.join('\n'));
