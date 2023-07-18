function solution(today, terms, privacies) {
    const answer = [];
    const todayDate = new Date(today);
    const dict = new Map()
    for(const item of terms) {
        const [a, b] = item.split(' ');
        dict.set(a, Number(b));
    }
    
    privacies.forEach((item, index) => {
        const [date, a] = item.split(' ');
        const newDate = new Date(date);
        const num = dict.get(a);

        newDate.setMonth(newDate.getMonth() + num);
        
        if(newDate <= todayDate) {
            answer.push(index + 1);
        }
    });
    
    return answer;
}