const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const house = [];
const chicken = [];
const result = [];
let answer = Number.MAX_SAFE_INTEGER;
for (let i = 1; i <= n; i++) {
  const row = input[i].split(' ').map(Number);
  for (let j = 0; j < n; j++) {
    if (row[j] === 1) {
      house.push([i, j + 1]);
    } else if (row[j] === 2) {
      chicken.push([i, j + 1]);
    }
  }
}

const dfs = (depth, start) => {
  if (depth === m) {
    let sum = 0;
    for (const h of house) {
      let min = 1e9;
      for (const c of result) {
        min = Math.min(min, Math.abs(h[0] - c[0]) + Math.abs(h[1] - c[1]));
      }
      sum += min;
    }
    answer = Math.min(answer, sum);
    return;
  }

  for (let i = start; i < chicken.length; i++) {
    result.push(chicken[i]);
    dfs(depth + 1, i + 1);
    result.pop(chicken[i]);
  }
};

dfs(0, 0);

console.log(answer);
