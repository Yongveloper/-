class Queue {
    constructor() {
        this.items = [];
        this.headIndex = 0;
        this.tailIndex = 0;
    }
    
    enqueue(item) {
        this.items[this.tailIndex] = item;
        this.tailIndex++;
    }
    
    dequeue() {
        const item = this.items[this.headIndex];
        delete this.items[this.headIndex];
        this.headIndex++;
        
        return item;
    }
    
    size() {
        return this.tailIndex - this.headIndex;
    }
}

function solution(n, wires) {
    let answer = Number.MAX_SAFE_INTEGER;
    const graph = Array.from({length: n + 1}, () => []);
    
    for(const item of wires) {
        const [a, b] = item;
        graph[a].push(b);
        graph[b].push(a);
    }
    
    const bfs = (root, except) => {
        let count = 0;
        const visited = Array(n + 1).fill(false);
        const queue = new Queue();
        queue.enqueue(root);
        visited[root] = true;
        
        while(queue.size() > 0) {
            const num = queue.dequeue();
            for(const item of graph[num]) {
                if(item !== except && !visited[item]) {
                    visited[item] = true;
                    queue.enqueue(item);
                }
            }
            count++;
        }
        return count;
    }
    
    for(const item of wires) {
        const [a, b] = item;
        answer = Math.min(answer, Math.abs(bfs(a, b) - bfs(b, a)));
    }
    
    return answer;
}