const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

let arr = input[1].split(' ').map(Number);
let arrows = new Array(1000001).fill(0);
let answer = 0;

for (const x of arr) {
  if (arrows[x] > 0) {
    arrows[x]--;
    arrows[x - 1]++;
  } else {
    arrows[x - 1]++;
    answer++;
  }
}

console.log(answer);
