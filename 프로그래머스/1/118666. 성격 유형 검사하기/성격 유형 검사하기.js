function solution(survey, choices) {
    let answer = '';
    const map = {R:0, T:0, C:0, F:0, J:0, M:0, A:0, N:0};
    
    for(let i = 0; i < survey.length; i++) {
        const [no, yes] = survey[i].split('');
        const sub = choices[i] - 4
        if(sub > 0) {
            map[yes] += sub;
        } else if (sub < 0) {
            map[no] += Math.abs(sub);
        }
    }
    
    const arr = Object.entries(map);
    for(let i = 0; i < arr.length; i +=2) {
        const [no, yes] = [arr[i], arr[i + 1]];
        if(no[1] > yes[1]) {
            answer += no[0];
        } else if(no[1] < yes[1]) {
            answer += yes[0];
        } else {
            const sort = [no,yes].sort((a, b) => a[0] - b[0]);
            answer += sort[0][0];
        }
    }
    
    return answer;
}