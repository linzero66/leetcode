//插入排序
let insert = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0 && arr[j - 1] > arr[j]; j--) {
            if (arr[j] < arr[j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
            }
        }
    }
    return arr
}


//插入排序优化
let insertOpt = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let temporary = arr[i];
        let j;
        for (j = i; j > 0 && arr[j - 1] > temporary; j--) {
                arr[j] = arr[j - 1];
        }
        arr[j] = temporary;
    }
    return arr;
}

export {
    insert,
    insertOpt
}