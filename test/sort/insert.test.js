import { insert, insertOpt } from "../../code/sort/insert"
import { bubble, bubbleOpt } from "../../code/sort/bubble"
import creatArr from "../../code/create/array"

let arr = JSON.parse(JSON.stringify(creatArr()))
let arr1 = JSON.parse(JSON.stringify(arr))
let arr2 = JSON.parse(JSON.stringify(arr))
let arr3 = JSON.parse(JSON.stringify(arr))
let arr4 = JSON.parse(JSON.stringify(arr))
let arr5 = JSON.parse(JSON.stringify(arr))
let sortArr = JSON.parse(JSON.stringify(arr)).sort((a, b) => a - b)
test("普通快速排序", () => {
    expect(insert(arr1)).toEqual(sortArr)
})
test("优化的快速排序", () => {
    expect(insertOpt(arr2)).toEqual(sortArr)
})
test("冒泡排序", () => {
    expect(bubble(arr3)).toEqual(sortArr)
})
test("优化冒泡排序", () => {
    expect(bubbleOpt(arr4)).toEqual(sortArr)
})
test("自带sort排序", () => {
    expect(arr5.sort((a, b) => a - b)).toEqual(sortArr)
})