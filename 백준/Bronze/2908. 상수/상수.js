const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split(' ');

const newArr = input.map((number) => +number.split('').reverse().join(''));

const answer = newArr[0] > newArr[1] ? newArr[0] : newArr[1];

console.log(answer);
