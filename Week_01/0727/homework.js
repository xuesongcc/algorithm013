/**
 * 
 * 学习总结：
 * 数组重复项中和两数之和；简单，基础，看到基础还是不稳固。
 */


/**
 * 删除排序数组重复项
 */
const removeDu = (nums)=>{
    if(!Array.isArray(nums)) return
    let res =0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] != nums[res]){
            res++
            nums[res] = nums[i] 
        }
    }
    return res+1
}

/**
 * 两数之和
 */
var twoSum = function(nums, target) {
    for (var i=0;i<nums.length;i++){
        for(var j = i+1;j<nums.length;j++){
            if(target == nums[i] + nums[j]){
                return [i,j]
            }
        }
    }
};
/**
 * 旋转数组
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function(nums, k) {
//     let a =  nums.reverse().slice(0,k).reverse()
//     let b = nums.slice(k,nums.length).reverse()
//     return a.concat(b) 
// };

var rotate = function(nums, k) {
   
    var n = nums.length;
    k %= n;
    if(n == 1){
        return;
    }
    var tmp = 0;
    reverse(0,n-1);// 整体翻转
    reverse(0,k-1);// 该位置翻转
    reverse(k,n-1);// 后半部分翻转
    function reverse(start,end) {
        while (start < end) {
            tmp = nums[start];
            nums[start] = nums[end];
            nums[end] = tmp;
            start++;
            end--;
        }
    }
};
