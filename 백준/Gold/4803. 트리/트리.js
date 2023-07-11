const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

let line = 0;
let testCase = 1;
let visited = [];
let graph = [];

while (true) {
  const [n, m] = input[line].split(' ').map(Number);
  if (n === 0 && m === 0) break;
  for (let i = 1; i <= n; i++) {
    graph[i] = [];
  }
  for (let i = 1; i <= m; i++) {
    const [x, y] = input[line + i].split(' ').map(Number);
    graph[x].push(y);
    graph[y].push(x);
  }
  visited = new Array(n + 1).fill(false);
  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      if (!isCycle(i, 0)) {
        cnt++;
      }
    }
  }
  if (cnt === 0) {
    console.log(`Case ${testCase}: No trees.`);
  } else if (cnt === 1) {
    console.log(`Case ${testCase}: There is one tree.`);
  } else {
    console.log(`Case ${testCase}: A forest of ${cnt} trees.`);
  }
  line += m + 1;
  testCase++;
}

// 무방향 그래프에서 사이클 여부 확인
function isCycle(x, prev) {
  // 현재 노드 방문 처리
  visited[x] = true;

  // 다음 노드(인접 노드)를 하나씩 확인하여
  for (const y of graph[x]) {
    // 다음 노드를 아직 방문하지 않았다면
    if (!visited[y]) {
      //다음 노드 기준으로 사이클이라면
      if (isCycle(y, x)) {
        return true;
      }
    } else if (y !== prev) {
      // 방문한 적 있는 노드인데, 직전 노드가 아니라면(무방향 그래프)
      return true;
    }
  }

  return false;
}
