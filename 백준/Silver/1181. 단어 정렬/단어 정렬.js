const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = input.shift();
const arr = [...new Set(input)];
arr.sort((a, b) => {
  if (a.length !== b.length) {
    return a.length - b.length;
  } else {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
  }
});

console.log(arr.join('\n'));
