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

const [n, l, r] = input[0].split(' ').map(Number);
const maps = input.slice(1).map((row) => row.split(' ').map(Number));
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];
let totalCount = 0;

const bfs = (x, y, index, union) => {
  const united = [[x, y]];
  const queue = new Queue();
  queue.enqueue([x, y]);
  union[x][y] = index;
  let sum = maps[x][y];
  let count = 1;
  while (queue.size() !== 0) {
    const [x, y] = queue.dequeue();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
      if (union[nx][ny] !== -1) continue;
      const diff = Math.abs(maps[nx][ny] - maps[x][y]);
      if (diff >= l && diff <= r) {
        queue.enqueue([nx, ny]);
        union[nx][ny] = index;
        sum += maps[nx][ny];
        count++;
        united.push([nx, ny]);
      }
    }
  }
  for (const unit of united) {
    const [i, j] = unit;
    maps[i][j] = Math.floor(sum / count);
  }
};

while (true) {
  const union = Array.from(Array(n), () => Array(n).fill(-1));
  let index = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (union[i][j] == -1) {
        bfs(i, j, index, union);
        index++;
      }
    }
  }
  if (index == n * n) break;
  totalCount++;
}

console.log(totalCount);
