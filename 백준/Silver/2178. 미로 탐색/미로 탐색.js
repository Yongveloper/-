const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [a, ...b] = input;
const [n, m] = a.split(' ').map(Number);
const board = b.map((item) => item.split('').map(Number));
const checkArr = Array.from({ length: n }, () => Array(m).fill(0));
const queue = [[0, 0]];
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

checkArr[0][0] = 0;

while (queue.length) {
  const [x, y] = queue.shift();
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
      if (!checkArr[nx][ny] && board[nx][ny]) {
        checkArr[nx][ny] = checkArr[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
}

console.log(checkArr[n - 1][m - 1] + 1);
