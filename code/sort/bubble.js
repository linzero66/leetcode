//冒泡排序

export default (arr) => {
    for(let j = 0, len = arr.length; j < len; j++){
        for (let i = 0; i < len-j; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
            }
        }
    }
    //排序好的
    return arr
}