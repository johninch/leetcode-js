// 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

// 示例 1:

// 输入: "Let's take LeetCode contest"
// 输出: "s'teL ekat edoCteeL tsetnoc" 
// 注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/reverse-words-in-a-string-iii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 1、
// function revertByWord(str) {
//     let arr = str.split(' ');
//     // 注意item需要先转成数组再使用reverse方法
//     let res = arr.map(item =>
//         item.split('').reverse().join('')
//     )

//     return res.join(' ');
// }

// 2、
// function revertByWord(str) {
//     // 对字符串方法可以使用正则匹配空格
//     let arr = str.split(/\s/g);
//     // 注意item需要先转成数组再使用reverse方法
//     let res = arr.map(item =>
//         item.split('').reverse().join('')
//     )

//     return res.join(' ');
// }

// 3、使用正则match匹配
const revertByWord = (str) =>
    str.match(/[\w']+/g).map(item =>
        item.split('').reverse().join('')
    ).join(' ')

export default revertByWord;
