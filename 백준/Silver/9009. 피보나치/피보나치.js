const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

// 피보나치 수들 계산
const pibo = [0, 1];
while (pibo[pibo.length - 1] < 1e9) {
  pibo.push(pibo[pibo.length - 1] + pibo[pibo.length - 2]);
}

const testCase = Number(input[0]);
for (let tc = 1; tc <= testCase; tc++) {
  let n = Number(input[tc]);
  const result = [];
  let i = pibo.length - 1; // 가장 큰 피보나치 수의 인덱스

  while (n > 0) {
    // n이 0이 될 때까지
    if (n >= pibo[i]) {
      // 가능한 큰 피보나치 수부터 빼기
      n -= pibo[i];
      result.push(pibo[i]);
    }
    i--;
  }

  let answer = '';
  for (let i = result.length - 1; i >= 0; i--) {
    answer += result[i] + ' ';
  }
  console.log(answer);
}
