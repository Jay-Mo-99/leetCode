/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    nums.sort();/**오름차순 정렬  */
    /**Change the nums array to object that checks the num of elements */
    let temp = nums.reduce((accu,curr)=>{
        accu[curr] = (accu[curr]||0)+1;
        return accu;
    },{});
    /**Sort the object by descending order of value  */
    let downSorted = Object.entries(temp).sort((a,b)=>(b[1]-a[1]));
    let result = []
    /**Create the array for just */
    for(let element of downSorted){
        result.push(element[0]);
    }
    /**Cut off the key of the object*/
    result = result.slice(0,k); /**인덱스 0번째부터 k번째까지 자르기 */
    console.log(result);
    return result;
    
};