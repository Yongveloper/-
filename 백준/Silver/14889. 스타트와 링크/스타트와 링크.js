const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = Number(input[0]);
const arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(' ').map(Number));
}
let answer = Infinity;
const visited = new Array(n).fill(false);
const half = n / 2;
const dfs = (depth, start) => {
  if (depth === half) {
    const sTeam = [];
    const lTeam = [];
    let sSum = 0;
    let lSum = 0;

    for (let i = 0; i < n; i++) {
      if (visited[i]) {
        sTeam.push(i);
      } else {
        lTeam.push(i);
      }
    }

    for (let i = 0; i < half; i++) {
      for (let j = i + 1; j < half; j++) {
        sSum += arr[sTeam[i]][sTeam[j]] + arr[sTeam[j]][sTeam[i]];
        lSum += arr[lTeam[i]][lTeam[j]] + arr[lTeam[j]][lTeam[i]];
      }
    }

    answer = Math.min(answer, Math.abs(sSum - lSum));
    return;
  }

  for (let i = start; i < n; i++) {
    visited[i] = true;
    dfs(depth + 1, i + 1);
    visited[i] = false;
  }
};

dfs(0, 0);

console.log(answer);
