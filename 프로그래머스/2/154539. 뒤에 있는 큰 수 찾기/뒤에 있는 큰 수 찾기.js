function solution(numbers) {
    let answer = new Array(numbers.length).fill(-1);
    const stack = [];
    
    numbers.forEach((number, index) => {
        while(stack && numbers[stack.at(-1)] < number) {
            answer[stack.pop()] = number;
        }
        stack.push(index);
    })
    
    return answer;
}