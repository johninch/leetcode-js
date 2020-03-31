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
        res.push(current.val); // 前序入栈就输出，中序出栈再输出，后续需要访问第二次，出栈再输出

        current = current.right;
    }

    return res;
};


// // 莫里斯遍历，破坏了原树结构，不易理解
// const inorderTraversal = root => {
//     let res = [], stack = []
//     while (root || stack.length) {
//         if (root.left) {
//             stack.push(root)
//             root = root.left
//         } else if (!root.left && !root.right) {
//             res.push(root.val)
//             root = stack.pop()
//             root && (root.left = null)
//         } else if (root.right) {
//             res.push(root.val)
//             root = root.right
//         }
//     }
//     return res
// }
  

// 前序遍历 - 递归
const preorder = (root, arr = []) => {
    if (root) {
        arr.push(root.val)
        preorder(root.left, arr)
        preorder(root.right, arr)
    }

    return arr
}

const preorderTraversal = (root) => {
    const res = [];
    const stack = [];
    let current = root;

    while (current || stack.length > 0) {
        while (current) {
            res.push(current.val); // 前序入栈就输出，中序出栈再输出，后续需要访问第二次，出栈再输出
            stack.push(current);
            current = current.left;
        }

        current = stack.pop();

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

const postorderTraversal = (root) => {
    const res = [];
    const stack = [];
    let current = root;

    let last = null; // 标记上一个访问的节点

    while (current || stack.length > 0) {
      while (current) {
        stack.push(current);
        current = current.left;
      }

      current = stack[stack.length - 1];
      if (!current.right || current.right == last) {
        current = stack.pop();
        res.push(current.val); // 前序入栈就输出，中序出栈再输出，后续需要访问第二次，出栈再输出
        last = current;
        current = null; // 继续弹栈
      } else {
        current = current.right;
      }
    }
    return res;
  }

