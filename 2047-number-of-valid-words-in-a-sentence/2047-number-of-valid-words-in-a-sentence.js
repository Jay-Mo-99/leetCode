/**
 * @param {string} sentence
 * @return {number}
 */



var countValidWords = function(sentence){
    let list = sentence.split(' ');//Split the sentence to array depends on ' '
    //filter method copy the element of array and accepted the funtion inside the filter 
    let filtered = list.filter(s=>{
        if(/\d/.test(s)||s === '')return false //removes anything with number or is blank 
        if(/^[!,.]$/.test(s))return true// If punctuation only return true
        if(/^\w+[!,.]?$/.test(s)) return true //word + optional punctuation
        if(/^\w+[-]?\w+[!,.]?$/.test(s)) return true // word + optional hypen + word + optional punctuation

        return false 
    })
    
    return filtered.length

}