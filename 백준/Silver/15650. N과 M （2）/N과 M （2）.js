const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const [n, m] = input;
const arr = Array.from({ length: n }, (_, i) => i + 1);
const selected = [];

let answer = '';
function dfs(depth, start) {
  if (depth === m) {
    const result = [];
    for (const i of selected) {
      result.push(arr[i]);
    }
    for (const x of result) {
      answer += x + ' ';
    }
    answer += '\n';
    return;
  }
  for (let i = start; i < n; i++) {
    selected.push(i);
    dfs(depth + 1, i + 1);
    selected.pop();
  }
}
dfs(0, 0);
console.log(answer);
