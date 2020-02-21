import hasGroupsSizeX from "../../code/lesson3/lesson3-2"

test("卡牌分组", () => {


    expect(hasGroupsSizeX([1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3])).toBeTruthy()
})