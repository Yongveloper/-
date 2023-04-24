const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim();

const groups = input.split('-');
let answer = 0;

groups.forEach((group, index) => {
  const sum = group
    .split('+')
    .map(Number)
    .reduce((acc, curr) => acc + curr, 0);

  index === 0 ? (answer += sum) : (answer -= sum);
});

console.log(answer);
