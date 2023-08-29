function solution(arr) {
    
    var answer = [];
 
    if (arr.length<=1){
        return [-1];

    }else{
        
        arr.splice(arr.indexOf(Math.min(...arr)),1);
        answer =  arr;
    }   
    
    return answer
}

// 1. 정수를 저장한 배열 애서 가장작은수를 제거.
// 2. 리턴하려는 배열이 빈 배열이면 빈배열에 -1을 채워서 리턴 
