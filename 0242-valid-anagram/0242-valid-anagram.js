/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    //Convert string to array
    const arrayS = s.split("").sort();
    const arrayT = t.split("").sort();
    //If the orderS and orderT is different num of array, it means they are not same, so return false
    if(arrayS.length !== arrayT.length){
        return false;
    }else{
        //If they have same num of array
        //Check orderS and orderT is same or not, approach the each element of array 
        for(let i=0;i<arrayT.length;i++){
            if(arrayS[i]!==arrayT[i]){
                return false;
            }

        }
        return true;

    }

};