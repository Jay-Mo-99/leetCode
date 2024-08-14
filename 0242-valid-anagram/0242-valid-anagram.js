/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let tempS = Object.assign([],s);/**Convey string s to array tempS  */
    let uniqueS = [...tempS];/**Change tempS to uniqueS로   */
    tempS.sort();

    let tempT = Object.assign([],t);/**Convey string t to array tempT  */
    let uniqueT = [...tempT];
    tempT.sort();


    console.log(uniqueS)
    console.log(uniqueT)


    if(JSON.stringify(tempS) === JSON.stringify(tempT)){
        return true;
    }else{
        return false;
    }


};