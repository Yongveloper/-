function solution(prices) {
    const length = prices.length;
    const answer = Array.from({length}, (_, i) => length - 1 - i);
    
    const stack = [0];
    for (let i = 1; i < length; i++) {
        while (stack.length && prices[stack.at(-1)] > prices[i]) {
            const j = stack.pop();
            answer[j] = i - j;
        }
        stack.push(i);
    }
    
    return answer;
}