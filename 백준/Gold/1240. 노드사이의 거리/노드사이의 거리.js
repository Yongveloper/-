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
  for (const [a, b] of graph[node]) {
    if (visited[a]) continue;
    visited[a] = true;
    if (a === target) {
      answer += `${total + b} \n`;
      return;
    }

    dfs(a, target, total + b);
  }
};

for (let i = n; i < n + m; i++) {
  const [a, b] = input[i].split(' ').map(Number);

  visited = new Array(n + 1).fill(false);
  visited[a] = true;
  dfs(a, b, 0);
}

console.log(answer);
