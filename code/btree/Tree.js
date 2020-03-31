// 二叉树节点
class Node {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

class Tree {
    // 将 层序遍历数组 转换成 链表形式
    constructor(data) {
        let toNode = item => {
            if (!item) {
                return null;
            } else {
                return new Node(item);
            }
        };

        let queue = [];
        const root = toNode(data.shift());
        queue.push(root); // 入队列第一个元素

        while (data.length > 0) {
            //当数组里还有项的时候就拿数组的项去填充队列
            let current = queue.shift();

            current.left = toNode(data.shift());
            if (current.left) {
                queue.push(current.left);
            }

            current.right = toNode(data.shift());
            if (current.right) {
                queue.push(current.right);
            }
        }

        return root;
    }

    // 将 链表形式 转换成 层序遍历数组
    static toArray(root) {
        let queue = [];
        let list = [];

        queue.push(root);

        while (queue.length > 0) {
            let current = queue.shift();

            if (current.left) {
                queue.push(current.left);
                list.push(current.left.val);
            } else {
                list.push(null);
            }

            if (current.right) {
                queue.push(current.right);
                list.push(current.right.val);
            } else {
                list.push(null);
            }
        }

        // 我们在深度优先遍历的时候将节点保存下来，如果是null也保存，完全二叉树的性质要求我们不能有null混在值中
        // 拿到这个list之后
        // 第一步是将最后连续的null删掉
        let point = list.length - 1; // 从表最后开始看
        while (list[point] === null) {
            list.pop();
            point--;
        }

        // 之后再检查list中是否还有null，如果没有就是完全二叉树，有就不是
        //  return list.every((item)=>{return item!==null})
        return [root.val].concat(list); // 换成输出这行代码就能输出二叉树的数组表示形式，与前面的constructor方法正好相反
    }
}

// let root = new Tree([1, null, 2, 3]);
// let arr = Tree.toArray(root);

// console.log(root, arr);
  

export default Tree

export {
    Node
}
