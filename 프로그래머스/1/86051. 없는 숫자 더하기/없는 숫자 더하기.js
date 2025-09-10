function solution(numbers) {
    let answer = 0
    for(let i =0; i <= 9; i++) {
         if( numbers.find((item) => item === i) === undefined ) {
             answer += i
         }
     }
         
return answer
  }