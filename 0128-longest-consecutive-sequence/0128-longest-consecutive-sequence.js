/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    //Sort the array to ascending order (min -> max)
    nums.sort((a,b)=>a-b);
    //Eliminate the duplication element of the array 
    const set = new Set(nums);
    const uniqueArr = [...set];
    let lengthOfCon = 1; //Variable for checking the length of the longest consecutive elements
    let max =1;
    //Check the uniqueArr is the empty or not 
    if(uniqueArr.length === 0){
        return 0;
    }
    //If the uniqueArr is not empty,
    //Check the next element is the same as the element of the uniqueArr plus one 

    for(let i=1;i<uniqueArr.length;i++){
        if(uniqueArr[i] > uniqueArr[i-1] && Math.abs(uniqueArr[i]-uniqueArr[i-1]) ===1){
                lengthOfCon++;
                max = Math.max(max,lengthOfCon);
        }else if(uniqueArr[i] === uniqueArr[i-1]){
            continue;
        }
        else{
            lengthOfCon = 1;
        }
    }

    return max;


    

    
};