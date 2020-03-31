/**
 * @param {string[]} arr
 * @return {number}
 */
var calPoints = function(arr) {
    let stack = [], pre1, pre2;

    arr.forEach(item => {
        switch (item) {
            case 'C':
                if (stack.length) {
                    stack.pop();
                }
                break;
            case 'D':
                pre1 = stack.pop();
                stack.push(pre1, pre1 * 2);
                break;
            case '+':
                pre1 = stack.pop();
                pre2 = stack.pop();
                stack.push(pre2, pre1, pre1 + pre2); // 这里注意入栈顺序，后出的先进
                break;
            default:
                stack.push(item * 1);
        }

    })

    return stack.reduce((acc, cur) => acc + cur, 0);
};

export default calPoints;
