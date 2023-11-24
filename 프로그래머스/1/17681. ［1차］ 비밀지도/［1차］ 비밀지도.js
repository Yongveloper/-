function solution(n, arr1, arr2) {
  const map = Array.from({ length: n }, () => Array(n).fill(' '));
  const arr1Map = [];
  const arr2Map = [];

  for (const x of arr1) {
    const pos = x.toString(2).padStart(n, 0).split('');
    arr1Map.push(pos);
  }
  for (const x of arr2) {
    const pos = x.toString(2).padStart(n, 0).split('');
    arr2Map.push(pos);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr1Map[i][j] === '1' || arr2Map[i][j] === '1') {
        map[i][j] = '#';
      }
    }
    map[i] = map[i].join('');
  }

  return map;
}
