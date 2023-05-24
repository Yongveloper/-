const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [n, ...arr] = input;
const board = arr.map((item) => item.split('').map(Number));
const answer = [];
const queue = [];
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (board[i][j] === 1) {
      let count = 1;
      board[i][j] = 0;
      queue.push([i, j]);
      while (queue.length) {
        const [x, y] = queue.shift();
        for (let k = 0; k < 4; k++) {
          const nx = x + dx[k];
          const ny = y + dy[k];
          if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
            board[nx][ny] = 0;
            count++;
            queue.push([nx, ny]);
          }
        }
      }
      answer.push(count);
    }
  }
}

answer.sort((a, b) => a - b);
console.log(`${answer.length}\n${answer.join('\n').trim()}`);
