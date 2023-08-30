function solution(s) {
    if(s.length%2 == 0){ 
        // 짝수
        return s.substr(s.length/2-1,2)
    }else{ 
        // 홀수
        return s.substr(s.length/2,1)
    }   
}


// 단어 s의 가운데 글자를 반환하는 수
// 짝수라면 2글자를 반환한다.

