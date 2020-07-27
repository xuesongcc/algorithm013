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