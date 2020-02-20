
// 题目描述：
// 给定一个没有重复数字的序列，返回其所有可能的全排列。

// 示例:

// 输入: [1,2,3]
// 输出:
// [
// [1,2,3],
// [1,3,2],
// [2,1,3],
// [2,3,1],
// [3,1,2],
// [3,2,1]
// ]


//官方解法
// export default (arr) => {
//     let len = arr.length
//     let res = []
//     dfs([], 0, len, arr, res)
//     return res
// }

// function dfs(cur, index, len, arr, res) {
//     if (cur.length === len) {
//         res.push(cur.concat())
//         return
//     }
//     for (let i = index; i < arr.length; i++) {
//         swap(arr, i, index)
       
//         cur.push(arr[index])
//         console.log(cur);
        
//         dfs(cur,index+1,len,arr,res)
//         cur.pop()
//         swap(arr, i, index)//回溯原始数组
//     }
// }

// function swap(arr, i, index) {
//     [arr[index], arr[i]] = [arr[i], arr[index]]
// }

//=========================================好理解得多(回溯)
 export default (nums)=>{
	let number = []
	function backtrack(nums, templist) {
		if (templist.length === nums.length) {
			// 组合一次结果
			number.push([...templist])
			// 然后回溯
			return
		}
		for (let i = 0; i < nums.length; i++) {
			let num = nums[i]
			if (templist.includes(num)) continue
			templist.push(num)
			backtrack(nums, templist)
			templist.pop()// 回溯到上一步
		}
	}
	backtrack(nums, [])
	return number
};