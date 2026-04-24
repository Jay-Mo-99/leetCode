class Solution:
    def twoSum(self, nums: List[int], target: int):
        hashmap = {}
        for i, num in enumerate(nums):
            complete = target -num
            if complete in hashmap:
                return [hashmap[complete],i]
            hashmap[num] = i
        return []