const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = Number(input[0]);
const graph = input.slice(1).map((item) => item.split('').map(Number));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let count = 0;
const dfs = (x, y) => {
  if (x < 0 || x >= n || y < 0 || y >= n) {
    return false;
  }

  if (graph[x][y] === 0) {
    return false;
  }

  graph[x][y] = 0;
  count++;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    dfs(nx, ny);
  }

  return true;
};

let connected = 0;
const counts = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (dfs(i, j)) {
      connected++;
      counts.push(count);
      count = 0;
    }
  }
}

console.log(connected + '\n' + counts.sort((a, b) => a - b).join('\n'));
