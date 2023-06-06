const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split(' ').map(Number);
const [n, m] = input;
const arr = [];
let answer = '';

function dfs(depth) {
  if (depth === m) {
    answer += arr.join(' ') + '\n';
    return;
  }

  for (let i = 1; i <= n; i++) {
    arr.push(i);
    dfs(depth + 1);
    arr.pop();
  }
}
dfs(0);

console.log(answer);
