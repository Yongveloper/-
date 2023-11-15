const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

class Queue {
  constructor() {
    this.items = [];
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

const n = Number(input[0]);
const graph = input.slice(1).map((item) => item.split(' ').map(Number));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let answer = Number.MAX_SAFE_INTEGER;

let currIsland = 2;
let edges = {};
let checked = Array(n + 1).fill(false);

function checkIsland(x, y) {
  const queue = new Queue();
  graph[x][y] = currIsland;
  queue.enqueue([x, y]);
  checked[currIsland] = true;
  edges = {};

  while (queue.size() > 0) {
    const [x, y] = queue.dequeue();

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];

      if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
      if (graph[nx][ny] === 0) {
        edges[`${nx},${ny}`] = true;
        continue;
      }

      if (graph[nx][ny] === 1) {
        graph[nx][ny] = currIsland;
        queue.enqueue([nx, ny]);
      }
    }
  }
}

function findAnyIsland() {
  for (const key of Object.keys(edges)) {
    const [sx, sy] = key.split(',').map(Number);
    const newGraph = graph.map((item) => [...item]);
    const queue = new Queue();

    queue.enqueue([sx, sy, 1]);
    newGraph[sx][sy] = -1;

    while (queue.size() > 0) {
      const [x, y, count] = queue.dequeue();

      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];

        if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;

        if (
          newGraph[nx][ny] !== currIsland &&
          newGraph[nx][ny] > 0 &&
          !checked[newGraph[nx][ny]]
        ) {
          answer = Math.min(answer, count);
        } else if (newGraph[nx][ny] === 0) {
          newGraph[nx][ny] = -1;
          queue.enqueue([nx, ny, count + 1]);
        }
      }
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (graph[i][j] === 1 && currIsland < n) {
      checkIsland(i, j);
      findAnyIsland();
      currIsland++;
    }
  }
}

console.log(answer);
