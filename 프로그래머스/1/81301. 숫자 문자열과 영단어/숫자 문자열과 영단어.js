function solution(s) {
    let answer = '';
    let tempStr = '';
    const obj = {
        zero: '0',
        one: '1',
        two: '2',
        three: '3',
        four: '4',
        five: '5',
        six: '6',
        seven: '7',
        eight: '8',
        nine: '9'
    }
    
    for(const str of s) {
        if(!isNaN(str)) {
            answer += str;
            continue;
        }
        
        tempStr += str;
        if(obj[tempStr]) {
            answer += obj[tempStr];
            tempStr = '';
        }
    }

    return Number(answer);
    
}