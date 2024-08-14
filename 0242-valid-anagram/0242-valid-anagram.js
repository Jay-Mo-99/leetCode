/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let tempS = Object.assign([],s);
    let uniqueS = [...tempS];
    uniqueS.sort();

    let tempT = Object.assign([],t);
    let uniqueT = [...tempT];
    uniqueT.sort();


    console.log(uniqueS)
    console.log(uniqueT)


    if(JSON.stringify(uniqueS) === JSON.stringify(uniqueT)){
        return true;
    }else{
        return false;
    }


};