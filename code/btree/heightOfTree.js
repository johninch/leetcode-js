/**
 * @param {TreeNode} root
 * @return {Number} 
 */
// 二叉树的深度就是指其最大深度。
const maxDepth = (root) => {
    if (!root) {
        return 0
    }
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}


// 左右子树都不为空：左子树深度和右子树最小深度的最小值 + 1
// 左树为空：右子树最小深度的最小值 + 1
// 右树为空：左子树最小深度 + 1
const minDepth = (root) => {
    if (!root) {
        return 0;
    }
    if (!root.left) {
        return 1 + minDepth(root.right);
    }
    if (!root.right) {
        return 1 + minDepth(root.left);
    }
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1
};

export {
    maxDepth,
    minDepth
}