const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

// 내 풀이
const distances = input[1].split(' ');
const prices = input[2].split(' ');
const arr = distances.map((item, i) => [BigInt(prices[i]), BigInt(item)]);

let min = Infinity;
let sum = BigInt(0);

for (const [price, distance] of arr) {
  if (price <= min) {
    sum += price * distance;
    min = price;
  } else {
    sum += BigInt(min) * distance;
  }
}

console.log(sum.toString());

// 나동빈 풀이
// let n = Number(input[0]);
// let km = input[1].split(' ').map(Number);
// let cost = input[2].split(' ').map(Number);

// //비오름차순이 되도록 정렬
// let minCost = cost[0];
// for (let i = 0; i < n; i++) {
//   minCost = Math.min(minCost, cost[i]);
//   cost[i] = minCost;
// }

// let answer = BigInt(0);
// for (let i = 0; i < n - 1; i++) {
//   answer += BigInt(km[i]) * BigInt(cost[i]);
// }
// console.log(String(answer));
