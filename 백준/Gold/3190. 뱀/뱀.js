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

const n = Number(input[0]);
const k = Number(input[1]);
const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
for (let i = 2; i < k + 2; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  graph[x][y] = 1;
}
const l = Number(input[k + 2]);
const info = [];
for (let i = k + 3; i < k + 3 + l; i++) {
  const [x, c] = input[i].split(' ');
  info.push([Number(x), c]);
}
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

const turn = (direction, c) => {
  if (c === 'L') {
    direction = direction - 1;
    if (direction === -1) direction = 3;
  } else {
    direction = (direction + 1) % 4;
  }
  return direction;
};

let [x, y] = [1, 1];
graph[x][y] = 2;
let direction = 0;
let time = 0;
let index = 0;
const q = new Queue();
q.enqueue([x, y]);

while (true) {
  const nx = x + dx[direction];
  const ny = y + dy[direction];
  if (1 <= nx && nx <= n && 1 <= ny && ny <= n && graph[nx][ny] !== 2) {
    if (graph[nx][ny] === 0) {
      graph[nx][ny] = 2;
      q.enqueue([nx, ny]);
      const [px, py] = q.dequeue();
      graph[px][py] = 0;
    } else {
      graph[nx][ny] = 2;
      q.enqueue([nx, ny]);
    }
  } else {
    time++;
    break;
  }
  [x, y] = [nx, ny];
  time++;
  if (index < l && info[index][0] === time) {
    direction = turn(direction, info[index][1]);
    index++;
  }
}

console.log(time);
