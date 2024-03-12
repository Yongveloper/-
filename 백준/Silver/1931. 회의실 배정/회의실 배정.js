const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const arr = input.slice(1).map((item) => item.split(' ').map(Number));

arr.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
});

const result = [arr[0]];

for (let i = 1; i < arr.length; i++) {
  if (result.at(-1)[1] <= arr[i][0]) {
    result.push(arr[i]);
  }
}

console.log(result.length);
