//希尔排序(又称缩小增量排序)

export default (arr) => {
    let len = arr.length;
    let len2 = parseInt(len / 2);
    while (len != 1) {
        len = parseInt(len / 2);
        if (len != 1) {
            for (let i = 0; i < len2; i++) {
                if (arr[i] > arr[i + len]) {
                    [arr[i], arr[i + len]] = [arr[i + len], arr[i]];
                }
            }
        } else {
            for (let j = 1; j < arr.length; j++) {
                let temp = arr[j];
                let i;
                for (i = j; i > 0 && arr[i - 1] > temp; i--) {
                    arr[i] = arr[i - 1];
                }
                arr[i] = temp;
            }
        }
    }
    return arr
}

