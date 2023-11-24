function solution(gems) {
  const size = new Set([...gems]).size;

  if (size === 1) {
    return [1, 1];
  }
  if (size === gems.length) {
    return [1, gems.length];
  }

  let answer = [1, gems.length];
  let left = 0;
  let right = 0;
  const map = new Map();
  map.set(gems[0], 1);

  while (right < gems.length) {
    if (map.size === size) {
      if (answer[1] - answer[0] > right - left) {
        answer = [left + 1, right + 1];
      }
      map.set(gems[left], map.get(gems[left]) - 1);
      if (map.get(gems[left]) === 0) {
        map.delete(gems[left]);
      }
      left++;
    } else {
      right++;
      map.set(gems[right], (map.get(gems[right]) || 0) + 1);
    }
  }

  return answer;
}