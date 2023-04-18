function solution(park, routes) {
    let pos = [0, 0];
    const dict = {
        E: [0, 1],
        W: [0, -1],
        S: [1, 0],
        N: [-1, 0]
    };
    
    for(let i = 0; i < park.length; i++) {
        const findedIdx = park[i].indexOf('S');
        if(findedIdx > -1) {
            pos = [i, findedIdx];
            break;
        }
    }
    
    routes.forEach((route, index) => {
        const [op, n] = route.split(' ');
        const tempPos = [...pos];
        let no = false;
        
        for(let i = 0; i < n; i++) {
            tempPos[0] += dict[op][0];
            tempPos[1] += dict[op][1];
            
            if((tempPos[0] < 0) || (tempPos[0] > park.length - 1) ||
                (tempPos[1] < 0) || (tempPos[1] > park[0].length - 1)) {
                no = true;
                break;
            }
            
            if(park[tempPos[0]][tempPos[1]] === 'X') {
                no = true;
                break;
            }
        }
        
        if(!no) {
            pos = tempPos;
        }
        
    })
    
    return pos;
}