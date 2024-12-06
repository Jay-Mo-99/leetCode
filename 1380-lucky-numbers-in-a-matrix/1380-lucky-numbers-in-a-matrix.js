/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function(matrix) {
    // Loop through each row of the matrix
   for(let i =0;i<matrix.length;i++){
       let row = matrix[i]//Current row
       let minRow = Math.min(...row)// Find the minimum value in the current row
       let index = row.indexOf(minRow); //Get the column index of the minimum value
       //matrix every can chech the all element is accepted the all criteria
       //every can check all element is satisfied the all critera at the same time
       if(matrix.every(elem=> elem[index]<=minRow)){
       // Example: In [[3, 6], [7, 1], [5, 2], [4, 8]], "3" is minRow in row 0 (index 0),
       //In this case, every method check elem[0] <= 3,(3<=3,7<=3,5<=3,4<=3) → Condition fails
       //Example: In [[3,7,8],[9,11,13],[15,16,17]], "3" is minRow in row 0(index 0),
       //In this case, every method check elem[0]<=3,(3<=9 ->false)
           return [minRow]
       } 
   }
   return [];

};