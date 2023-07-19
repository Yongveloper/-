const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
let [n, ...arr] = input;
arr = arr.map((item) => item.split(' ').map(Number));
const [numbers, operator] = arr;
const operObj = {
  0: (oper1, oper2) => oper1 + oper2,
  1: (oper1, oper2) => oper1 - oper2,
  2: (oper1, oper2) => oper1 * oper2,
  3: (oper1, oper2) => {
    if (oper1 < 0) {
      return -Math.floor(-oper1 / oper2);
    }
    return Math.floor(oper1 / oper2);
  },
};
const temp = [];
let min = Number.MAX_SAFE_INTEGER;
let max = Number.MIN_SAFE_INTEGER;

function dfs(L) {
  if (L === n - 1) {
    let oper1 = numbers[0];
    for (let i = 0; i < temp.length; i++) {
      const oper2 = numbers[i + 1];
      const idx = temp[i];
      oper1 = operObj[idx](oper1, oper2);
    }
    min = Math.min(min, oper1);
    max = Math.max(max, oper1);
  }

  for (let i = 0; i < operator.length; i++) {
    if (!operator[i]) continue;
    operator[i]--;
    temp.push(i);
    dfs(L + 1);
    operator[i]++;
    temp.pop();
  }
}
dfs(0);

console.log(`${max}\n${min}`);
