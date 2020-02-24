// 89. 格雷编码
// 格雷编码是一个二进制数字系统， 在该系统中， 两个连续的数值仅有一个位数的差异。

// 给定一个代表编码总位数的非负整数 n， 打印其格雷编码序列。 格雷编码序列必须以 0 开头。
// 示例 1:
// 输入: 2
// 输出: [0, 1, 3, 2]
// 解释:
// 00 - 0
// 01 - 1
// 11 - 3
// 10 - 2

// 对于给定的 n， 其格雷编码序列并不唯一。
// 例如，[0, 2, 3, 1] 也是一个有效的格雷编码序列。

// 00 - 0
// 10 - 2
// 11 - 3
// 01 - 1
// 示例 2:

// 输入: 0
// 输出: [0]
// 解释: 我们定义格雷编码序列必须以 0 开头。
// 给定编码总位数为 n 的格雷编码序列， 其长度为 2^n。 当 n = 0 时， 长度为 2^0 = 1。
// 因此， 当 n = 0 时， 其格雷编码序列为[0]。

//   输入1   输入2  输入3
//   0       00     000
//   1       01     001
//           11     011
//           10     010
//                  110
//                  111
//                  101
//                  100
//    解题方法：从上一个的数组入手

var grayCode = (n) => {
    if (n === 1) {
        return [0,1]
    } else {
        let prev = grayCode(n - 1)
        let result = []
        let max = Math.pow(2,n)-1
        for (let i = 0; i < prev.length; i++){
            result[i] = `0${prev[i]}`
            result[max - i] = `1${prev[i]}`
        }
        return result
    }
}

export default (n) => {
    if (n === 0) {
        return [0]
    }
    let result = grayCode(n)
    return result.map(item => {
        return parseInt(item, 2)
    })
}

