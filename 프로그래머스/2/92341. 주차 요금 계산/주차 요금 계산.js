function solution(fees, records) {
  const [pt, pp, m, p] = fees;
  const arr = records.map((item) => item.split(' '));
  arr.sort((a, b) => +a[1] - +b[1]);
  const map = new Map();
  let prevCar = arr[0];

  for (const [time, number, state] of arr) {
    // 23시59분 출차 차량 계산
    if (prevCar[1] !== number && prevCar[1].length > 0) {
      const [inHour, inMinuit] = prevCar[0].split(':');
      const totalTime = (23 - Number(inHour)) * 60 + (59 - Number(inMinuit));
      map.set(prevCar[1], (map.get(prevCar[1]) || 0) + totalTime);
      prevCar = [time, number, state];
    } else {
      if (state === 'OUT') {
        const [prevInHour, prevInMinuit] = prevCar[0].split(':').map(Number);
        const [outHour, outMinuit] = time.split(':').map(Number);
        let totalTime =
          outHour * 60 + outMinuit - (prevInHour * 60 + prevInMinuit);
        map.set(number, (map.get(number) || 0) + totalTime);
        prevCar = ['', '', ''];
      } else {
        prevCar = [time, number, state];
      }
    }
  }

  if (prevCar[1].length > 0) {
    const [inHour, inMinuit] = prevCar[0].split(':');
    const totalTime = (23 - Number(inHour)) * 60 + (59 - Number(inMinuit));
    map.set(prevCar[1], (map.get(prevCar[1]) || 0) + totalTime);
  }

  const answer = [];

  for (const totalTime of map.values()) {
    const price =
      totalTime <= pt ? pp : pp + Math.ceil((totalTime - pt) / m) * p;
    answer.push(price);
  }

  return answer;
}
