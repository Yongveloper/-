function solution(tickets) {
    let routes = {};
    
    for(let i=0; i<tickets.length;i++){
        const [start, end] = tickets[i];
        if(routes[start]){
            routes[start].push(end);
        } else {
            routes[start] = [end];
        }
    }
    
    for(let airport in routes){
        routes[airport].sort().reverse();
    }
    
    let stack = ["ICN"];
    let path = [];
    while(stack.length > 0){
        let top = stack[stack.length-1];
        if(!routes[top] || routes[top].length === 0){
            path.push(stack.pop());
        } else {
            stack.push(routes[top].pop());
        }
    }
    
    return path.reverse();
}
