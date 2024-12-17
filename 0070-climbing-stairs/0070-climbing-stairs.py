class Solution(object):
    def climbStairs(self, n):
        """
        :type n: int
        :rtype: int
        """
        a,b = 1,2

        for i in range(1,n):
            a,b = b, a+b
            print(a)
            print(b)

        return a