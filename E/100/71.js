/**
 * 最长子字符串的长度
 */

const fn = (str) => {
    let maxLen = 0
    for (let i=0;i<str.length;i++) {
        let curr = str[i]
        for (let j=1;j<str.length;j++) {
            let changeStr = str
            if (i>0) {
                changeStr = str.slice(i) + str.slice(0, i)
            }
            console.log('-----', changeStr, j)
            curr += changeStr[j]
            let strMap = new Map()
            for (let c of curr) {
                if (['l', 'o', 'x'].includes(c)) {
                    strMap.set(c, (strMap.get(c) || 0) +1)
                }
                
            }
            console.log('111111', strMap, curr)
            let isMatch = true
            for (let k of strMap.keys()) {
                if (strMap.get(k) % 2 !== 0) {
                    isMatch = false
                    break
                }
            }
            if (isMatch) {
                maxLen = Math.max(maxLen, curr.length)
            }
        }
    }
    return maxLen
}
console.log(fn('loxxo'))