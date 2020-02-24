import grayCode from "../../code/lesson3/lesson3-4"

test("格雷编码", () => {
    expect(grayCode(3)).toEqual([0, 1, 3, 2, 6, 7, 5, 4])
})