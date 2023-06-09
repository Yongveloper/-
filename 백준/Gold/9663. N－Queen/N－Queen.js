const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim();

const n = Number(input);
const queens = [];
let count = 0;

function possible(x, y) {
  for (const [a, b] of queens) {
    if (x === a || b === y) return false;
    if (Math.abs(x - a) === Math.abs(y - b)) return false;
  }
  return true;
}

function dfs(row) {
  if (row === n) {
    count++;
    return;
  }
  for (let i = 0; i < n; i++) {
    if (!possible(row, i)) continue;
    queens.push([row, i]);
    dfs(row + 1);
    queens.pop();
  }
}
dfs(0);

console.log(count);
