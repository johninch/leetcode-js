// 输入:
// [
//   ["1","0","1","0","0"],
//   ["1","0","1","1","1"],
//   ["1","1","1","1","1"],
//   ["1","0","0","1","0"]
// ]
// 输出: 6

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/maximal-rectangle
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    let reg = /1{2,}/g
    let arr = []
    // 把相邻的1提取出来，如 【0,1,1,1,0,0,1,1,1,1,0,0】 => [[1, 3], [6, 9]]
    arr = matrix.map(item => {
        let r, res = [];
        let str = item.join('')
        while(r = reg.exec(str)) {
            res.push([r.index, r.index + r[0].length - 1])
        }

        return res;
    })
    // 递归计算合并相邻的数组
    let maxRect = (arr, result, nRow) => {
        
    }
};
