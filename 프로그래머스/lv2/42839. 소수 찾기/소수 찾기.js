function isPrime(num) {
  if (num === 1 || num === 0) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(numbers) {
  let answer = [];
  const n = numbers.length;
  const visited = new Array(n).fill(0);
  const arr = [];

  const dfs = () => {
    if (arr.length > 0) {
      const number = Number(arr.join(''));
      if (isPrime(number)) {
        answer.push(number);
      }
    }

    for (let i = 0; i < n; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      arr.push(numbers[i]);
      dfs();
      visited[i] = false;
      arr.pop();
    }
  };

  dfs();
  answer = [...new Set(answer)].length;
  return answer;
}

