// 164. 最大间距

export default (arr) => {
    if (arr.length < 2) return 0;
    let max = 0
    for (let len = arr.length, i = len; i > 0; i--) {
        for (let j = 0; j < i-1; j++) {
            
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
        if(i<len){
          let interval = arr[i]-arr[i-1] 
          max =  max > interval ?max:interval
        }
    }
    return max
}