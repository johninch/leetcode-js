// 本部分是三序遍历的实现，主要分为两类：递归和迭代
// 三序遍历的递归方式非常简单，而对应的迭代法，本质上是在模拟递归，因为在递归的过程中使用了系统栈，所以在迭代的解法中常用Stack来模拟系统栈。
// 其实三序遍历都有一种莫里斯遍历解法，但这种方法会破坏原树结构，且不易理解，感兴趣的话去leetcode研究下。

// 前序遍历 - 递归
const preorder = (root, arr = []) => {
    if (root) {
        arr.push(root.val)
        preorder(root.left, arr)
        preorder(root.right, arr)
    }

    return arr
}


// 1、每拿到一个 节点 就把它 [压栈](保存在栈中)；
// 2、继续对这个节点的 左子树 重复 过程1，直到左子树为 空；
// 3、因为保存在 栈 中的节点都遍历了 左子树 但是没有遍历 右子树，所以对栈中节点 [出栈] 并对它的 右子树 重复 过程1
// 4、直到遍历完所有节点
const preorderTraversal = (root) => {
    const res = [];
    const stack = [];
    let current = root;

    while (current || stack.length > 0) {
        while (current) {
            res.push(current.val); // 前序入栈就输出，中序出栈再输出，后续是对前序的修改
            stack.push(current);
            current = current.left;
        }

        current = stack.pop();

        current = current.right;
    }
    return res;
};

// 中序遍历 - 递归
const inorder = (root, arr = []) => {
    if (root) {
        inorder(root.left, arr)
        arr.push(root.val)
        inorder(root.right, arr)
    }

    return arr
}


// 中序遍历 - 迭代 - 栈遍历
const inorderTraversal = (root) => {
    const res = [];
    const stack = [];
    let current = root;

    while (current || stack.length > 0) {
        while (current) {
            stack.push(current);
            current = current.left;
        }

        current = stack.pop();
        res.push(current.val); // 前序入栈就输出，中序出栈再输出，后续是对前序的修改

        current = current.right;
    }

    return res;
};

const postorder = (root, arr = []) => {
    if (root) {
        postorder(root.left, arr)
        postorder(root.right, arr)
        arr.push(root.val)
    }

    return arr
}

// 后序迭代的方法都是以前序迭代修改而来的：
// 以前序迭代修改：第一种写法就是采用 根右左 的遍历方法，最后再将结果翻转
const postorderTraversal = (root) => {
    const res = [];
    const stack = [];
    let current = root;

    while (current || stack.length > 0) {
        while (current) {
            res.push(current.val);
            stack.push(current);
            current = current.right; // 相比前序遍历，修改，先遍历右子树
        }

        current = stack.pop();

        current = current.left; // 相比前序遍历，修改，后遍历左子树
    }
    return res.reverse();
}

// 第二种写法是建立一个指向前一节点的指针，标记右孩子是否被访问
const postorderTraversal = (root) => {
    const res = [];
    const stack = [];
    let current = root;

    let last = null; // 修改1，指针，标记上一个访问的节点

    while (current || stack.length > 0) {
        while (current) {
            stack.push(current);
            current = current.left;
        }

        current = stack[stack.length - 1];
        if (!current.right || current.right == last) { // 修改二，增加判断是否该输出结点
            current = stack.pop();
            res.push(current.val); // 前序入栈就输出，中序出栈再输出，后续是对前序的修改
            last = current;
            current = null; // 继续弹栈
        } else {
            current = current.right;
        }
    }
    return res;
}

