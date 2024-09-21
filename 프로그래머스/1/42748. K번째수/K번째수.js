function solution(array, commands) {
    var answer = [];
    for (var i = 0; i < commands.length; i++){
        let selectedValue = array.slice(commands[i][0] - 1 , commands[i][1]);
        
        selectedValue.sort((a,b)=>a-b);
        
        answer.push(selectedValue[commands[i][2] - 1]);
    }
    return answer;
}