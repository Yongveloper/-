const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split(' ');

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

const [n, k] = input.map(Number);
const MAX = 100001;
const visited = new Array(MAX).fill(0);
const queue = new Queue();
queue.enqueue(n);

while (queue.size() !== 0) {
  const v = queue.dequeue();

  if (v === k) {
    return console.log(visited[v]);
  }

  for (const x of [v - 1, v + 1, v * 2]) {
    if (x < 0 || x >= MAX) continue;
    if (visited[x] === 0) {
      queue.enqueue(x);
      visited[x] = visited[v] + 1;
    }
  }
}
