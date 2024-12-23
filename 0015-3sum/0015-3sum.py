class Solution(object):
    def threeSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        triplets = set()

        for i in range(len(nums) - 2):
            seen = set()
            for j in range(i + 1, len(nums)):
                complement = -(nums[i] + nums[j])
                if complement in seen:
                    triplet = [nums[i], nums[j], complement]
                    triplets.add(tuple(sorted(triplet)))
                seen.add(nums[j])

        return list(triplets)        