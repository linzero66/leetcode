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
    console.log(String(arr));

    for (let j = 0, len = arr.length; j < len-1; j++) {
        let temporary = arr[0];
        console.log("J=", j);
        let i = 1;
        for (; i < len - j ; i++) {

            if (arr[i] > temporary) {

                arr[i - 1] = temporary;
                temporary = arr[i];

                continue
            }
            if (arr[i] < temporary) {

                arr[i - 1] = arr[i];
                continue
            }
            if (arr[i] == temporary) {
                arr[i - 1] = temporary;
              
                continue
            }

        }
        if(len - j == 0)continue;
        arr[i] = temporary

    }
    //排序好的
    return arr
}

export {
    bubble,
    bubbleOpt

}