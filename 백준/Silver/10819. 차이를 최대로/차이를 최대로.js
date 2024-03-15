const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

let answer = -Infinity;
let visited = new Array(n + 1).fill(false);
const result = [];

const dfs = (depth) => {
  if (result.length === n) {
    let total = 0;
    for (let i = 1; i < n; i++) {
      total += Math.abs(result[i] - result[i - 1]);
    }
    answer = Math.max(answer, total);
    return;
  }

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    result.push(arr[i]);
    dfs(depth + 1);
    visited[i] = false;
    result.pop();
  }
};

dfs(0);
console.log(answer);
