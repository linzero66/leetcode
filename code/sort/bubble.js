//冒泡排序

let bubble = (arr) => {
    

    for (let len = arr.length, j = len - 1; j > 0; j--) {
        for (let i = 0; i < j ; i++) {
     
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
    for (let j = 0, len = arr.length; j < len; j++) {
        let i = 0;
        for (; i < len - j; i++) {
            if (arr[i] > arr[i + 1]) {

            }
        }

    }
    //排序好的
    return arr
}

export {
    bubble,
    bubbleOpt
    
}