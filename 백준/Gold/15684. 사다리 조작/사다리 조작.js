const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

let [width, m, height] = input[0].split(' ').map(Number);
let map = Array.from({ length: height + 1 }, () => Array(width + 1).fill(0));
let answer = 0;
let isFinish = false;

for (let i = 1; i <= m; i++) {
  // a 높이에서 b번과 b + 1번 세로선을 연결
  const [a, b] = input[i].split(' ').map(Number);
  map[a][b] = 1; // 1: 우측으로 이동
  map[a][b + 1] = 2; // 2: 좌측으로 이동.
}

const check = () => {
  for (let i = 1; i <= width; i++) {
    let nx = i;
    let ny = 1;

    while (ny <= height) {
      if (map[ny][nx] === 1) nx++; // 우측으로 이동
      else if (map[ny][nx] === 2) nx--; // 좌측으로 이동
      ny++; // y축 + 1칸 이동 (아래로 이동)
    }

    if (nx !== i) return false; // i번으로 출발해서 i번으로 도착하지 않는 게 하나라도 있다면 return false;
  }

  return true;
};

// addHorizontalLineNumber: 추가한 가로선의 개수 (3개가 넘어가면 더 이상 탐색은 무의미)
const dfs = (x, y, addHorizontalLineNumber) => {
  if (isFinish) return;
  if (answer === addHorizontalLineNumber) {
    if (check()) isFinish = true;
    return;
  }

  for (let i = y; i <= height; i++) {
    for (let j = x; j < width; j++) {
      // 가로선 두 개가 연속으로 놓여질 수 없기 때문에 가로선을 추가하기 전에 연결된 가로선이 있는지 확인
      if (map[i][j] === 0 && map[i][j + 1] === 0) {
        // 가로선 추가
        map[i][j] = 1;
        map[i][j + 1] = 2;
        dfs(1, 1, addHorizontalLineNumber + 1);
        // 추가했던 가로선 제거 (백트래킹)
        map[i][j] = 0;
        map[i][j + 1] = 0;
      }
    }
  }
};

// 추가할 가로선의 갯수를 미리 정해놔야 탐색 종료 조건으로 걸 수 있다.
// 아래 반복무에서 i는 추가할 가로선의 수.
for (let i = 0; i <= 3; i++) {
  answer = i;
  dfs(1, 1, 0);
  if (isFinish) break;
}

console.log(isFinish ? answer : -1);
