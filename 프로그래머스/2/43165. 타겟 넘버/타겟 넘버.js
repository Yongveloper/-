function solution(numbers, target) {
    let answer = 0;
    
    const dfs = (depth, sum) => {
        if(depth === numbers.length) {
            if(sum === target) {
                answer++;
            }
            return;
        }
        
        dfs(depth + 1, -numbers[depth] + sum);
        dfs(depth + 1, numbers[depth] + sum);
    }
    
    dfs(0,0)
    
    return answer;
}