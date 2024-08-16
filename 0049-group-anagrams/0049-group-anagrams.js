/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();
/**1. 배열의 각 string들을 각 char을 포함한 배열로 바꿔준다 */
/**2. char의 배열을 sort해준다  */
/**3. sort 한 char의 배열을 join해서 다시 string으로 만든다. 겹치는 string은 서로 anagram  */
/**4. 겹치는 string을 가지는 애들끼리 배열로 묶어준다
-> 겹치는 string을 key, 그 string을 가지는 원본의 string을 value로 하여 map을 만들고 map의 value만을 출력한다  */


/**split 메소드는 string 형태에 적용 가능하다. 따라서 loop문으로 strs의 각 요소에 접근하여 split해야 각 요소를 char array로 바꿀 수 있다.   */
    for(let i of strs){
        const word = i.split('').sort().join('');/**split 한 배열을 바로 오름차순 정렬로 sort한다 */
        map.set(word,[i]);

    }
    return [...map.values()];

    
};