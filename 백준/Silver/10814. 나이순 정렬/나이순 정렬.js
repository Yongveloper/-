const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = input.shift();
const arr = input.map((item) => item.split(' '));

arr.sort((a, b) => a[0] - b[0]);

let answer = '';

arr.forEach((item) => (answer += `${item[0]} ${item[1]}\n`));

console.log(answer);
