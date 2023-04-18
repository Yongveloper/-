function solution(A, B) {
    let counst = 0;
    const arr = A.split('');
    while(1) {
        if(arr.join('') === B) return counst;
        if(counst >= A.length) return -1
        const lastChar = arr.pop();
        arr.unshift(lastChar);
        counst++;
    }
}