/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let l = 0, r = 0, d = 0, temp = 0;
    while(l < matrix.length){
        if(r < matrix.length){
            temp = matrix[l][r];
            matrix[l][r] = matrix[r][l];;
            matrix[r][l] = temp;
            r+=1;
        }
        else{
            l+=1;
            r = l;
        }
    }
    r = matrix.length - 1;
    l = 0;
    while(l <= r){
        if(d < matrix.length){
            temp = matrix[d][l];
            matrix[d][l] = matrix[d][r];
            matrix[d][r] = temp;
            d+=1;
        }
        else{
            d = 0;
            l+=1;
            r-=1;
        }
    }
};