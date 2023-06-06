const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = Number(input[0]);
const l = input.slice(1).map((line) => line.split(' ').map(Number));

const visit = new Array(n).fill(0);
let m = 1e9;

function dfs(depth, start, cost) {
  if (depth === n - 1 && l[start][0] !== 0) {
    m = Math.min(m, cost + l[start][0]);
    return;
  }
  for (let i = 0; i < n; i++) {
    if (!visit[i] && l[start][i] !== 0) {
      visit[i] = 1;
      dfs(depth + 1, i, cost + l[start][i]);
      visit[i] = 0;
    }
  }
}

visit[0] = 1;
dfs(0, 0, 0);

console.log(m);
