function solution(n, computers) {
    let answer = 0;
    const visited = Array(n - 1).fill(false);

    const dfs = (depth) => {
        visited[depth] = true;
        
        for(let i = 0; i < computers.length; i++) {
            if(!visited[i] && computers[depth][i]) {
                dfs(i);
            }
        }
    }
    
    
    for(let i = 0; i < computers.length; i++) {
        if(!visited[i]) {
            dfs(i);
            answer++;
        }
    }
    
    return answer;
}