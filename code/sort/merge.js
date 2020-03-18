//归并排序



let mergeSort = (arr) => {
    let len = arr.length;

    __mergeSort(arr, 0, len - 1)
    return arr
}
let __mergeSort = (arr, left, right) => {

    if (left >= right) return;
    let mid = parseInt((right + left) / 2)
    __mergeSort(arr, left, mid)
    __mergeSort(arr, mid + 1, right)
    __merge(arr, left, mid, right)

}
//全部合并起来
let __merge = (arr, left, mid, right) => {
    let aux = [];
    // aux.length = right - left + 1
    for (let i = left; i <= right; i++) {
        aux[i - left] = arr[i]
    }
    let i = left, j = mid + 1;
    for (let k = left; k <= right; k++) {
        if (i > mid) {
            arr[k] = aux[j - left];
            j++;
        } else if (j > right) {
            arr[k] = aux[i - left];
            i++;
        } else if (aux[i - left] < aux[j - left]) {
            arr[k] = aux[i - left]
            i++;
        } else {
            arr[k] = aux[j - left]
            j++;
        }
    }
}


export {
    mergeSort
}