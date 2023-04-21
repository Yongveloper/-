const array = require('fs').readFileSync('/dev/stdin').toString().split('\n');
array.shift();

const stack = [];

const fun = {
  pop: () => stack.pop() || -1,
  size: () => stack.length,
  empty: () => stack[0] ? 0 : 1,
  top: () => stack[stack.length - 1] || -1,
  push: (item) => {
    stack.push(item.split(" ")[1]); 
    return '';
  }
}

const result = array.reduce((acc, v) => 
	acc + (fun[v] ? `${fun[v]()}\n` : fun.push(v)), '');

console.log(result);