const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const [n, m] = input;
let answer = '';
const arr = [];
const visited = new Array(n).fill(false);

function dfs(depth) {
  if (depth === m) {
    answer += arr.join(' ') + '\n';
    return;
  }
  for (let i = 1; i <= n; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    arr.push(i);
    dfs(depth + 1);
    visited[i] = false;
    arr.pop(i);
  }
}

dfs(0);

console.log(answer);
