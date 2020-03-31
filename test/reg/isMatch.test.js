import isMatch from '../../code/reg/isMatch'

test('isMatch:', () => {
    expect(isMatch('mississippi', 'mis*is*p*.')).toBe(false)
})

test('isMatch:', () => {
    expect(isMatch("ab", ".*")).toBe(true)
})

test('isMatch:', () => {
    expect(isMatch("aab", "c*a*b")).toBe(true)
})
