import hasGroupsSizeX from '../../code/array/hasGroupsSizeX.js'

test("hasGroupsSizeX: [1,2,3,4,4,3,2,1]", () => {
    expect(hasGroupsSizeX([1,2,3,4,4,3,2,1])).toBe(true)
})

test("hasGroupsSizeX: [1,1,1,2,2,2,3,3]", () => {
    expect(hasGroupsSizeX([1,1,1,2,2,2,3,3])).toBe(false)
})

test("hasGroupsSizeX: [1]", () => {
    expect(hasGroupsSizeX([1])).toBe(false)
})

test("hasGroupsSizeX: [1,1]", () => {
    expect(hasGroupsSizeX([1,1])).toBe(true)
})

test("hasGroupsSizeX: [1,1,2,2,2,2]", () => {
    expect(hasGroupsSizeX([1,1,2,2,2,2])).toBe(true)
})

test("hasGroupsSizeX: [1,1,1,1,2,2,2,2,2,2]", () => {
    // 分组后 [ 1, 1, 1, 1 ], [ 2, 2, 2, 2, 2, 2 ] 长度分别为 [ 4, 6 ] ，可以拆分成 长度为2的小分组
    expect(hasGroupsSizeX([1,1,1,1,2,2,2,2,2,2])).toBe(true)
})

test("hasGroupsSizeX: [1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3]", () => {
    // 分组后长度分别为 [ 6, 8, 9 ] ，没有除1之外的最大公约数
    expect(hasGroupsSizeX([1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3])).toBe(false)
})
