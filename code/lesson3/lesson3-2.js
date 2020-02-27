
export default (deck) => {
    deck.sort()
    if (!deck||deck.length <= 1) {
        return false
    }
    let lenArr = []
    let signLen = 1
    if (deck.length == 2 && deck[0] == deck[1]) {
        return true
    }
    if (deck.length == 2 && deck[0] != deck[1]) {
        return false
    }
    for (let i = 0; i < deck.length; i++){
        if (deck[i] == deck[i+1]) {
            signLen ++
        } else {
            lenArr.push(signLen)
            signLen = 1
         }
    }
    lenArr.sort()
    let type = true
    console.log(lenArr);
    
    for (let i = 1; i < lenArr.length; i++){i
        if (lenArr[i]%lenArr[0] !== 0 ) {
            type = false
            break
       }
    }
   
    return type
};

// export default (arr) => {
//     // 对这副牌进行排序，升序、降序都可以
//     arr.sort((a, b) => a - b)
//     let min = Number.MAX_SAFE_INTEGER
//     let dst = []
//     let result = true
//     console.log(arr);
    
//     for (let i = 0, len = arr.length, tmp = []; i < len; i++) {
//         tmp.push(arr[i])
//         for (let j = i + 1; j < len - 1; j++) {
//             if (arr[i] === arr[j]) {
//                 tmp.push(arr[j])
//             } else {
//                 if (min > tmp.length) {
//                     min = tmp.length
//                 }
//                 dst.push([].concat(tmp))
//                 tmp.length = 0
//                 i = j
//                 break
//             }
//         }
//     }
//     console.log(dst);
//     console.log(min);
    
//     dst.every(item => {
      
//         console.log(item.length);
        
//         if (item.length % min !== 0) {
//             result = false
//             return false
//         }
//     })
//     return result
// }