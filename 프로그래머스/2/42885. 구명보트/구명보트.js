function solution(people, limit) {
    let answer = 0;
    people.sort((a, b) => a - b);
    let [left, right] = [0, people.length - 1];
    
    while(left <= right) {
        const sum = people[left] + people[right];
        if(sum <= limit) {
            left++;
        }
        right--;
        answer++;
    }
  
    return answer;
}