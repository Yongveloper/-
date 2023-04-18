const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
const arr = [];

for (let i = 1; i < input.length; i++) {
  arr.push(input[i].split(' '));
}

arr.forEach((item) => {
  let answer = '';
  for (let i = 0; i < item[1].length; i++) {
    for (let j = 0; j < Number(item[0]); j++) {
      answer += item[1][i];
    }
  }
  console.log(answer);
});
