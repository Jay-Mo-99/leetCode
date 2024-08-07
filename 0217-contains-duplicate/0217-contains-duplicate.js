/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let answer = true;
    const sets = new Set(nums)
    console.log(nums.length);
    console.log(sets.size);
    if(nums.length == sets.size){
        answer = false;
        return answer;
    }
    return answer;
    
};