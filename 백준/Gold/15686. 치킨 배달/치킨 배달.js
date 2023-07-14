const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const chicken = [];
const house = [];
for (let i = 1; i <= n; i++) {
  const line = input[i].split(' ').map(Number);
  for (let j = 0; j < n; j++) {
    if (line[j] === 1) {
      house.push([i, j]);
    } else if (line[j] === 2) {
      chicken.push([i, j]);
    }
  }
}

const result = [];
let answer = 1e9;

const dfs = (depth, start) => {
  if (depth === m) {
    let sum = 0;
    for (const [hx, hy] of house) {
      let temp = 1e9;
      for (const [cx, cy] of result) {
        temp = Math.min(temp, Math.abs(hx - cx) + Math.abs(hy - cy));
      }
      sum += temp;
    }
    answer = Math.min(answer, sum);
    return;
  }

  for (let i = start; i < chicken.length; i++) {
    result.push(chicken[i]);
    dfs(depth + 1, i + 1);
    result.pop();
  }
};

dfs(0, 0);
console.log(answer);
