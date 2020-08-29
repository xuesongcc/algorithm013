"use strict";

/**
 * 又见两数之和
 * @param { nums} Array
 * @param {target} target
 */
var towSum = function towSum(nums, target) {
  var map = {};
  var loop = 0,
      dis;

  while (loop < nums.length) {
    dis = target - nums[loop];
    if (map[dis] != undefined) return [map[loop], loop];
    map[nums[loop]] = loop;
    loop++;
  }
}; // const _clone = (obj) => {
//     let buf
//     if (obj instanceof Array) {
//         let i = obj.length
//         buf = []
//         while (i--) {
//             buf[i] = _clone(obj[i])
//         }
//         return buf
//     } else if (obj instanceof Object) {
//         buf = {}
//         for (let i in obj) {
//             buf[i] = _clone(obj[i])
//         }
//         return buf
//     } else {
//         return buf = obj
//     }
// }