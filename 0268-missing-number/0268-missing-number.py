class Solution(object):
    def missingNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        lastNum = len(nums)
        # for num in range(len(nums)):
        nums.sort()
        #만약 lastNum
        if(nums[len(nums)-1] != len(nums)):
            return len(nums)
        for i in range(len(nums)):
            if nums[i] != i:
                print(nums[i],i)
                return i