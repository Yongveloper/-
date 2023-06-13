const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

let answer = '';

for (let tc = 0; tc < input.length - 1; tc++) {
  const testCase = input[tc].split(' ');
  const k = Number(testCase[0]);
  const arr = testCase.slice(1).map(Number);
  const visited = new Array(k).fill(false);
  const result = [];
  let temp = '';

  function dfs(depth) {
    if (result.length === 6) {
      temp += result.join(' ') + '\n';
      return;
    }
    for (let i = depth; i < k; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      result.push(arr[i]);
      dfs(i + 1);
      result.pop();
      visited[i] = false;
    }
  }
  dfs(0);

  answer += temp + '\n';
}

console.log(answer.trim());
