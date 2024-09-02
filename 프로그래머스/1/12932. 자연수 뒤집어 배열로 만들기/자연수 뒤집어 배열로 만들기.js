function solution(n) {
    var arr = String(n).split('');
    var answer = [];

    for(var i=arr.length-1; i>=0; i--){
        answer.push(Number(arr[i]));
    }
    return answer;
}