function solution(n, lost, reserve) {
    const filtedLost = lost.filter(item => !reserve.includes(item));
    const filterdReserve = reserve.filter(item => !lost.includes(item));
    
    filtedLost.sort((a, b) => a - b);
    filterdReserve.sort((a, b) => a - b);
    
    filterdReserve.forEach((reserver) => {
        filtedLost.forEach((loster, index) => {
            if(Math.abs(reserver - loster) === 1) {
                filtedLost.splice(index, 1);
            }
        }) 
    })
    
    return n - filtedLost.length 
}