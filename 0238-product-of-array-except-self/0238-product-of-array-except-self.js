/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let leftMulti = [];
    let tempLeft = 1;
    let tempRight = 1;
    let rightMulti = [];
    let result = [];

    for(let i = 0;i<nums.length;i++){
        leftMulti.push(tempLeft);
        tempLeft = tempLeft * nums[i];
    }

    for(let j = nums.length - 1;j>=0;j--){
        rightMulti[j] = tempRight;
        tempRight = tempRight * nums[j];
    }

    for(let k = 0;k<nums.length;k++){
        let temp = leftMulti[k]*rightMulti[k];
        result.push(temp);
    }
    return result;

};