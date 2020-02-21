//leetCode题库 17 电话号码的字母组合（递归）（广度优先）

export default (dit) => {
    let targetArr = []
    let arr = [
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['g', 'h', 'i'],
        ['j', 'k', 'l'],
        ['m', 'n', 'o'],
        ['p', 'q', 'r', 's'],
        ['t', 'u', 'v'],
        ['w', 'x', 'y', 'z']
    ]
    if (dit == "") {
        return [""]
    }
    if (dit.split('').length == 1) {
        return arr[dit - 2]
    }
    let ditArr = dit.split('')
    for (let i = 0; i < ditArr.length; i++) {
        targetArr.push(arr[ditArr[i] - 2])
    }
     
    return groupNum(targetArr)
}
function groupNum(targetArr) {
    //提取合并
    let targetStrArr = []
    for (let i = 0; i < targetArr[0].length; i++) {
        for (let j = 0; j < targetArr[1].length; j++) {
            targetStrArr.push(targetArr[0][i] + targetArr[1][j])
        }
    }
    //还有长度就插入原数组
    targetArr.splice(0, 2, targetStrArr)
    
    if (targetArr.length > 1) {
       return groupNum(targetArr)
    } else {
       return targetArr[0]
    }

}



//深度优先(递归回溯)

// export default (digits) => {
//     if (!digits) {
//         return [];
//     }
//     var len = digits.length;
//     var map = new Map();
//     map.set('2', 'abc');
//     map.set('3', 'def');
//     map.set('4', 'ghi');
//     map.set('5', 'jkl');
//     map.set('6', 'mno');
//     map.set('7', 'pqrs');
//     map.set('8', 'tuv');
//     map.set('9', 'wxyz');
//     var result = [];

//     function _generate(i, str) {
//         // terminator
//         if (i == len) {
//             result.push(str);
//             return;
//         }
//         // process
//         // drill down
//         var tmp = map.get(digits[i]);
//         for (var r = 0; r < tmp.length; r++) {
//             _generate(i + 1, str + tmp[r]);
//         }
//     }
//     _generate(0, '');
//     return result;
// }