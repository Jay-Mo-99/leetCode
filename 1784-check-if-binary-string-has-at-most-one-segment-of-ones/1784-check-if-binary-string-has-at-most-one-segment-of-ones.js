/**
 * @param {string} s
 * @return {boolean}
 */

var checkOnesSegment = function(s){
    let segment = 0;
    for (let i=0;i<s.length;i++){
        if(s[i]=== "1" && (i===0||s[i-1]==="0")){
            segment ++;
        }

        if(segment>1){
            return false;
        }
    }

    return true;
}