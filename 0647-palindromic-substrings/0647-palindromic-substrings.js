/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  const res = [];

  const dfs = (start = 0, arr = []) => {
    res.push(arr);
    
    for (let i = start; i < s.length; i++) {
      dfs(i + 1, [...arr, s[i]]);
    }
  };
   dfs();

  return res;
};