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

const [n, k] = input[0].split(' ').map(Number);
const graph = [];
const data = [];
for (let i = 0; i < n; i++) {
  const arr = input[i + 1].split(' ').map(Number);
  graph.push(arr);
  for (let j = 0; j < n; j++) {
    if (graph[i][j] !== 0) {
      data.push([graph[i][j], 0, i, j]);
    }
  }
}
const [targetS, targetX, targetY] = input[n + 1].split(' ').map(Number);

data.sort((a, b) => a[0] - b[0]);
const queue = new Queue();
for (const x of data) {
  queue.enqueue(x);
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

while (queue.size() !== 0) {
  const [number, s, x, y] = queue.dequeue();

  if (s === targetS) break;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
    if (graph[nx][ny] === 0) {
      graph[nx][ny] = number;
      queue.enqueue([number, s + 1, nx, ny]);
    }
  }
}

console.log(graph[targetX - 1][targetY - 1]);
