const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().split(' ').map(Number);
const [n, m] = input;
let answer = '';
const array = Array.from({ length: m }, () => 0);

function dfs(L, start) {
  if (L === m) {
    answer += `${array.join(' ')}\n`;
    return;
  }
  for (let i = start; i <= n; i++) {
    array[L] = i;
    dfs(L + 1, i);
  }
}
dfs(0, 1);

console.log(answer.trim());
