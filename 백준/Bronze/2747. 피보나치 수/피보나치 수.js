const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = Number(input[0]);

let d = new Array(100).fill(0);

const fibo = (x) => {
  if (x === 1 || x === 2) {
    return 1;
  }

  if (d[x] !== 0) {
    return d[x];
  }

  d[x] = fibo(x - 1) + fibo(x - 2);
  return d[x];
};

console.log(fibo(n));
