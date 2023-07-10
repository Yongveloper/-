function solution(n, edge) {
  let answer = 0;
  const queue = [0];
  const visited = [1];

  const graph = Array.from(Array(n), () => []);
  for (const [a, b] of edge) {
    graph[a - 1].push(b - 1);
    graph[b - 1].push(a - 1);
  }

  while (queue.length) {
    const cur = queue.shift();
    for (const next of graph[cur]) {
      if (!visited[next]) {
        visited[next] = visited[cur] + 1;
        queue.push(next);
      }
    }
  }

  const max = Math.max(...visited);
  answer = visited.filter((v) => v === max).length;

  return answer;
}