/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let row = matrix.length; //Save the row: The element num of total m
    let col = matrix[0].length;//Save the length num of the each element 
    let temp =[];
    let answer = [];

    for(let j=0;j<col;j++){
        for(let i =row-1;i>=0;i--){
            temp.push(matrix[i][j]);     
        }
        console.log("After i loop temp : "+temp);
        answer.push([...temp]);
        temp = [];
    }

    for(let k =0;k<row;k++){
        for(let l =0;l<col;l++){
            matrix[k][l] = answer[k][l]
        }
    }
    return matrix;
};