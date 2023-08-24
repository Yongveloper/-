const fs = require('fs');
// 백준 제출 할 때 주석 제거
const readFileSyncAddress = '/dev/stdin';


let input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');

// 인풋 처리
input = Number(input[0]);
const memo = new Array(input).fill(0);

memo[1] = 1;
memo[2] = 2;
memo[3] = 3;

for (let i = 4; i <= input; i++) {
    memo[i] = (memo[i - 1] + memo[i - 2]) % 15746;
}

console.log(memo[input]);