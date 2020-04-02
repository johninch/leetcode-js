import Tree, { Node } from './Tree'

class BSTree {
    // 此构造函数是用来，将一串数字，构造成二叉搜索树
    constructor(data) {
        let root = new Node(data.shift())
        // 遍历所有的数据，逐渐插入到当前这颗搜索树中
        data.forEach(item => {
            this.insert(root, item)
        })
        return root
    }
    insert(node, data) {
        if (node.val > data) {
            if (!node.left) {
                node.left = new Node(data)
            } else {
                this.insert(node.left, data)
            }
        } else {
            if (!node.right) {
                node.right = new Node(data)
            } else {
                this.insert(node.right, data)
            }
        }
    }
}

// 需要在遍历树的同时，保留节点的上界与下界，在比较时不仅比较子节点的值，也要与上下界比较。
// 递归法实现
Tree.isValidBST = (node) => {
    let walk = (node, lower, upper) => {
        if (!node) return true

        let val = node.val
        if (lower !== null && val <= lower) return false
        if (upper !== null && val >= upper) return false

        if (!walk(node.right, val, upper)) return false
        if (!walk(node.left, lower, val)) return false

        return true
    }

    return walk(node, null, null)
}

export default Tree

export {
    BSTree,
    Node
}

// [1,1]
// []
// [10,5,15,null,null,6,20]

