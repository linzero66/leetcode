// 696. 计数二进制子串
// 给定一个字符串 s， 计算具有相同数量0和1的非空(连续) 子字符串的数量， 并且这些子字符串中的所有0和所有1都是组合在一起的。

// 重复出现的子串要计算它们出现的次数。

// 示例 1:

//     输入: "00110011"
// 输出: 6
// 解释: 有6个子串具有相同数量的连续1和0：“ 0011”，“ 01”，“ 1100”，“ 10”，“ 0011” 和“ 01”。

// 请注意， 一些重复出现的子串要计算它们出现的次数。

// 另外，“ 00110011” 不是有效的子串， 因为所有的0（ 和1） 没有组合在一起。
// 示例 2:

//     输入: "10101"
// 输出: 4
// 解释: 有4个子串：“ 10”，“ 01”，“ 10”，“ 01”， 它们具有相同数量的连续1和0。
// 注意：

// s.length 在1到50, 000 之间。
// s 只包含“ 0” 或“ 1” 字符。


//我的解
// export default (s) => {
//     let sum = 0
//     for (let i = 0; i < s.length - 1; i++) {
//         if (matchStr(s.slice(i))) {
//             sum += 1
//         }
//     }
//     return sum
// }

// function matchStr(str) {
//     let initNumLength = 1;
//     let difNum = 0;
//     let is_find = true;
//     let strArray = str.split('')
//     for (let i = 1; i < strArray.length; i++) {
//         if (strArray[0] == strArray[i]) {
//             initNumLength += 1
//         } else {
//             difNum = i
//             break;
//         }
//     }

//     if (strArray.slice(difNum).length >= initNumLength) {
//         let targetArr = strArray.slice(difNum, difNum + initNumLength)
//         for (let j = 0; j < targetArr.length; j++) {
//             if (strArray[0] == targetArr[j]) {
//                 is_find = false;
//                 break;
//             }
//         }
//         return is_find
//     } else {
//         return false
//     }

// }

export default (s) => {
    // pre 前一个数字连续出现的次数，cur 当前数字连续出现的次数，result 结果子串个数
    let pre = 0
    let cur = 1
    let result = 0
    for (let i = 0, len = s.length - 1; i < len; i++) {
        // 判断当前数字是否与后一个数字相同
        if (s[i] === s[i + 1]) { // 相同，则当前数字出现的次数cur加1
            cur++
        } else { // 不同，则当前数字事实上变成了前一个数字，当前数字的次数重置为1
            pre = cur
            cur = 1
        }
        if (pre >= cur) { // 前一个数字出现的次数 >= 后一个数字出现的次数，则一定包含满足条件的子串
            result++
        }
    }
    return result
};