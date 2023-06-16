const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [R, C] = input[0].split(" ").map(Number);
let board = new Array(R);
for (let i = 0; i < board.length; i++) {
  board[i] = input[i + 1].trim().split("");
}
let visit = new Array(26).fill(false); 
let ans = 0;
let dx = [0, 0, 1, -1];
let dy = [1, -1, 0, 0];

function DFS(x, y, cnt) {
  ans = Math.max(ans, cnt);
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (nx >= 0 && ny >= 0 && nx < R && ny < C) {
      if (visit[board[nx][ny].charCodeAt() - 65] === false) {
        visit[board[nx][ny].charCodeAt() - 65] = true;
        DFS(nx, ny, cnt + 1);
        visit[board[nx][ny].charCodeAt() - 65] = false;
      }
    }
  }
}
visit[board[0][0].charCodeAt() - 65] = true;
DFS(0, 0, 1);
console.log(ans);