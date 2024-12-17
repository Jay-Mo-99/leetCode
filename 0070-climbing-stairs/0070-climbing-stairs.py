class Solution(object):
    def climbStairs(self, n):
        """
        :type n: int
        :rtype: int
        """
        if n<3:
            return n
        pre,cur = 1,2
        for _ in range(n-2):
            pre,cur = cur,pre+cur
        return cur