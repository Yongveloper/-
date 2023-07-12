const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [n, ...arr] = input;
let graph = arr.map((item) => item.split(' ').map(Number));
let maxHeight = 0;
for (const x of graph) {
  maxHeight = Math.max(maxHeight, ...x);
}

function dfs(graph, x, y, target) {
  if (x <= -1 || x >= n || y <= -1 || y >= n) {
    return false;
  }

  if (graph[x][y] <= target) {
    return false;
  }

  graph[x][y] = 0;
  dfs(graph, x - 1, y, target);
  dfs(graph, x, y - 1, target);
  dfs(graph, x + 1, y, target);
  dfs(graph, x, y + 1, target);
  return true;
}

let answer = 0;
let count = 0;
while (maxHeight > -1) {
  const newGraph = graph.map((item) => [...item]);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(newGraph, i, j, maxHeight)) {
        count++;
      }
    }
  }

  answer = Math.max(answer, count);
  count = 0;

  maxHeight--;
}

console.log(answer);
