/**
 * @param {number[]} arr
 * @return {number}
 */
var firstMissingPositive = function(arr) {
    let newArr = [];
    for (let i = 0, len = arr.length; i < len; i++) {
        let value = arr[i];
        if (value > 0 && value <= len) {
            newArr[value-1] = value;
        }
    }

    for (let i = 0, len = newArr.length; i < len; i++) {
        if (newArr[i] !== i + 1) {
            return i + 1;
        }
    }

    return newArr.length + 1;
};

export default firstMissingPositive;

// 思路：
// 找出原数组中大于0且小于等于数组长度的值，以值-1作为索引放入新数组中，如2放到索引为1的位置
// 因此可得到新数组刑如[1, 2, 3, ...]
// 遍历新数组，找出第一个 索引+1 !== 值 的元素，返回 索引+1 即为所求，如果遍历完没有返回，则返回 新数组长度+1


// 注意：这里之所以用新数组而不用在原数组上swap操作，是考虑到swap操作可能会有数字交换后没有遍历到的情况，为了算法简单