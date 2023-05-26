const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const testCase = Number(input[0]);

let answer = '';

for (let tc = 1; tc <= testCase; tc++) {
  const n = Number(input[tc]);
  const arr = [];

  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  function dfs(result, depth) {
    if (depth === n - 1) {
      let str = '';
      for (let i = 0; i < n - 1; i++) {
        str += arr[i] + result[i];
      }
      str += arr[n - 1] + '';
      const current = eval(str.split(' ').join(''));

      if (current === 0) {
        answer += str + '\n';
      }
      return;
    }

    for (const x of [' ', '+', '-']) {
      result.push(x);
      dfs(result, depth + 1);
      result.pop();
    }
  }
  dfs([], 0);
  answer += '\n';
}

console.log(answer);
