/**
 * @param {number} n
 * @return {string[]}
 */

var fizzBuzz = function(n){
    let answer = Array(n).fill("");//Create the empty array including all elements are ""
    return answer.map((_,index)=>{
        const i = index +1;
        const three = i%3 === 0?"Fizz":"";
        const five = i%5 === 0?"Buzz":"";
        const current = three.concat(five);//
        return current === ""?i.toString():current;

    })
}