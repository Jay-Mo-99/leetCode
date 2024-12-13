class Solution(object):
    def topKFrequent(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[int]
        """

        #Create dictionary which have a key(element of nums) and value(count num of the element)
        count = {}
        for i in nums:
            try: count[i] += 1
            except: count[i] = 1
        #print(count)
        
        #Sort depends on the value descending order
        sorted_count = sorted(count.items(),key=lambda x:x[1],reverse=True)
        dic_count = dict(sorted_count[:k])
        return dic_count.keys()

        #sorted_count = sorted(count.items(),key=lambda item:item[1],reverse=True)

        #0에서 k-1까지 key값을 반환 
        # answer = []
        # for i in range(k):
        #     answer.append(sorted_count.keys()[i])
        
        # return answer

        