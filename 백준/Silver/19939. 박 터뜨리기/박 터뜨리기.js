const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split(' ').map(Number);

let [n, k] = input;

let sum = 0; // 1부터 k까지의 합
for (let i = 1; i < k + 1; i++) {
  sum += i;
}

if (sum > n) {
  // 공의 개수가 부족한 경우
  return console.log(-1);
}
// 공의 개수가 충분한 경우
n -= sum;
if (n % k === 0) {
  console.log(k - 1); // k개에 각각 1씩 더하기
} else {
  console.log(k);
}
