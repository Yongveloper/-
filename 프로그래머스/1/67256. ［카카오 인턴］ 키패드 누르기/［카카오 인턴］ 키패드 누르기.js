function solution(numbers, hand) {
  let answer = '';
  let currLeft = '*';
  let currRight = '#';
  const keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['*', 0, '#'],
  ];

  const selectHand = (target) => {
    let leftPos = [];
    let rightPos = [];
    let targetPos = [];
    for (let i = 0; i < keypad.length; i++) {
      for (let j = 0; j < 3; j++) {
        if (currLeft === keypad[i][j]) {
          leftPos = [i, j];
        }
        if (currRight === keypad[i][j]) {
          rightPos = [i, j];
        }
        if (target === keypad[i][j]) {
          targetPos = [i, j];
        }
      }
    }

    const l =
      Math.abs(leftPos[0] - targetPos[0]) + Math.abs(leftPos[1] - targetPos[1]);
    const r =
      Math.abs(rightPos[0] - targetPos[0]) +
      Math.abs(rightPos[1] - targetPos[1]);

    if (l < r || (l === r && hand === 'left')) {
      currLeft = target;
      answer += 'L';
    } else if (r < l || (l === r && hand === 'right')) {
      currRight = target;
      answer += 'R';
    }
  };

  for (const num of numbers) {
    switch (num) {
      case 1:
      case 4:
      case 7:
        answer += 'L';
        currLeft = num;
        break;
      case 3:
      case 6:
      case 9:
        answer += 'R';
        currRight = num;
        break;
      case 2:
      case 5:
      case 8:
      case 0:
        selectHand(num);
        break;
    }
  }

  return answer;
}

