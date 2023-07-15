const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

let testCase = Number(input[0]);
let line = 1;

const dfs = (x, graph, visited, finished, result) => {
  visited[x] = true;
  let y = graph[x];
  if (!visited[y]) {
    dfs(y, graph, visited, finished, result);
  } else if (!finished[y]) {
    while (y !== x) {
      result.push(y);
      y = graph[y];
    }
    result.push(x);
  }
  finished[x] = true;
};

while (testCase--) {
  const n = Number(input[line]);
  const graph = [0, ...input[line + 1].split(' ').map(Number)];
  const visited = new Array(n + 1).fill(false);
  const finished = new Array(n + 1).fill(false);
  const result = [];

  for (let x = 1; x <= n; x++) {
    if (!visited[x]) {
      dfs(x, graph, visited, finished, result);
    }
  }

  line += 2;
  console.log(n - result.length);
}
