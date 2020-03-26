import canPlaceFlowers from '../../code/array/canPlaceFlowers'

test('canPlaceFlowers:', () => {
    expect(canPlaceFlowers([0, 0, 0, 1, 0], 1)).toBe(true)
})
