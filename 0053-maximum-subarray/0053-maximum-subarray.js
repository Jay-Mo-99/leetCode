/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // 초기화
    let max_so_far = nums[0];
    let max_ending = nums[0];

    // 배열 순회
    for (let i = 1; i < nums.length; i++) {
        // 현재 요소를 포함할지 새로 시작할지 결정
        max_ending = Math.max(nums[i], max_ending + nums[i]);
        // 최대값 갱신
        max_so_far = Math.max(max_so_far, max_ending);
    }

    return max_so_far;
};
