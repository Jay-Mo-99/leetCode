/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let result=[];
    /**loop */
    for(let i=0;i<n+1;i++){
        /* if statement for multiple of 15 */
        if(i==0){
            result[i-1] = i.toString();
        }
        else if(i%15 ==0){

            result[i-1] = "FizzBuzz"

        }else if(i%5 ==0){

            result[i-1] = "Buzz"
        }else if(i%3==0){
            result[i-1] = "Fizz"
        }else{
            result[i-1] =  i.toString();
        }
        
    }

    return result;
};