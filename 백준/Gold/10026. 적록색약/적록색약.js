const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = Number(input[0]);
const graph = input.slice(1).map((item) => item.split(''));
const visited = Array.from({ length: n }, () => new Array(n).fill(false));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const dfs = (x, y) => {
  if (visited[x][y]) return false;
  visited[x][y] = true;
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
    if (graph[x][y] === graph[nx][ny]) {
      dfs(nx, ny);
    }
  }
  return true;
};

let answer = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (dfs(i, j)) {
      answer++;
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    visited[i][j] = false;
    if (graph[i][j] === 'R') {
      graph[i][j] = 'G';
    }
  }
}

let answer2 = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (dfs(i, j)) {
      answer2++;
    }
  }
}

console.log(answer + ' ' + answer2);
