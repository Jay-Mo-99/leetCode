/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const retArray = [];
    addParentheses('', 0, 0, n, retArray);
    return retArray;
};

const addParentheses = (currString, open, closed, n, retArray) => {
    if (open === n && closed === n) {
        retArray.push(currString);
    }


    if (open < n) {
        addParentheses(currString + '(', open + 1, closed, n, retArray);
    }

    if (closed < open) {
        addParentheses(currString + ')', open, closed + 1, n, retArray)
    }
}