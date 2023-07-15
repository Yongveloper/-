const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = Number(input[0]);
const graph = [0, ...input.slice(1).map(Number)];
const visited = new Array(n + 1).fill(false);
const finished = new Array(n + 1).fill(false);
const result = [];

const dfs = (x) => {
  visited[x] = true;
  let y = graph[x];
  if (!visited[y]) {
    dfs(y);
  } else if (!finished[y]) {
    while (y !== x) {
      result.push(y);
      y = graph[y];
    }
    result.push(x);
  }
  finished[x] = true;
};

for (let i = 1; i <= n; i++) {
  if (!visited[i]) {
    dfs(i);
  }
}

result.sort((a, b) => a - b);
console.log(result.length + '\n' + result.join('\n'));
