class Solution:
    def groupAnagrams(self, strs: List[str]):
    #Hashmap
    #{
        #sortedKey: [s]
    #}
    #
    anagram_map = {}
    #Iterate the str 
    for s in strs:
        sorted_s = "".join(sorted(s))
        if(not sorted_s in anagram_map):
            anagram_map[sorted_s] = []
        anagram_map[sorted_s] = s
    return list(anagram_map.value())

    

        