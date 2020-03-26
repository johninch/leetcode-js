/**
 * @param {number[]} deck
 * @return {boolean}
 */
const hasGroupsSizeX = (deck) => {
    if (deck.length < 2) return false

    deck = deck.sort();
    let arr = [],
        X = 0;

    arr[0] = []
    arr[0].push(deck[0])

    for (let i = 1; i < deck.length; i++) {
        if (arr[X][0] !== deck[i]) {
            X++;
            arr[X] = [deck[i]]
        } else {
            arr[X].push(deck[i])    
        }
    }

    // 求所有分组长度
    let lenArr = arr.map(item => item.length)

    // 工具函数，求两数间最大公约数
    let gcd = (x, y) => {
        return y === 0 ? x : gcd(y, x%y);
    }

    // 本质是判断所有分组长度间是否存在除1之外的最大公约数（多个数字求最大公约数）
    while (lenArr.length > 1) {
        let tmp = gcd(lenArr[0], lenArr[1])
        lenArr.splice(0, 2, tmp);
    }

    return lenArr[0] > 1 ? true : false
}

export default hasGroupsSizeX
