function solution(x) {
    let sum = 0;
    let num = String(x).split("");
 
    for(let i = 0; i < num.length; i++){
        sum += Number(num[i]);
    }

    return x % sum == 0 ? true : false;
 }