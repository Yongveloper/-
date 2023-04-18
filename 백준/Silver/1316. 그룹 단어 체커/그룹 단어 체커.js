const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = +input[0];
let count = 0;

function check(data) {
  const setData = new Set(data[0]);
  for (let i = 0; i < data.length - 1; i++) {
    if (data[i] !== data[i + 1]) {
      if (setData.has(data[i + 1])) {
        return false;
      } else {
        setData.add(data[i + 1]);
      }
    }
  }
  return true;
}

for (let i = 1; i <= n; i++) {
  const data = input[i];
  if (check(data)) {
    count++;
  }
}

console.log(count);
