/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const nStack = [];//Assign the Stack for number
        let answer =0; //Variable for store the answer of calculation
    //If the element of the tokens are operator, push the oStack, if not push the nStack
    for(e of tokens){
        let top = 0;
        let preTop = 0;
        if(e === "+"){
            top = nStack.pop();
            preTop = nStack.pop();
            answer = parseInt(preTop) + parseInt(top);
            nStack.push(answer);
            console.log("After +" + answer);

        }else if(e === "-"){
            top = nStack.pop();
            preTop = nStack.pop();
            answer = preTop - top;
            nStack.push(answer);
            console.log("After -" + answer);
        }else if(e === "*"){
            top = nStack.pop();
            preTop = nStack.pop();
            answer = preTop * top;
            nStack.push(answer)
            console.log("After *" + answer);;

        }else if(e === "/"){
            top = nStack.pop();
            preTop = nStack.pop();
            answer = Math.trunc(preTop/top);
            nStack.push(answer);
            console.log("After /" + answer);;

        }else{
            nStack.push(e) 
        }

    }
    return parseInt(nStack[nStack.length-1]);

};