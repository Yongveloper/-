const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const graph = input.slice(1).map((item) => item.split(' ').map(Number));
let temp = [];
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let answer = 0;

// 안전영역 계산
const getScore = () => {
  let score = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (temp[i][j] === 0) {
        score++;
      }
    }
  }
  return score;
};

// 바이러스 전파 (최초 실행은 발견 후)
const virus = (x, y) => {
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
    if (temp[nx][ny] === 0) {
      temp[nx][ny] = 2;
      virus(nx, ny);
    }
  }
};

const dfs = (count) => {
  if (count === 3) {
    temp = graph.map((item) => [...item]);
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (temp[i][j] === 2) {
          virus(i, j);
        }
      }
    }
    answer = Math.max(answer, getScore());
    return;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] === 0) {
        graph[i][j] = 1;
        dfs(count + 1);
        graph[i][j] = 0;
      }
    }
  }
};
dfs(0);

console.log(answer);
