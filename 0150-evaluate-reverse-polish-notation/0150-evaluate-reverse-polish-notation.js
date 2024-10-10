/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    tokens.forEach((token) =>{
        //Regular Expression
        if(/^[+\-*/]$/.test( token ) ){
            const [y,x] = [stack.pop(),stack.pop()];
            stack.push( cal(x,y,token) );
        }else{
            stack.push( +token );//Unary Plus Operator
        }
    });
    return stack.pop();
    
};

    const cal = (x,y,op) => {
        switch(op) {
            case '+':return x+y;
            case '-':return x-y;
            case '*':return x*y;
            case '/':return x/y|0; //Bitwise operator                    
        }
    }