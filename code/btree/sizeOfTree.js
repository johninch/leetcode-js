/**
 * @param {TreeNode} root
 * @return {Number} 
 */
let sizeOfTree = (root) => {
    if (!root) {
        return 0
    }

    return 1 + sizeOfTree(root.left) + sizeOfTree(root.right);
}

export default sizeOfTree
