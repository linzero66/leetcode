import select from "../../code/sort/selection"

test("选择排序",()=>{
    expect(select([10,19,47,32,22,12])).toEqual([10,12,19,22,32,47])
})