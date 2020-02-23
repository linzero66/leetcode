import canPlaceFlowers from '../../code/lesson3/lesson3-3'

test("种花问题", () => {
    expect(canPlaceFlowers([0, 0, 1, 0, 1], 1)).toBe(true)
})