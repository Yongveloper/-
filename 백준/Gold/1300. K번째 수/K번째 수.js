const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [n, k] = input.map(Number);

let start = 1; // 배열에서 존재할 수 있는 가장 작은 값
let end = 10 ** 10; // 배열에서 존재할 수 있는 가장 큰 값

let result = 0;
while (start <= end) {
  // 이진 탐색 수행(반복적)
  const mid = Math.floor((start + end) / 2); // 현재의 중간점
  let total = 0; // mid보다 작거나 같은 데이터의 개수
  for (let i = 1; i <= n; i++) {
    // 각 행마다 계산
    total += Math.min(Math.floor(mid / i), n);
  }
  if (total >= k) {
    // mid보다 작거나 같은 데이터의 개수가 k 이상이라면
    result = mid;
    end = mid - 1;
  } else {
    // mid보다 작거나 같은 데이터의 개수가 k 미만이라면
    start = mid + 1;
  }
}

console.log(result);
