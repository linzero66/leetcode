// 164. 最大间距

export default (arr) => {
    if (arr.length < 2) return 0;
    let max = 0
    for (let len = arr.length, i = len; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
        //冒泡排序（每到最后一次和前面一个比，就可以检测出差值，在排序中做）
        if (i < len) {
            let interval = arr[i] - arr[i - 1]
            max = max > interval ? max : interval
        }
    }
    return max
}