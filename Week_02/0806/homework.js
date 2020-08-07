/**
 * 字典法-- 扩展性方法
 */
// 整除规则
const divisible = (molecule, denominator) => molecule % denominator == 0

const ThreeDivisible = value => divisible(value, 3)
const FiveDivisible = value => divisible(value, 5)
const ruleResult = {
    'Fizz': [ThreeDivisible],
    'Buzz': [FiveDivisible]
}
const result = str => {
    const fizzbuzz = []
    for (let word in ruleResult) {
        // 只要符合
        if (ruleResult[word].some(el => el(str))) fizzbuzz.push(word)
    }
    return fizzbuzz.join('') || str.toString()
}

var fizzBuzz = function (n) {
    const list = [];
    for (let sequence = 1; sequence <= n; sequence++) {
        list.push(result(sequence));
    }
    console.log('list:',list)
    return list
};


