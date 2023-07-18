const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const visited = new Array(n).fill(false);
const result = [];
let answer = 0;

const dfs = (depth) => {
  if (depth === n) {
    let sum = 0;
    for (let i = 0; i < n - 1; i++) {
      sum += Math.abs(result[i] - result[i + 1]);
    }
    answer = Math.max(answer, sum);
    return;
  }

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    result.push(arr[i]);
    visited[i] = true;
    dfs(depth + 1);
    result.pop();
    visited[i] = false;
  }
};

dfs(0);
console.log(answer);
