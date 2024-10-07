/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    //Convert string to array
    const arrayS = s.split("");
    const arrayT = t.split("");

    //Sort the array
    const orderS = arrayS.sort();
    const orderT = arrayT.sort();
    //If the orderS and orderT is different num of array, it means they are not same, so return false
    if(orderS.length !== orderT.length){
        return false;
    }else{
        //If they have same num of array
        //Check orderS and orderT is same or not, approach the each element of array 
        for(let i=0;i<orderT.length;i++){
            if(orderS[i]!==orderT[i]){
                return false;
            }

        }
        return true;

    }

};