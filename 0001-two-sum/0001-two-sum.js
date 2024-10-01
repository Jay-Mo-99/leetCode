/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {


// 배열이 내부의 요소 중 두개의 요소를 pick하도록 한다
 for(let i = 0;i<nums.length-1;i++){

    for(let j = i+1;j<nums.length;j++){
        if(nums[i] + nums[j] === target){
            console.log(nums[i]);
            console.log(nums[j]);
            return [i,j];
        }else{
            continue;
        }
    }
 }

//그 pick된 요소를 더한다 

//그 요소의 합이 target이면 return

};