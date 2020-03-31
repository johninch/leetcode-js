function letterCombinations(str) {
    let num = str.split('');
    if (num.find(i => i < 2)) return;
    let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    // 数字所对字母映射数组
    let code = num.map(i => map[i])

    // 分治合并函数
    let combine = (arr) => {
        if (arr.length < 2) return;

        let tmp = [];
        // 分治：先把前两个映射合并
        for (let i = 0, a0l = arr[0].length; i < a0l; i++) {
            for (let j = 0, a1l = arr[1].length; j < a1l; j++) {
                tmp.push(`${arr[0][i]}${arr[1][j]}`)
            }
        }

        // 合并后使用 tmp 替换已经合并完成的元素
        arr.splice(0, 2, tmp);

        if (arr.length > 1) {
            return combine(arr)
        } else {
            return arr[0]
        }
    }

    return combine(code)
}

export default letterCombinations
