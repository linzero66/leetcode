// 922. 按奇偶排序数组 II
// 给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。
// 对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。
// 你可以返回任何满足上述条件的数组作为答案。
/**
 * @param {number[]} A
 * @return {number[]}
 */



export default (arr) => {
    let evenNum = 1, oddNum = 0;
    let resultArr = []
    for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[i] % 2 == 0) {
            resultArr[oddNum] = arr[i]
            oddNum += 2
        } else {
            resultArr[evenNum] = arr[i]
            evenNum += 2
        }
    }
    return resultArr;
}