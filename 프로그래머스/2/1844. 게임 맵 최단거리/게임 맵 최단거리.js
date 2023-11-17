class Queue {
  constructor() {
    this.items = {};
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

function solution(maps) {
    let answer = -1;
    const n = maps.length;
    const m = maps[0].length;
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    const queue = new Queue();
    queue.enqueue([0, 0, 1]);
    maps[0][0] = 0;
    
    while(queue.size() > 0) {
        const [x, y, count] = queue.dequeue();
        if(x === n - 1 && y === m - 1) {
            answer = count;
            break;
        }
        
        for(let i = 0; i < 4; i++) {
            const [nx, ny] = [x + dx[i], y + dy[i]];
            
            if(nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
            if(maps[nx][ny] === 0) continue;
            
            queue.enqueue([nx, ny, count + 1])
            maps[nx][ny] = 0;
        }
    }
    
    return answer;

}