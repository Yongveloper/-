const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim();

const n = Number(input);
const arr = new Array(n).fill(0);
const visited = new Array(n).fill(false);
let answer = '';
function dfs(depth) {
  if (n === depth) {
    answer += `${arr.join(' ')}\n`;
    return;
  }
  for (let i = 1; i <= n; i++) {
    if (visited[i]) continue;
    arr[depth] = i;
    visited[i] = true;
    dfs(depth + 1);
    visited[i] = false;
  }
}

dfs(0);

console.log(answer);
