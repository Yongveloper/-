const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
arr.sort((a, b) => a - b);
const result = [];
const visited = new Array(n).fill(false);
let answer = '';

function dfs(depth) {
  if (depth === m) {
    answer += result.join(' ') + '\n';
    return;
  }
  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    result.push(arr[i]);
    dfs(depth + 1);
    result.pop();
    visited[i] = false;
  }
}

dfs(0);

console.log(answer);
