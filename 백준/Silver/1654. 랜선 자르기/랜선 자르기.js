const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [k, n] = input[0].split(' ').map(Number);
let arr = [];
for (let i = 1; i < input.length; i++) {
  arr.push(Number(input[i]));
}

let start = 1;
let end = Math.max(...arr);

// 각 길이에 대한 몫을 구해야 한다. (loop 하는 값이랑)
// 해당 값이 11이 되면 ok (이 중에서도 최댓값을 구하는 것!)
let result = 0;

while (start <= end) {
  const mid = Math.floor((start + end) / 2);
  let total = 0;
  for (const x of arr) {
    total += Math.floor(x / mid);
  }

  // 일단 total이 n과 같아야지 mid를 정답으로 쓸 수 있다.
  // 만약에 total이 n에 미치지 못한다면?
  // 자르는 길이가 너무 크기 때문이다.
  // 그러므로 자르는 길이를 줄일 수 있게 end를 줄인다.

  // total이 n보다 크거나 같다면
  // 큰 길이로 자를 수 있도록 해준다.
  // 이때 result에 값을 넣어주는 이유는 최대한 큰 크기로 n에 맞춰 자르는 상황을 봐야한다.

  if (total < n) {
    end = mid - 1;
  } else {
    start = mid + 1;
    result = Math.max(result, mid);
  }
}

console.log(result);
