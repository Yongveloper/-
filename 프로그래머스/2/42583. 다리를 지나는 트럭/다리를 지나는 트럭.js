function solution(bridge_length, weight, truck_weights) {
    const bridge = Array(bridge_length).fill(0);
    let currWeight = 0;
    let time = 0;
    
    while(truck_weights.length) {
        time++;
        currWeight -= bridge.shift();
        if(currWeight + truck_weights[0] > weight) {
            bridge.push(0);
        } else {
            const curTruck = truck_weights.shift();
            currWeight += curTruck;
            bridge.push(curTruck);
        }
    }
    
    return time + bridge_length;
}