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

  size() {
    return this.tailIndex - this.headIndex;
  }
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function bfs(a, place) {
  const graph = place.map((str) => str.split(''));
  const queue = new Queue();
  graph[a[0]][a[1]] = 'X';

  queue.enqueue([a[0], a[1], 0]);

  while (queue.size() > 0) {
    const [x, y, count] = queue.dequeue();

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];

      if (nx < 0 || nx >= 5 || ny < 0 || ny >= 5) continue;
      if (graph[nx][ny] === 'X') continue;

      if (graph[nx][ny] === 'P') {
        if (count + 1 > 2) {
          return true; // 거리두기 중
        } else {
          return false; // 거리두기 X
        }
      }

      graph[nx][ny] = 'X';
      queue.enqueue([nx, ny, count + 1]);
    }
  }

  return true;
}

function solution(places) {
  const answer = [];

  for (const place of places) {
    const pos = [];

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (place[i][j] === 'P') {
          pos.push([i, j]);
        }
      }
    }

    let find = false;

    for (let i = 0; i < pos.length - 1; i++) {
      if (find) break;
      for (let j = i + 1; j < pos.length; j++) {
        const sum =
          Math.abs(pos[i][0] - pos[j][0]) + Math.abs(pos[i][1] - pos[j][1]);

        if (sum === 1) {
          answer.push(0);
          find = true;
          break;
        } else if (sum === 2) {
          if (!bfs(pos[i], place)) {
            answer.push(0);
            find = true;
            break;
          }
        }
      }
    }
    if (!find) {
      answer.push(1);
    }
  }

  return answer;
}