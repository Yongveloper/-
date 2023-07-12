function solution(numbers, target) {
  let answer = 0;
  const n = numbers.length;

  function dfs(depth, sum) {
    if (depth === n) {
      if (sum === target) {
        answer++;
      }
      return;
    }

    dfs(depth + 1, sum + +numbers[depth]);
    dfs(depth + 1, sum + -numbers[depth]);
  }
  dfs(0, 0);

  return answer;
}
