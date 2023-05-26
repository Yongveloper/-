const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split(' ').map(Number);
const [n, m] = input;
const array = Array.from({ length: m }, () => 0);
const check = Array.from({ length: n }, () => false);
let answer = '';

function dfs(L) {
  if (L === m) {
    answer += `${array.join(' ')}\n`;
    return;
  }
  for (let i = 1; i <= n; i++) {
    if (check[i]) continue;
    array[L] = i;
    check[i] = true;
    dfs(L + 1);
    check[i] = false;
  }
}
dfs(0);

console.log(answer.trim());
