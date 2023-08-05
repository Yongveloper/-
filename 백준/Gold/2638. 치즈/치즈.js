const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }

  peek() {
    return this.items[this.headIndex];
  }

  size() {
    return this.tailIndex - this.headIndex;
  }
}

const [n, m] = input[0].split(' ').map(Number);
const graph = input.slice(1).map((row) => row.split(' ').map(Number));
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const bfs = () => {
  const visited = Array.from(Array(n), () => Array(m).fill(false));
  visited[0][0] = true;
  const queue = new Queue();
  queue.enqueue([0, 0]);
  while (queue.size() > 0) {
    const [x, y] = queue.dequeue();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (!visited[nx][ny]) {
        if (graph[nx][ny] >= 1) {
          graph[nx][ny]++;
        } else {
          queue.enqueue([nx, ny]);
          visited[nx][ny] = true;
        }
      }
    }
  }
};

const melt = () => {
  let finished = true; // 더 이상 녹을 치즈가 없는지 확인하는 변수
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] >= 3) {
        graph[i][j] = 0;
        finished = false;
      } else if (graph[i][j] === 2) {
        graph[i][j] = 1;
      }
    }
  }
  return finished;
};

let result = 0;
while (true) {
  bfs();
  if (melt()) {
    console.log(result);
    break;
  }
  result++;
}
