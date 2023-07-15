const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = Number(input[0]);
const graph = input.slice(1).map((item) => item.split(''));
const visited = [];
for (const x of graph) {
  visited.push([...x]);
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const result = {
  R: 0,
  G: 0,
  B: 0,
};

const dfs = (x, y, target) => {
  if (x < 0 || x >= n || y < 0 || y >= n) {
    return false;
  }
  if (visited[x][y] === 'A') {
    return false;
  }
  if (graph[x][y] !== target) {
    return false;
  }

  visited[x][y] = 'A';
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    dfs(nx, ny, target);
  }
  return true;
};

let answer = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (dfs(i, j, graph[i][j])) {
      answer++;
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    visited[i][j] = graph[i][j];
    if (graph[i][j] === 'R') {
      graph[i][j] = 'G';
    }
  }
}

let answer2 = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (dfs(i, j, graph[i][j])) {
      answer2++;
    }
  }
}

console.log(answer + ' ' + answer2);
