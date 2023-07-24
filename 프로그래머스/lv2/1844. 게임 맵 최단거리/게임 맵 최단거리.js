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

function solution(maps) {
  let answer = 0;
  const queue = new Queue();
  const [n, m] = [maps.length, maps[0].length];

  const visited = Array.from({ length: n }, () => new Array(m).fill(0));
  const [targetX, targetY] = [n - 1, m - 1];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  queue.enqueue([0, 0]);
  visited[0][0] = 1;

  while (queue.size() !== 0) {
    const [x, y] = queue.dequeue();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (maps[nx][ny] === 0) continue;
      if (visited[nx][ny] === 0) {
        queue.enqueue([nx, ny]);
        visited[nx][ny] = visited[x][y] + 1;
      }
    }
  }

  answer = visited[targetX][targetY] || -1;
  return answer;
}