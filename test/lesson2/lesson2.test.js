import matchNoEmpty from "../../code/lesson2/lesson2"

test("计数二进制子串",()=>{
    expect(matchNoEmpty("0011000111001110111110000000000000000000011111111111100000")).toBe(35)
})