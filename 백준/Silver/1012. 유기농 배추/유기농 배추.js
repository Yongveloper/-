const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

function dfs(graph, n, m, x, y) {
  // 주어진 범위를 벗어나는 경우에는 즉시 종료
  if (x <= -1 || x >= n || y <= -1 || y >= m) {
    return false;
  }
  // 현재 노드를 처리했다면
  if (graph[x][y] !== 1) {
    return false;
  }
  // 해당 노드 방문 처리
  graph[x][y] = -1;
  // 상, 하, 좌, 우의 위치들도 모두 재귀적으로 호출
  dfs(graph, n, m, x - 1, y);
  dfs(graph, n, m, x, y - 1);
  dfs(graph, n, m, x + 1, y);
  dfs(graph, n, m, x, y + 1);
  return true;
}

let testCases = Number(input[0]);
let line = 1;
while (testCases--) {
  // 가로 길이(M), 세로 길이(N), 배추가 심어져 있는 위치의 개수(K)
  const [m, n, k] = input[line].split(' ').map(Number);
  const graph = Array.from({ length: n }, () => new Array(m)); // 그래프 정보

  for (let i = 1; i <= k; i++) {
    const [y, x] = input[line + i].split(' ').map(Number);
    graph[x][y] = 1;
  }

  let answer = 0; // 연결 요소의 수 계산
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dfs(graph, n, m, i, j)) {
        answer++;
      }
    }
  }

  line += k + 1;
  console.log(answer);
}
