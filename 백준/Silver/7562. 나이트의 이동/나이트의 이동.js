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

let testCases = Number(input[0]);
let line = 1;

const dx = [-2, -2, -1, -1, 1, 1, 2, 2];
const dy = [-1, 1, -2, 2, -2, 2, -1, 1];

while (testCases--) {
  const l = Number(input[line]);
  const visited = Array.from({ length: l }, () => new Array(l).fill(0));
  const [x, y] = input[line + 1].split(' ').map(Number);
  const [targetX, targetY] = input[line + 2].split(' ').map(Number);
  const queue = new Queue();
  queue.enqueue([x, y]);
  visited[x][y] = 1;

  while (queue.size() !== 0) {
    const [curX, curY] = queue.dequeue();
    for (let i = 0; i < 8; i++) {
      const nx = curX + dx[i];
      const ny = curY + dy[i];
      if (nx < 0 || nx >= l || ny < 0 || ny >= l) continue;
      if (visited[nx][ny] === 0) {
        queue.enqueue([nx, ny]);
        visited[nx][ny] = visited[curX][curY] + 1;
      }
    }
  }

  console.log(visited[targetX][targetY] - 1);

  line += 3;
}
