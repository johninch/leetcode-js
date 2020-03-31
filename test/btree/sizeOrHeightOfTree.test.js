import Tree from '../../code/btree/Tree'
import sizeOfTree from '../../code/btree/sizeOfTree'
import { maxDepth, minDepth } from '../../code/btree/heightOfTree'

test('size: ', () => {
    let root = new Tree([5, 4, 7, 3, null, 2, null, -1, null, 9])
    expect(sizeOfTree(root)) .toBe(7)
})

test('maxheight: ', () => {
    let root = new Tree([10,5,15,null,null,6,20])
    expect(maxDepth(root)) .toBe(3)
})

test('minheight: ', () => {
    let root = new Tree([10,5,15,null,null,6,20])
    expect(minDepth(root)) .toBe(2)
})

