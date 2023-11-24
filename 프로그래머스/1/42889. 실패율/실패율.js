function solution(N, stages) {
  stages.sort((a, b) => a - b);

  const obj = {};
  for (let i = 1; i <= N; i++) {
    obj[i] = 0;
  }
  let count = 1;
  let prevStage = stages.at(-1);

  for (let i = stages.length - 1; i >= 0; i--) {
    if (stages[i] === N + 1) {
      continue;
    }

    if (prevStage === stages[i]) {
      count++;
    } else {
      prevStage = stages[i];
      count = 1;
    }

    obj[stages[i]] = count / (stages.length - i);
  }

  const sortArr = Object.entries(obj).sort((a, b) => {
    if (a[1] === b[1]) {
      return Number(a[0] - b[1]);
    } else {
      return b[1] - a[1];
    }
  });

  return sortArr.map((item) => Number(item[0]));
}

