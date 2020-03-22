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
//将arr[l...mid]和arr[mid+1...r]两部分进行归并 全部合并起来
let __merge = (arr, left, mid, right) => {
    let aux = [];//临时空间
    // aux.length = right - left + 1
    for (let i = left; i <= right; i++) {
        aux[i - left] = arr[i]
    }
    let i = left, j = mid + 1;
    for (let k = left; k <= right; k++) {
        if (i > mid) {
            //i>mid意味着左边arr[l...mid]归并完了,还剩右边arr[mid+1...r]没有归并完
            arr[k] = aux[j - left];
            j++;
        } else if (j > right) {
            //j>mid意味着右边arr[mid+1...r]归并完了,还剩左边arrarr[l...mid]没有归并完
            arr[k] = aux[i - left];
            i++;
        } else if (aux[i - left] < aux[j - left]) {
            //哪个更大就存进临时空间。
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