const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [t, ...arr] = input;

function palindrome(s) {
  return s === s.split('').reverse().join('');
}

for (const str of arr) {
  if (palindrome(str)) {
    console.log(0); //회문인 경우
  } else {
    // 회문이 아닌 경우, 유사 회문인지 검사
    let found = false;
    let n = str.length; // 문자열 길이
    for (let i = 0; i < Math.floor(n / 2); i++) {
      if (str[i] !== str[n - i - 1]) {
        // 대칭이 아닌 인덱스를 찾은 경우
        // 앞쪽에 있는 해당 원소를 제거해 본 뒤에 회문 검사
        if (palindrome(str.slice(0, i) + str.slice(i + 1, n))) {
          found = true;
        }
        // 뒤쪽에 있는 해당 원소를 제거해 본 뒤에 회문 검사
        if (palindrome(str.slice(0, n - i - 1) + str.slice(n - i, n))) {
          found = true;
        }
        break;
      }
    }
    found ? console.log(1) : console.log(2);
  }
}
