function solution(numbers, hand) {
  let answer = '';
  let currLeft = '*';
  let currRight = '#';
  const keyPad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2],
  };

  const selectHand = (target) => {
    let leftPos = keyPad[currLeft];
    let rightPos = keyPad[currRight];
    let targetPos = keyPad[target];

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

