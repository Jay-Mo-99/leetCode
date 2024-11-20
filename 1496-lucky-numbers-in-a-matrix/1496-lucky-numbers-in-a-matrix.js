/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function(matrix) {
    //console.log(matrix.length) //The count of row
    for(let i =0;i<matrix.length;i++){
        let row = matrix[i]//Each row 
        let minRow = Math.min(...row)//Save the min num of each row 
        let indexCol = row.indexOf(minRow);
        if(matrix.every(elem=> elem[indexCol]<=minRow)){
            return [minRow]
        } 
    }
    return [];

};