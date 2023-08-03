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

// 역의 개수(N), 간선의 개수(K), 하이퍼튜브의 개수(M)
const [n, k, m] = input[0].split(' ').map(Number);
// 그래프 정보(N개의 역과 M개의 하이퍼튜브는 모두 노드)
const graph = Array.from({ length: n + m + 1 }, () => []);
for (let i = 1; i <= m; i++) {
  const arr = input[i].split(' ').map(Number);
  for (const x of arr) {
    graph[x].push(n + i); // 노드 -> 하이퍼 튜브
    graph[n + i].push(x); // 하이퍼 튜브 -> 노드
  }
}
const visited = new Set([1]); // 1번 노드에서 출발
const queue = new Queue();
queue.enqueue([1, 1]); // [거리, 노드 번호]

while (queue.size() !== 0) {
  const [dist, now] = queue.dequeue();
  // N번 노드에 도착한 경우
  if (now === n) {
    // 절반은 하이퍼 튜브
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
