import firstMissingPositive from '../../code/sort/firstMissingPositive'


test('firstMissingPositive: ', () => {
    expect(firstMissingPositive([1])).toBe(2)
})

test('firstMissingPositive: ', () => {
    expect(firstMissingPositive([3,4,-1,1])).toBe(2)
})

test('firstMissingPositive: ', () => {
    expect(firstMissingPositive([1,2,0])).toBe(3)
})

test('firstMissingPositive: ', () => {
    expect(firstMissingPositive([7,8,9,11,12])).toBe(1)
})
