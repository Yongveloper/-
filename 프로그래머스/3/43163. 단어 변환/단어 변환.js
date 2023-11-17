function solution(begin, target, words) {
    if (!words.includes(target)) return 0;

    let visited = Array(words.length).fill(false);
    let queue = [[begin, 0]];

    while (queue.length > 0) {
        let [current, level] = queue.shift();
        if (current === target) return level;

        words.forEach((word, index) => {
            if (!visited[index] && canChange(current, word)) {
                visited[index] = true;
                queue.push([word, level + 1]);
            }
        });
    }

    return 0;
}

function canChange(current, next) {
    let count = 0;
    for (let i = 0; i < current.length; i++) {
        if (current[i] !== next[i]) count++;
        if (count > 1) return false;
    }
    return true;
}
