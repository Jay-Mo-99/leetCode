/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function(sentence) {
    let array = sentence.split(" ");//Convert sentence to array depends on the empty space ' '.
    let answer = 0;//The variable for saving the qualified element
    console.log(array)
    function containsNumber(str) {
        return /\d/.test(str);
    }
    for(let i=0;i<array.length;i++){
        if(!isNaN(array[i])||containsNumber(array[i])){
            //숫자 안되고 ''인 space안됨 
            console.log("Number Unvalid: "+array[i])
        }if(array[i].includes('-')&&array[i].indexOf('-')>0&&array[i][array[i].length-1]!=='-'){
            //여긴 숫자 이외의 모든거ㅛ 
            //There is at most one hyphen '-'. If present, it must be surrounded by lowercase characters ("a-b" is valid, but "-ab" and "ab-" are not valid).
            console.log("Hypen Valid: "+array[i])
            answer++;
        }if(array[i].includes('!')){
            if(array[i].indexOf('!')===0||array[i].indexOf('!')===array[i][array[i].length-1]){
                console.log("! Valid: "+array[i])
                answer++;
            }else{
                console.log("! UnValid: "+array[i])

            }

        }if(array[i].includes('.')){
            if(array[i].indexOf('.')===0||array[i].indexOf('.')===array[i][array[i].length-1]){
                console.log(". Valid: "+array[i])
                answer++;
            }else{
                console.log(". UnValid: "+array[i])

            }

        }if(array[i].includes(',')){
            if(array[i].indexOf(',')===0||array[i].indexOf(',')===array[i][array[i].length-1]){
                console.log(", Valid: "+array[i])
                answer++;
            }else{
                console.log(", UnValid: "+array[i])

            }

        }else{
            console.log("Valid: "+array[i])
            answer++;
        }
    }

    return answer;

};