class Solution(object):
    def climbStairs(self, n):
        """
        :type n: int
        :rtype: int
        """
        a,b = 1,2 #F(0) = 1, F(1) =2
        for i in range(1,n):
            a,b = b, a+b #Update a and b each iteration
            #Fn = Fn-1 + Fn-2

        return a
        