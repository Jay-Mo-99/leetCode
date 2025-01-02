class Solution(object):
    def countSubstrings(self, s):
        """
        :type s: str
        :rtype: int
        """
        dp = {}

        for end in range(len(s)):
            for start in range(end, -1, -1):
                if start == end:
                    dp[(start, end)] = True
                elif start + 1 == end:
                    dp[(start, end)] = s[start] == s[end]
                else:
                    dp[(start, end)] = s[start] == s[end] and dp[(start + 1, end - 1)]

        return list(dp.values()).count(True)