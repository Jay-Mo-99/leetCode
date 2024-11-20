/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  let answer = '';
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < 2; j++) {
      let lt = i;
      let rt = i + j;
      while (s[lt] && s[lt] === s[rt]) {
        lt--;
        rt++;
      }
      const tmpStr = s.slice(lt + 1, rt);
      if (tmpStr.length > answer.length) answer = tmpStr;
    }
  }
  return answer;
};