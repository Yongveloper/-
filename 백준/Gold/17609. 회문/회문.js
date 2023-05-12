const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [t, ...arr] = input;

function palindrome(str) {
  return str === str.split('').reverse().join('');
}

let answer = '';

for (const str of arr) {
  if (palindrome(str)) {
    answer += '0\n';
  } else {
    let found = false;
    let n = str.length;
    for (let i = 0; i < Math.floor(n / 2); i++) {
      if (str[i] !== str[n - i - 1]) {
        if (palindrome(str.slice(0, i) + str.slice(i + 1, n))) {
          found = true;
        }
        if (palindrome(str.slice(0, n - i - 1) + str.slice(n - i, n))) {
          found = true;
        }
        break;
      }
    }
    found ? (answer += '1\n') : (answer += '2\n');
  }
}

console.log(answer);
