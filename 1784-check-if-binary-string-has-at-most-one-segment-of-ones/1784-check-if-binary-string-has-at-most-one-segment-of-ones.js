/**
 * @param {string} s
 * @return {boolean}
 */

var checkOnesSegment = function(s){
    let segment = 0;
    for (let i=0;i<s.length;i++){
        //만약에 i가 0이라서 첫번째 순서면 일단 무조건 segement를 증가시키고
        //다음 루프로 s[i] 를 살피도록 한다 
        if(s[i]=== "1" && (i===0 ||s[i-1]==="0")){
            segment ++;
        }

        if(segment>1){
            return false;
        }
    }

    return true;
}