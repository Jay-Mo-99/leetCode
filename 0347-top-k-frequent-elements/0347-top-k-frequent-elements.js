/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    nums.sort();
    let temp = nums.reduce((accu,curr)=>{
        accu[curr] = (accu[curr]||0)+1;
        return accu;

    },{});
    console.log(temp);/**temp는 Object형태로 존재 */
    let downSorted = Object.entries(temp).sort((a,b)=>(b[1]-a[1]));/**Object의 value에 대한 내림차순 정렬 */
    let result = []
    for(let element of downSorted){
        result.push(element[0]);
    }


    // let tempObj = Object.fromEntries(downSorted);
    // console.log(tempObj);
    // let result = Object.keys(tempObj);
    
    result = result.slice(0,k);
    console.log(result);
    return result;
    
};