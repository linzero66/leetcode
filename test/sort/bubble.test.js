import { bubble } from "../../code/sort/bubble"

test("冒泡排序", () => {
    expect(bubble([10, 19, 47, 32, 22, 12])).toEqual([10, 12, 19, 22, 32, 47])
})