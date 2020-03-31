import Tree, { Node } from './Tree'

Tree.isSymmetric = (root) => {
    if (!root) {
        return true;
    }
    let walk = (left, right) => {
        if (!left && !right) {
            return true;
        }
        if ((!left && right) || (left && !right) || (left.val !== right.val)) {
            return false;
        }

        return walk(left.left, right.right) && walk(left.right, right.left);
    }

    return walk(root.left, root.right)
}

export default Tree;

export {
    Node
}
