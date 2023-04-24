const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim();
let n = Number(input);
let count = 0;

while (true) {
  if (n % 5 === 0) {
    count = n / 5 + count;
    break;
  }
  if (n < 0) {
    count = -1;
    break;
  }

  count++;
  n -= 3;
}

console.log(count);
