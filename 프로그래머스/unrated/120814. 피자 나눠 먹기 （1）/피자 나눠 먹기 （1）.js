function solution(n) {
    //n 피자를 나눠먹을 사람의 수
    if(n < 7 ) {
        return 1;
    } else if(n / 7 === 1) {
        return n / 7;
    } else {
        return Math.ceil(n / 7);
    }
 }

 