function solution(d, budget) {
    var answer = 0
    let sortedD = d.sort((a,b) => a-b)
     
    for(let i = 0; i < sortedD.length; i++) {
        if(budget < sortedD[i]) {
            return answer
        }
        budget -= sortedD[i]
        answer++
    
       
    }
   
    return answer;
}

