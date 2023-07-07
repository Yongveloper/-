const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const graph = Array.from({ length: n + 1 }, () => []);
let answer = '';
let visited = [];
let distance = [];

for (let i = 1; i < n; i++) {
  const [x, y, cost] = input[i].split(' ').map(Number);
  graph[x].push([y, cost]);
  graph[y].push([x, cost]);
}

function dfs(x, dist) {
  if (visited[x]) return;
  visited[x] = true;
  distance[x] = dist;
  for (const [y, cost] of graph[x]) {
    dfs(y, dist + cost);
  }
}

for (let i = 0; i < m; i++) {
  const [x, y] = input[n + i].split(' ').map(Number);
  visited = new Array(n + 1).fill(false);
  distance = new Array(n + 1).fill(-1);
  dfs(x, 0);
  answer += distance[y] + '\n';
}

console.log(answer);
