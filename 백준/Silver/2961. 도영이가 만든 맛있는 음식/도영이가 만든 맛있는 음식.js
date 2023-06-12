const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1).map((line) => line.split(' ').map(Number));
const visited = new Array(n).fill(false);
let min = 1e9;
const result = [];

function dfs(depth, start) {
  if (depth >= 1) {
    let totalX = 1;
    let totalY = 0;
    for (const [x, y] of result) {
      totalX *= x;
      totalY += y;
    }
    min = Math.min(min, Math.abs(totalX - totalY));
  }
  for (let i = start; i < n; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    result.push(arr[i]);
    dfs(depth + 1, i + 1);
    visited[i] = false;
    result.pop();
  }
}

dfs(0, 0);

console.log(min);
