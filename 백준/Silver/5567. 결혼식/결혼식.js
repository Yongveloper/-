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
const m = Number(input[1]);
const graph = Array.from({ length: n + 1 }, () => []);
for (let i = 2; i < m + 2; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  graph[a].push(b);
  graph[b].push(a);
}
const visited = new Array(n + 1).fill(false);
visited[1] = true;
const result = Array.from({ length: m + 1 }, () => []);

const queue = new Queue();
queue.enqueue([1, 0]);

while (queue.size() !== 0) {
  const [number, dist] = queue.dequeue();

  if (dist === 2) break;

  for (const x of graph[number]) {
    if (!visited[x]) {
      visited[x] = true;
      queue.enqueue([x, dist + 1]);
      result[dist + 1].push(x);
    }
  }
}

console.log(result[1].length + result[2].length);
