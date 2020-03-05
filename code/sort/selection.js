//选择排序
export default (arr) =>{
    for(let j = 0, len = arr.length; j < len; j++){
        for (let i = j; i < len; i++) {
            if (arr[j] > arr[i]) {
                [arr[j], arr[i]] = [arr[i], arr[j]]
            }
        }
    }
    //排序好的
    return arr
}