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

const [n, k, m] = input[0].split(' ').map(Number);
const graph = Array.from({ length: n + m + 1 }, () => []);
for (let i = 1; i <= m; i++) {
  const arr = input[i].split(' ').map(Number);
  for (const x of arr) {
    graph[x].push(n + i);
    graph[n + i].push(x);
  }
}
const visited = new Set([1]);
const queue = new Queue();
queue.enqueue([1, 1]);

while (queue.size() !== 0) {
  const [dist, now] = queue.dequeue();

  if (now === n) {
    console.log(Math.floor(dist / 2) + 1);
    return;
  }

  for (const y of graph[now]) {
    if (!visited.has(y)) {
      visited.add(y);
      queue.enqueue([dist + 1, y]);
    }
  }
}

console.log(-1);
