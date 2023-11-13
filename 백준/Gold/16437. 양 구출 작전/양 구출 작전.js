const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = Number(input[0]);
const tree = Array.from({ length: n + 1 }, () => []);
const infos = [[], [0, 0]];
for (let i = 1; i < n; i++) {
  const [t, a, p] = input[i].split(' ');

  tree[Number(p)].push(i + 1);
  infos.push([t, Number(a)]);
}

function dfs(curIndex) {
  let sum = 0;
  for (const x of tree[curIndex]) {
    sum += dfs(x);
  }

  if (infos[curIndex][0] === 'W') {
    sum -= infos[curIndex][1];
    if (sum < 0) {
      sum = 0;
    }
  } else {
    sum += infos[curIndex][1];
  }

  return sum;
}

console.log(dfs(1));
