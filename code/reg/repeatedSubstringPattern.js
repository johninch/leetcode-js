/**
 * @param {string} s
 * @return {boolean}
 * 使用正则的匹配模式，/^(\w+)\1+$/
 */
var repeatedSubstringPattern = function(s) {
    if (s.length > 10000) return false;

    return /^(\w+)\1+$/.test(s)
};

export default repeatedSubstringPattern;
