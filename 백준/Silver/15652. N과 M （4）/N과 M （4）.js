const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split(' ');

const [n, m] = input.map(Number);
let answer = '';
const result = [];

const dfs = (depth, start) => {
  if (depth === m) {
    answer += result.join(' ') + '\n';
    return;
  }
  for (let i = start; i <= n; i++) {
    result.push(i);
    dfs(depth + 1, i);
    result.pop();
  }
};

dfs(0, 1);

console.log(answer);
