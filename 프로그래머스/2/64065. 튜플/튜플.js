function solution(s) {
  var answer = new Set();
  const arr = JSON.parse(
    s
      .replace(/{{/g, '[[')
      .replace(/}}/g, ']]')
      .replace(/{/g, '[')
      .replace(/}/g, ']')
  );

  arr.sort((a, b) => a.length - b.length);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      answer.add(arr[i][j]);
    }
  }

  return [...answer];
}
