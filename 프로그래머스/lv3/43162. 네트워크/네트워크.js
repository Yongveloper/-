function solution(n, computers) {
    let answer = 0;
    const visited = new Array(n).fill(false);
    
    function dfs(x) {
        visited[x] = true;
        for(let y = 0; y < n; y++) {
            if(computers[x][y] && !visited[y]) {
                dfs(y);
            }
        }
    }
    
    for(let i = 0; i < n; i++) {
        if(visited[i]) continue;
        dfs(i);
        answer++;
    }
    
    return answer;
}