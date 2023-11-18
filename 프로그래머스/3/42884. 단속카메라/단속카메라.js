function solution(routes) {
    routes.sort((a, b) => a[1] - b[1]);
    
    let camera = -30001; // 가장 작은 진입 지점
    let answer = 0;
    
    for (let route of routes) {
        if (camera < route[0]) { // 현재 카메라보다 진입 지점이 큰 경우
            camera = route[1]; // 카메라를 현재 차량의 진출 지점에 설치
            answer++; // 카메라 추가
        }
    }
    
    return answer;
}