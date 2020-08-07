/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 暴力破解
var maxSlidingWindow = function(nums, k) {
    if(k<=1 ) return nums
    
    let result = []
    for(let i = 0;i<nums.length -k +1;i++){
        result.push(Math.max(...nums.slice(i,i+k)))
    }
    return result
    
};
