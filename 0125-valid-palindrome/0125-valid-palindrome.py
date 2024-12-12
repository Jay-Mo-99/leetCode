class Solution(object):
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """

        #removes all non alpha numeric items from the s
        temp = lower(s)
        temp = " ".join(re.split("[^a-zA-Z0-9]*",temp)).replace(" ","")
        print(temp)
        print(len(temp))
        #Compare with temp and reverse temp 
        if temp == temp[::-1]:
            return True
        else:
            return False
