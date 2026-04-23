class Solution:
    def isAnagram(self, s: str, t: str):
                #If the length of sorted strings are not same, 
        #Return False
        if(len(s)!=len(t)):
            return False
        #Sort s and t
        sorted_s="".join(sorted(s))
        sorted_t="".join(sorted(t))

        #Compare each character of strings
        for i in range(len(sorted_s)):
            #If s[i] is not same with t[i], return false
            if(sorted_s[i] != sorted_t[i]):
                return False
        return True #Otherwise, return true
        