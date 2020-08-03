/**
 * move zero  移动零，尽可能减少操作次数，再原数组上操作
 */

var moveZeroes = function (nums){
    if(nums == null) return false
    let j = 0
    for(var i = 0; i<nums.length;i++){
        if(nums[i] != 0){
           let tem = nums[i]
           nums[i] = nums[j]
           nums[j++] = tem
        }
    }
    
}
