function solution(arr1, arr2) {
    
    const answer = arr1.map((value, index) => value.map((inner, innerIndex) => inner + arr2[index][innerIndex]))
    
    return answer;
}