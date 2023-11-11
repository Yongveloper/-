const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1).map((item) => item.split('').map(Number));
const result = [];
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];
let count = 0;

const dfs = (x, y) => {
  if (x < 0 || x >= n || y < 0 || y >= n) {
    return false;
  }

  if (arr[x][y] === 0) {
    return false;
  }

  arr[x][y] = 0;
  count++;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    dfs(nx, ny);
  }

  return true;
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (dfs(i, j)) {
      result.push(count);
      count = 0;
    }
  }
}

result.sort((a, b) => a - b);

console.log(result.length + '\n' + result.join('\n'));
