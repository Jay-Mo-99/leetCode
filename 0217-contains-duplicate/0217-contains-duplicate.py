class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
    #Convert param(nums)list to set to remove the duplicate
    #Convert set to list again
        my_list = list(set(nums))
    #If nums doesn't have duplication, the my_list and nums leggth will be same. If they are same, return false.
        if(len(nums)==len(my_list)):
            return False
    #Otherwise, return true 
        return True
    