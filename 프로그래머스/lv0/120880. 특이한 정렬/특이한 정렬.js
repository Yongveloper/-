function solution(numlist, n) {
    let answer = [];
    const hash = new Map();

    numlist.forEach(num => {
        const diff = Math.abs(n - num)
        hash.set(diff, hash.get(diff) ? [...hash.get(diff), num] : [num])
    })
    
    const sortedKey = new Map([...hash.entries()].sort((a, b) => a[0] - b[0]));

    for(const [key, value] of sortedKey.entries()) {
        const sortedArr = value.sort((a, b) => b - a);
        answer = [...answer, ...sortedArr];
    }
    
    return answer;
}