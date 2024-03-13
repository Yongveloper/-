const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1).map((item) => item.split(''));
let answer = 0;

const search = (newArray) => {
  for (let i = 0; i < n; i++) {
    let rowColor = '';
    let colColor = '';
    let rowCount = 0;
    let colCount = 0;
    for (let j = 0; j < n; j++) {
      if (newArray[i][j] === rowColor) {
        rowCount++;
      } else {
        rowColor = newArray[i][j];
        rowCount = 1;
      }

      if (newArray[j][i] === colColor) {
        colCount++;
      } else {
        colColor = newArray[j][i];
        colCount = 1;
      }
      answer = Math.max(answer, rowCount, colCount);
    }
  }
};

const dx = [0, 1, -1, 0];
const dy = [1, 0, 0, -1];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < 4; k++) {
      let newArray = arr.map((item) => [...item]);
      const nx = dx[k] + i;
      const ny = dy[k] + j;

      if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;

      [newArray[i][j], newArray[nx][ny]] = [newArray[nx][ny], newArray[i][j]];

      search(newArray);
    }
  }
}

console.log(answer);
