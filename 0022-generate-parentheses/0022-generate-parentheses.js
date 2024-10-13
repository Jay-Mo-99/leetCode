const generateParenthesis = (n) => {
  const res = [];

//Function for backtracking (Recursion Fuction)
  const backTracking = (openB, closeB, currentString) => {
    //If using all parentheses, push to the res stack. 
    if (currentString.length === 2 * n) {
      res.push(currentString);
      return;
    }
    //If the open bracket(l) is less than parameter(n)
    //Add the open bracket to the string(s)
    if (openB < n) backTracking(openB + 1, closeB, currentString + '(');
    //If the close bracket(r) is less than the number of open bracket(l)
    //Add the close bracket to the string(s)  
    if (closeB < openB) backTracking(openB, closeB + 1, currentString + ')');
  };
//Call the initial back tracking 
//First calling of the recurision function 
  backTracking(0, 0, '');
  return res;
};