const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
arr.sort((a, b) => a - b);
const result = [];
let answer = '';

function dfs(depth) {
  if (depth === m) {
    answer += result.join(' ') + '\n';
    return;
  }
  for (let i = 0; i < n; i++) {
    result.push(arr[i]);
    dfs(depth + 1, i);
    result.pop();
  }
}

dfs(0);

console.log(answer);
