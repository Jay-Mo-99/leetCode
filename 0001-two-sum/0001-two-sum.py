class Solution(object):
    def twoSum(self, nums, target): 
        nums_with_index = [(num,i) for i,num in enumerate(nums)]
        nums_with_index.sort()
        left,right = 0,len(nums)-1
        while left < right:
            if nums_with_index[left][0] + nums_with_index[right][0] == target:
                return [nums_with_index[left][1],nums_with_index[right][1]]
            elif nums_with_index[left][0] + nums_with_index[right][0] < target:
                left +=1
            else:
                right -=1
        return []