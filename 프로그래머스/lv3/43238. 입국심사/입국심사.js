function solution(n, times) {
  let answer = 0;
  times.sort((a, b) => a - b);
  let left = 1;
  let right = n * times[times.length - 1];

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const count = times.reduce((acc, curr) => acc + Math.floor(mid / curr), 0);

    if (count < n) {
      left = mid + 1;
    } else {
      if (mid <= right) {
        answer = mid;
      }
      right = mid - 1;
    }
  }

  return answer;
}