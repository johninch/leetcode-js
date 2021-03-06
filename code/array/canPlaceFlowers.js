/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
// let canPlaceFlowers = (flowerbed, n) => {
//     let i = 0, count = 0;
//     // 只考虑 f[i] 为0的情况下，左右是否也都为0，是则赋值为1，并计数器加1
//     // 注意首位边界为0的处理
//     while(i < flowerbed.length) {
//         if (flowerbed[i] === 0 && (flowerbed[i - 1] === 0 || i === 0) && (flowerbed[i + 1] === 0 || i === flowerbed.length - 1)) {
//             flowerbed[i] = 1;
//             count++;
//         }
//         i++;
//     }
//     return count >= n;
// }
const canPlaceFlowers = (flowerbed = [], num) => {
    // 为了方便处理边界问题，前后补0
    flowerbed.push(0)
    flowerbed.unshift(0)
    let result = 0
    for (let i = 1; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0 && flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
            flowerbed[i] = 1
            result++
        }
    }
    return result >= num
}

export default canPlaceFlowers;
