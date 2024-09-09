function solution(arr)
{
    var answer = [];
    let count = 0;
    for(let i = 0; i < 1000000; i++) {
        if(arr[i] !== arr[i+1]) {
            answer.push(arr[i])
        }
    }
    return answer;
}