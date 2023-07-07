function solution(n, lost, reserve) {
    let answer = n - lost.length;
    const realLost = lost.sort((a,b) => a  - b).filter(item => !reserve.includes(item));
    answer += lost.length - realLost.length;
    const realReserve = reserve.sort((a,b) => a-b).filter(item => !lost.includes(item));

    for(let i = 0; i < realLost.length; i++) {
        for(let j = 0; j < realReserve.length; j++){
            if(Math.abs(realLost[i] - realReserve[j]) === 1) {
                answer++;
                realReserve.splice(j, 1);
                break;
            } 
        }
    }

    return answer;
}