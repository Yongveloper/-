const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const arr = input.map(Number).sort((a, b) => a - b);
const total = arr.reduce((acc, curr) => acc + curr, 0);
let find = false;
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    const sum = arr[i] + arr[j];
    if (total - sum === 100) {
      arr.splice(j, 1);
      arr.splice(i, 1);
      find = true;
      break;
    }
  }
  if (find) {
    break;
  }
}

console.log(arr.join('\n'));
