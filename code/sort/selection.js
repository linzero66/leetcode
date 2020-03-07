//选择排序
export default (arr) => {
    for (let j = 0, len = arr.length; j < len; j++) {
        let min = arr[j]
        for (let i = j + 1; i < len; i++) {
            if (min > arr[i]) {
                let c = min
                min = arr[i]
                arr[i] = c
            }
        }
       arr[j] = min
    }
    //排序好的
    return arr
}