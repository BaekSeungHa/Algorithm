function solution(n) {
    let number = String(n).split("");
    let answer = number.sort(function(a,b) {
        return b-a;
    })
     
     return Number(answer.join(""))
}