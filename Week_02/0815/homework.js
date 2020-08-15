/**
 * 又见两数之和
 * @param { nums} Array
 * @param {target} target
 */
var towSum = function (nums, target) {
    let map = {}
    let loop = 0, dis;
    while (loop < nums.length) {
        dis = target - nums[loop]
        if (map[dis] != undefined) return [map[loop], loop]
        map[nums[loop]] = loop
        loop++
    }
}