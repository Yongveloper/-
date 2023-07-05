const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [n, c, ...arr] = input;
const newArr = arr.map((item) => item.split(' ').map(Number));
let answer = 0;
const visited = new Array(n + 1).fill(false);
const graph = Array.from({ length: Number(n) + 1 }, () => []);
for (const [x, y] of newArr) {
  graph[x].push(y);
  graph[y].push(x);
}

function dfs(v) {
  visited[v] = true;
  answer++;

  for (const i of graph[v]) {
    if (!visited[i]) {
      dfs(i);
    }
  }
}
dfs(1);

console.log(answer - 1);
