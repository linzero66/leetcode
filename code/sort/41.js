// 41. 缺失的第一个正数
// 给定一个未排序的整数数组，找出其中没有出现的最小的正整数。

// 示例 1:
// 输入: [1,2,0]
// 输出: 3
// 示例 2:
// 输入: [3,4,-1,1]
// 输出: 2
// 示例 3:
// 输入: [7,8,9,11,12]
// 输出: 1
// 说明:
// 你的算法的时间复杂度应为O(n)，并且只能使用常数级别的空间。

//注意点 考虑两个边界情况  全是负数和 数组全部是连续的正整数(不符合题目要求：时间复杂度应为O(n))
// export default (arr) => {
//     arr.sort((a, b) => a - b)
//     let newArr = unique(arr);
//     let len = newArr.length;
//     console.log(len);
    
//     if (len == 0) return 1;
//     for (let i = 0; i < newArr.length; i++) {
//         if (newArr[i] != i + 1) {
//             return i + 1
//         }
//     }
//     return newArr[len - 1] + 1
// }
// function unique(arr){
//     return arr.filter((item,index,arr) =>{
//         console.log(arr.indexOf(item));
        
//         return arr.indexOf(item) === index && arr[index] > 0
//     })
// }

//hash table(哈希表)