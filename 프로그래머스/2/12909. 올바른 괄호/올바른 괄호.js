function solution(s){
    var answer = true;
    let count = 0;
    var array = s.split("");
    for(let i = 0; i < array.length; i++) {
        if(array [i] === "(") {
            count += 1;
        } else {
            count += -1;
        }
        if(count < 0 ) {
            return false
        }
    }
    return count === 0 ?true :false
}