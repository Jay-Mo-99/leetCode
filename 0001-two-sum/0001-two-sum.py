class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        indices = {value:idx for idx,value in enumerate(nums)}
        #{값:인덱스}
        print(indices)
         #Dictionary comprehension
        
        for i,v in enumerate(nums):
            complement = target - v
            if complement in indices and indices[complement] != i:
                j=indices[complement]
                return [i,j]