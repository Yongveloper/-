function solution(dartResult) {
  let answer = 0;
  let queue = [];
  let prevNum = 0;
  //S는 계산 필요 없음

  const bonus = {
    S: 1,
    D: 2,
    T: 3,
  };

  let isPrevNum = false;
  for (const s of dartResult) {
    if (!isNaN(s)) {
      if (isPrevNum) {
        prevNum = 10;
      } else {
        prevNum = s;
      }
      isPrevNum = true;
      continue;
    }

    isPrevNum = false;
    if (s === 'S' || s === 'D' || s === 'T') {
      if (queue.length >= 2) {
        answer += queue.shift();
      }
      queue.push(prevNum ** bonus[s]);
    }

    if (s === '#') {
      const recentScore = queue.at(-1);
      queue[queue.length - 1] = recentScore * -1;
    }

    if (s === '*') {
      queue = queue.map((num) => num * 2);
    }
  }

  return answer + queue.reduce((acc, curr) => acc + curr, 0);
}
