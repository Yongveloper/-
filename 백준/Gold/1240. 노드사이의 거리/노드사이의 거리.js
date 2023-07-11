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

function dfs(v, target, sum) {
  if (visited[v]) return;

  if (v === target) {
    answer += sum + '\n';
    return;
  }

  visited[v] = true;

  for (const [a, b] of graph[v]) {
    dfs(a, target, sum + b);
  }
}

for (let i = n; i < n + m; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  dfs(a, b, 0);
  visited = new Array(n + 1).fill(false);
}

console.log(answer);
