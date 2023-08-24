const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

let testCases = Number(input[0]);
let line = 1;
const dp = new Array(100).fill(0);
dp[0] = 0;
dp[1] = 1;

for (let i = 2; i <= 40; i++) {
  dp[i] = dp[i - 2] + dp[i - 1];
}

while (testCases--) {
  const n = Number(input[line]);
  if (n === 0) {
    console.log(1, 0);
  } else {
    console.log(dp[n - 1], dp[n]);
  }

  line++;
}
