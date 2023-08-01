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

const [n, m, k, x] = input[0].split(' ').map(Number);
const graph = Array.from({ length: n + 1 }, () => []);
for (let i = 1; i <= m; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  graph[a].push(b);
}
const costs = Array.from({ length: n + 1 }, () => []);
const visited = new Array(n + 1).fill(false);
const queue = new Queue();
queue.enqueue([x, 0]);
costs[0].push(x);
visited[x] = true;

while (queue.size() !== 0) {
  const [v, cost] = queue.dequeue();

  if (cost === k) break;

  for (const nv of graph[v]) {
    if (!visited[nv]) {
      visited[nv] = true;
      queue.enqueue([nv, cost + 1]);
      costs[cost + 1].push(nv);
    }
  }
}

if (costs[k].length > 0) {
  console.log(costs[k].sort((a, b) => a - b).join('\n'));
} else {
  console.log(-1);
}
