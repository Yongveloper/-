const solution = (queue1, queue2) => {
  let sum1 = queue1.reduce((prev, cur) => prev + cur, 0);
  let sum2 = queue2.reduce((prev, cur) => prev + cur, 0);
  const half = (sum1 + sum2) / 2;
  const q = [...queue1, ...queue2];
  let q1Pointer = 0;
  let q2Pointer = queue1.length;

  for (let cnt = 0; cnt < queue1.length * 3; cnt++) {
    if (sum1 === half) {
      return cnt;
    }
    sum1 =
      sum1 > half
        ? sum1 - q[q1Pointer++ % q.length]
        : sum1 + q[q2Pointer++ % q.length];
  }

  return -1;
};
