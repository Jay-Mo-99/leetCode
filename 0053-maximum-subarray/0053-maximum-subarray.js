/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function(nums){
    //Initialize each variables to nums[0]
    let max_so_far = nums[0];
    let max_ending = nums[0];

    //Loop for approaching each element of nums from nums[1] to nums[i]
    //For updating max_ending and max_so_far

    for(let i =1;i<nums.length;i++){
        max_ending = Math.max(nums[i], max_ending+nums[i]);;//Update the max_ending 
        //max_ending은 현재위치에서 끝나는 배열중 가장 큰 부분배열의 합이니까 max_ending은 nums[i]가 순차적으로 조회될때마다 업데이트
        max_so_far = Math.max(max_ending, max_so_far);//max_so_far은 지금까지 발견한 최대 부분의 배열의 합.
        //max_ending이랑 비교하서 더 큰 값이 amx_so_far이 된다
    }

    return max_so_far;

};
