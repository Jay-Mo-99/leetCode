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
//You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
//Don't use new array, Edit the original matrix and return it 
    for(let k =0;k<row;k++){
        for(let l =0;l<col;l++){
            matrix[k][l] = answer[k][l]
        }
    }
    return matrix;
};