import Tree from '../../code/btree/isSymmetric'

test('isSymmetric: ', () => {
    let root = new Tree([1,2,2,3,4,4,3])
    expect(Tree.isSymmetric(root)).toEqual(true)
})

test('isSymmetric: ', () => {
    let root = new Tree([1,2,2,null,3,null,3])
    expect(Tree.isSymmetric(root)).toEqual(false)
})
