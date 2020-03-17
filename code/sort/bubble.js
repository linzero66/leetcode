//冒泡排序

let bubble = (arr) => {


    for (let len = arr.length, j = len - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {

            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]] //每次都做存储的位置交换，性能较低
            }
            // console.log(arr);
        }
    }
    //排序好的
    return arr
}

//冒泡排序优化

let bubbleOpt = (arr) => {
    let lastExchange = 0; //内层循环标志位
    let len = arr.length;
    let k = len - 1
    for (let j = 0 ; j < len - 1; j++) {
        let flag = 0; //优化外层循环  设置标志位
         
        for (let i = 0; i < k; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]] //每次都做存储的位置交换，性能较低
                flag = 1
                lastExchange = i
                
            }
        }
        k = lastExchange
        //判断标志位是否为0，如果为0，说明后面的元素已经有序，就直接return --1 优化外层循环
        if (flag == 0) {
            break
        }

    }
    //排序好的
    return arr
}


// 优化2：优化内层循环
// 在每趟扫描中，记住最后一次交换发生的位置lastExchange，
// （该位置之后的相邻记录均已有序，因为正在冒的数是当前最小的，如果该数停止往上冒了，且后面没有冒泡的操作了，
// 说明后面的数比这个数都小，且已经排好序）。下一趟排序开始时，R[1..lastExchange - 1]是无序区，
// R[lastExchange..n]是有序区。这样，一趟排序可能使当前无序区扩充多个记录，
// 因此记住最后一次交换发生的位置lastExchange，从而减少排序的趟数

export {
    bubble,
    bubbleOpt

}