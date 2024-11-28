/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s){
    let answer = []//Stack for saving the correct type following requirements. 
    if(s.length<=1){
        console.log("Only have a one or zero character in the string s")
        return false;
    }

//Loop for approaching each element from the string s
    for(let i =0;i<s.length;i++){
        if(s[i]==="{"||s[i]==="("||s[i]==="["){
            answer.push(s[i])//If the open bracket push the answer first. 
        }else{
            //If the s[i] is closed bracket 
            if(s[i]===")"){
                if(answer.pop()!=="("){
                    return false;
                }else{
                    console.log(") match with ( " + answer);
                }
            }else if(s[i]==="}"){
                if(answer.pop()!=="{"){
                    return false;
                }else{
                    console.log("} match with { " + answer);
                }
            }else if(s[i]==="]"){
                if(answer.pop()!=="["){
                    return false;
                }else{
                    console.log("] match with [ " + answer);
                }
            }
        }
    }
    if(answer.length===0){
        return true;
    }else{
        return false;
    }
};