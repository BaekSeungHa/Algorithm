function solution(price, money, count) {
    var answer = -1;
    var 필요금액 = 0;
    for(let i = 1; i <= count; i++) {
       필요금액 += price * i
    }
     return 필요금액 > money ? 필요금액 - money : 0;
}