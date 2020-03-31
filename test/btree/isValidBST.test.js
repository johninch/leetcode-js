import Tree, { BSTree } from '../../code/btree/isValidBST'

test('isValidBST: ', () => {
    let root = new Tree([2,1,3]);
    expect(Tree.isValidBST(root)).toBe(true);
})

test('isValidBST: ', () => {
    let root = new Tree([10,5,15,null,null,6,20]);
    expect(Tree.isValidBST(root)).toBe(false);
})

test('isValidBST: ', () => {
    let root = new Tree([5,1,4,null,null,3,6]);
    expect(Tree.isValidBST(root)).toBe(false);
})

// 顺便测试下，BSTree构造函数是否正确
test('BSTree: ', () => {
    let root = new BSTree([10,20,25,16,6,17,11,8,5])
    // 如果构造函数正确的话，肯定是二叉搜索树
    expect(Tree.isValidBST(root)).toBe(true)
})
