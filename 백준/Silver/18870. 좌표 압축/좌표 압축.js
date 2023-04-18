const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const arr = input[1].split(' ').map(Number);
const sortedNum = [...new Set(arr)].sort((a, b) => a - b);
const hash = new Map();
sortedNum.forEach((num, i) => hash.set(num, i));

let answer = '';

arr.forEach((num) => (answer += hash.get(num) + ' '));
console.log(answer);
