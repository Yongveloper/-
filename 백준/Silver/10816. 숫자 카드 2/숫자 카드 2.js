const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const arr1 = input[1].split(' ').map(Number);
arr1.sort((a, b) => a - b);
const arr2 = input[3].split(' ').map(Number);
let answer = '';

function lowerBound(arr, target, start, end) {
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] >= target) {
      end = mid; // 최대한 왼쪽으로 이동하기
    } else {
      start = mid + 1;
    }
  }
  return end;
}

// 정렬된 순서를 유지하면서 배열에 삽입할 가장 오른쪽 인덱스를 반환
function upperBound(arr, target, start, end) {
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] > target) {
      end = mid;
    } else {
      start = mid + 1; // 최대한 오른쪽으로 이동하기
    }
  }
  return end;
}

// 값이 [leftValue, rightValue]인 데이터의 개수를 반환하는 함수
function countByRange(arr, leftValue, rightValue) {
  // 유의: lowerBound와 upperBound는 end 변수의 값을 배열의 길이로 설정
  const rightIndex = upperBound(arr, rightValue, 0, arr.length);
  const leftIndex = lowerBound(arr, leftValue, 0, arr.length);

  return rightIndex - leftIndex;
}

for (const x of arr2) {
  answer += countByRange(arr1, x, x) + ' ';
}

console.log(answer);
