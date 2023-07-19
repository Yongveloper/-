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

const bfs = () => {
  const queue = new Queue();
  queue.enqueue(n);
  while (true) {
    const curr = queue.dequeue();
    if (curr === k) {
      return visited[curr];
    }
    for (const nxt of [curr - 1, curr + 1, curr * 2]) {
      if (nxt < 0 || nxt >= MAX) continue;
      if (visited[nxt] === 0) {
        visited[nxt] = visited[curr] + 1;
        queue.enqueue(nxt);
      }
    }
  }
};

console.log(bfs());
