function rob(nums: number[]): number {
    let prev2 = 0, prev1 = 0;
    for (let i = 0; i < nums.length; i++) {
        const cur = Math.max(nums[i] + prev2, prev1);
        prev2 = prev1;
        prev1 = cur;
    }
    return prev1;
}