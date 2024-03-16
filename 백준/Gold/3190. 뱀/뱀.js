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
const board = Array.from({ length: n }, () => Array(n).fill(0));
const apples = input
  .slice(2, Number(input[1]) + 2)
  .map((item) => item.split(' ').map(Number));

for (const [x, y] of apples) {
  board[x - 1][y - 1] = 2;
}
const l = input[Number(input[1]) + 2];

// 사과:2, 방문: 1, 없음: 0
const directions = input
  .slice(Number(input[1]) + 3)
  .map((item) => item.split(' '));
let time = 0;
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
let currentDirectionIndex = 0;
let count = 0;

const queue = new Queue();
queue.enqueue([0, 0]);
board[0][0] = 1;
let [x, y] = [0, 0];

while (queue.size() !== 0) {
  const nx = dx[currentDirectionIndex] + x;
  const ny = dy[currentDirectionIndex] + y;
  time++;
  if (nx < 0 || nx >= n || ny < 0 || ny >= n) {
    return console.log(time);
  }
  if (board[nx][ny] === 1) {
    return console.log(time);
  }

  if (count < l && Number(directions[count][0]) === time) {
    const dir = directions[count][1];
    if (dir === 'D') {
      currentDirectionIndex++;
      if (currentDirectionIndex >= 4) {
        currentDirectionIndex = 0;
      }
    } else {
      currentDirectionIndex--;
      if (currentDirectionIndex < 0) {
        currentDirectionIndex = 3;
      }
    }
    count++;
  }

  if (board[nx][ny] === 0) {
    const [x, y] = queue.dequeue();
    board[x][y] = 0;
  }
  queue.enqueue([nx, ny]);
  [x, y] = [nx, ny];
  board[nx][ny] = 1;
}
