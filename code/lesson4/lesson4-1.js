// 459. 重复的子字符串
// 给定一个非空的字符串， 判断它是否可以由它的一个子串重复多次构成。
// 给定的字符串只含有小写英文字母， 并且长度不超过10000。
// 示例 1:
//     输入: "abab"
// 输出: True
// 解释: 可由子字符串 "ab"
// 重复两次构成。
// 示例 2:
//     输入: "aba"
// 输出: False
// 示例 3:
//     输入: "abcabcabcabc"
// 输出: True

// 解释: 可由子字符串 "abc"
// 重复四次构成。(或者子字符串 "abcabc"重复两次构成。)
// export default (str) => {
//     var reg = new RegExp(/^(\w+)\1+$/)
//     return reg.test(str)
// }
export default (arr) => {
    let len = arr.length
    if (len == 0) {
        return 0
    }
    return sum(arr, len-1)
}

function sum(arr,i) {
    if (i == 0) {
      return  arr[0]
    }
    return arr[i] + sum(arr,i-1)
}
