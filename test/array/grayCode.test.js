import grayCode from '../../code/array/grayCode';

test('grayCode:', () => {
    expect(grayCode(0)).toEqual([0])
})

test('grayCode:', () => {
    expect(grayCode(1)).toEqual([0, 1])
})

test('grayCode:', () => {
    expect(grayCode(3)).toEqual([0,1,3,2,6,7,5,4])
})
