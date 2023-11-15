function solution(k, dungeons) {
    var answer = -1;
    const n = dungeons.length;
    const visited = Array(n).fill(false);
    const result = [];
    
    function dfs(curK,count) {
        for(let i = 0; i < n; i++) {
            if(!visited[i] && curK >= dungeons[i][0]) {
                visited[i] = true;
                
                dfs(curK - dungeons[i][1], count + 1);
                visited[i] = false;
            }
            answer = Math.max(answer, count)
        }        
    }
    
    dfs(k, 0);
    
    return answer;
}