//乐扣题库 17 电话号码的字母组合

export default (dit) => {
    let targetArr = []
    let target1Arr = []
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
        return arr[dit-2]
    }
    let ditArr = dit.split('')
    for (let i = 0; i < ditArr.length; i++) {
        targetArr.push(arr[ditArr[i] - 2])
    }
    target1Arr = groupNum(targetArr)
    return target1Arr
}

function groupNum (targetArr) {
    let splitArr1 = targetArr.splice(0, 1)[0]
    let splitArr2 = targetArr.splice(0, 1)[0]

    let targetStrArr = []
    for (let i = 0; i < splitArr1.length; i++) {
        for (let j = 0; j < splitArr2.length; j++) {
            targetStrArr.push(splitArr1[i] + splitArr2[j])
        }
    }
    
    if (targetArr.length > 0) {
        targetArr.unshift(targetStrArr)
        return groupNum(targetArr)
    } else {
        return targetStrArr
    }
}