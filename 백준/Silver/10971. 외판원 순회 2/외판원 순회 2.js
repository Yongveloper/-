const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = Number(input[0]);
const graph = input.slice(1).map((line) => line.split(' ').map(Number));
const visited = new Array(n).fill(false);
let min = 1e9;

function dfs(depth, start, cost) {
  if (depth === n - 1 && graph[start][0] !== 0) {
    min = Math.min(min, cost + graph[start][0]);
    return;
  }
  for (let i = 0; i < n; i++) {
    if (!visited[i] && graph[start][i] !== 0) {
      visited[i] = true;
      dfs(depth + 1, i, cost + graph[start][i]);
      visited[i] = false;
    }
  }
}
visited[0] = true;
dfs(0, 0, 0);

console.log(min);
