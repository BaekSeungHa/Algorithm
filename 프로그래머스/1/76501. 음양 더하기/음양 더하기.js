function solution(absolutes, signs) {
    var answer = 0
    for(let i = 0 ; i <absolutes.length; i++) {
        answer += signs[i] === true ? absolutes[i] : -absolutes[i]
    }
    return answer;
}