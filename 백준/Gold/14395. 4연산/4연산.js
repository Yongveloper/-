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

const [s, t] = input.map(Number);
if (s === t) {
  console.log(0);
  return;
}
const queue = new Queue();
queue.enqueue([s, '']);
const visited = new Set([s]);

while (queue.size() !== 0) {
  const [value, opers] = queue.dequeue();
  if (value > 1e9) continue;
  if (value === t) {
    console.log(opers);
    return;
  }

  for (const oper of ['*', '+', '-', '/']) {
    let nextValue = value;
    if (oper === '*') nextValue *= value;
    if (oper === '+') nextValue += value;
    if (oper === '-') nextValue -= value;
    if (oper === '/' && value !== 0) nextValue = 1;
    if (!visited.has(nextValue)) {
      queue.enqueue([nextValue, opers + oper]);
      visited.add(nextValue);
    }
  }
}

console.log(-1);
