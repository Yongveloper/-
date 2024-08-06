function solution(s) {
    // 1. 첫 요소를 스택에 넣고 초기화 해준다.
    // 2. 두번째 요소부터 스택에 넣고 이전 요소와 비교한다.
        // 만약 같은 요소라면 넣지 않고, 제거를 해준다.
    // 위 과정을 반복한다.
    if(s.length === 0) {
        return 0;
    }
    const stack = [s[0]];
    
    for(let i = 1; i < s.length; i++) {
        if(stack.at(-1) === s[i]) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }  

    if(stack.length > 0) {
        return 0;
    }
    
    return 1;
}