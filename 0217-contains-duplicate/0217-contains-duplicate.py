class Solution(object):
    def containsDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        my_list = list(set(nums))
        print(nums)
        print(my_list)
    
    
        if len(my_list) == len(nums):
            return False
        else:
            return True