/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  let answer = '';
  //Check each element(character) of string 's'
  for (let i = 0; i < s.length; i++) {
    //
    for (let j = 0; j < 2; j++) {
      let lt = i;
      let rt = i + j;
      console.log("I am lt in j loop"+lt);
      console.log("I am rt in j loop"+rt);
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