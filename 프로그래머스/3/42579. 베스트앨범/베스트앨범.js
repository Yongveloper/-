function solution(genres, plays) {
    const answer = [];
    const map = {};
    const sumMap = {};

    genres.forEach((genr, index) => {
        if (!map[genr]) {
            map[genr] = [];
        }
        if (!sumMap[genr]) {
            sumMap[genr] = 0;
        }
        map[genr].push([index, plays[index]]);
        sumMap[genr] = sumMap[genr] + plays[index];
        
    })
    
    const bestGenres = Object.entries(sumMap).sort((a, b) => b[1] - a[1]);
    for(const [key, value] of Object.entries(map)) {
       value.sort((a, b) => b[1] - a[1]);
    }
    
    for(const genr of bestGenres) {
        const name = genr[0];
        for(let i = 0; i < 2; i++) {
            if(map[name][i]) {
                answer.push(map[name][i][0])
            }
        }
    }
    
    return answer
}