function solution(s){
    var answer = true;
    var test = s.split("")
    var p = 0;
    var y = 0
    for(let i = 0; i<=test.length; i++) {
        if(test[i] === 'p' ||test[i] ==="P") {
            p++;
            
        } else if(test[i] === "y" || test[i] === "Y"){
            y++
            
        }
    }

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return p === y ? true :false;
}