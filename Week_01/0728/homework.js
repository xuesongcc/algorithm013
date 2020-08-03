

/**
 * 给定一个二叉树，找出其最大深度。
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(root == null ) return 0
    const leftD = maxDepth(root.left)
    const rightD = maxDepth(root.right)
    return Math.max(leftD,rightD) +1
};

/**
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 * @param {*} nums 
 * @param {*} target 
 */
var twoSumMutation = function(nums, target) {
    let map= {}
    let loop = 0;
    let dis;
    let result = []
    let resultIndex = []
    while(loop< nums.length){
        dis = target - nums[loop]       
        if(map[dis] != undefined){
            result.push(dis,nums[loop])
            resultIndex.push(map[dis],loop)
        }
        // 记录map
        map[nums[loop]] = loop
        loop++
    }
    // return resultIndex
    return result 
};
console.log(twoSumMutation([2,4,5,1,8,7,11,33],9))