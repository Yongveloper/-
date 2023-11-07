function solution(nums) {
    const choiceCount = Math.floor(nums.length / 2)
    const setSize = new Set([...nums]).size
    
    return setSize < choiceCount ? setSize : choiceCount
}