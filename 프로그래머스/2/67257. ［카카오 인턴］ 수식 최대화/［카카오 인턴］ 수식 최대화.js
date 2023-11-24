function solution(expression) {
  let answer = [];
  const prior = [
    ['-', '*', '+'],
    ['-', '+', '*'],
    ['*', '-', '+'],
    ['*', '+', '-'],
    ['+', '-', '*'],
    ['+', '*', '-'],
  ];

  for (let i = 0; i < prior.length; i++) {
    const arr = expression.split(/(\D)/);
    let total = 0;
    for (let j = 0; j < 3; j++) {
      const oper = prior[i][j];
      while (arr.includes(oper)) {
        const idx = arr.indexOf(oper);

        arr.splice(idx - 1, 3, eval(arr.slice(idx - 1, idx + 2).join('')));
      }
    }
    answer.push(Math.abs(arr[0]));
  }

  return Math.max(...answer);
}
