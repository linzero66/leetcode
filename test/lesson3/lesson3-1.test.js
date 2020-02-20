import letterCombinations from "../../code/lesson3/lesson3-1"

test("电话号码的字母组合", () => {
    expect(letterCombinations("23")).toEqual(["ad","ae","af","bd","be","bf","cd","ce","cf"])
})