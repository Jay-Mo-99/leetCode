class Solution:
    def groupAnagrams(self, strs: List[str]):
        dict = {}
        #Iterate the input strs
        for s in strs:
            key = "".join(sorted(s)) #Sorted s is key 
            if key not in dict:
                dict[key] = []
            dict[key].append(s) #Add the s to the key
        return list(dict.values())

        #Sort the each str in strs
        #If sorted str are same, be arranged the original tr

        
        