class Solution(object):
    def longestConsecutive(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if len(nums) ==0:
            return 0
        #중복제거 set 
        nums = list(set(nums))
        #sort 
        nums.sort()    
        print(nums)

        #Variables
        longest = 1
        current = 1

        #Approah all element of nums for checking the sequnece number or not
        for i in range(1,len(nums)):
            if nums[i] == nums[i-1] + 1:
                current +=1
                longest = max(longest, current) #최대길이 업데이트 
            else:#연속 되지 않을 시 current 1로 초기화
                current =1
        return longest
