const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const arr = input[1].split(' ').map(Number);
const m = Number(input[2]);

let start = 1; // 이진 탐색을 위한 시작점(start)과 끝점(end) 설정
let end = Math.max(...arr);

let result = 0;

while (start <= end) {
  // 이진 탐색 수행(반복문)
  const mid = Math.floor((start + end) / 2); // 현재의 중간점(상한액)
  let total = 0; // 배정된 예산의 총액 계산
  for (x of arr) {
    // 각 지방에서 요쳥한 예산을 하나씩 확인하며
    total += Math.min(x, mid);
  }
  if (total <= m) {
    // 조건을 만족한다면, 상한액(최대화가 목표)을 증가시키기
    result = mid;
    start = mid + 1;
  } else {
    // 조건을 만족하지 못한다면, 상한액을 감소시키기
    end = mid - 1;
  }
}

console.log(result);
