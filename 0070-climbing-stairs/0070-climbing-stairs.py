class Solution(object):
    def climbStairs(self, n):
        """
        :type n: int
        :rtype: int
        """
        if n==1:
            return n
        if n == 2:
            return 2
        seen = [1, 2]
        i = 3
        while i < n+1:
            seen.append(seen[i-3]+seen[i-2])
            i+=1


        return seen[-1]