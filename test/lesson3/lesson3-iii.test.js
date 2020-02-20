import fullGroud from "../../code/lesson3/lesson3-iii"

test("全排列组合", () => {
    expect(fullGroud([1, 2, 3])).toEqual([
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1]
    ])
})