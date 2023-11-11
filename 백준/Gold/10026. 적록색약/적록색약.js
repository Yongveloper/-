const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = Number(input[0]);
const graph = input.slice(1).map((item) => item.split(''));
let answer = '';
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const dfs = (graph, x, y, target) => {
  if (x < 0 || x >= n || y < 0 || y >= n) {
    return false;
  }

  if (graph[x][y] === 'X') {
    return false;
  }

  if (graph[x][y] !== target) {
    return false;
  }

  graph[x][y] = 'X';

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    dfs(graph, nx, ny, target);
  }

  return true;
};

let count = 0;
const newGraph = graph.map((item) => [...item]);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (dfs(newGraph, i, j, newGraph[i][j])) {
      count++;
    }
  }
}

answer += count + ' ';
count = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (graph[i][j] === 'R') {
      graph[i][j] = 'G';
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (dfs(graph, i, j, graph[i][j])) {
      count++;
    }
  }
}

answer += count;

console.log(answer);
