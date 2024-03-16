const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const graph = Array.from({ length: n + 1 }, () => []);
let visited = [];
let answer = '';

for (let i = 1; i < n; i++) {
  const [a, b, c] = input[i].split(' ').map(Number);
  graph[a].push([b, c]);
  graph[b].push([a, c]);
}

const dfs = (node, target, total) => {
  if (visited[node]) return;

  if (node === target) {
    answer += total + '\n';
    return;
  }

  visited[node] = true;

  for (const [a, b] of graph[node]) {
    dfs(a, target, total + b);
  }
};

for (let i = n; i < n + m; i++) {
  const [start, target] = input[i].split(' ').map(Number);
  dfs(start, target, 0);
  visited = Array(n + 1).fill(false);
}

console.log(answer);
