/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let fizzBuzzArr = [];
    for(let i = 1; i <= n; i++) {
        let genString = "";
        if (i % 3 === 0 ) {
            genString += "Fizz"
        }
        if (i % 5 === 0) {
            genString+= "Buzz"
        }
        if (genString === "") {
            genString += i
        }
        fizzBuzzArr.push(genString);
    }
    return fizzBuzzArr;
};
