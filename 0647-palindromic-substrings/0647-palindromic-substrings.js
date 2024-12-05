/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let count = 0;

    function expandAroundCenter(left,right){
        while(left>=0&&right<s.length&&s[left]===s[right]){
            count++;
            left--;
            right++;
        }
    }
    
    for (let i = 0; i < s.length; i++) {
        // 홀수 길이 팰린드롬
        expandAroundCenter(i, i);
        // 짝수 길이 팰린드롬
        expandAroundCenter(i, i + 1);
    }    

    return count;
};