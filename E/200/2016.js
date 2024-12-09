/**
 * 寻找符合要求的最长子串
 */

const fn = (letter, str) => {
    let lists = str.split(`${letter}`).filter(item => !!item)
    let maxLen = 0;
    for (let s of lists) {
        let n = s.length
        for (let i=0;i<n-1;i++) {
            let curr = ''
            let l=0;r=0;
            let timesMap = new Map()
            while (r<s.length) {
                if (timesMap.get(s[r]) === 2) {
                    maxLen = Math.max(maxLen, curr.length)
                    for (let key of timesMap.keys()) {
                        timesMap.set(key, 0)
                    }
                    curr = ''
                    l++
                    r = l
                }else {
                    curr += s[r]
                    timesMap.set(s[r], (timesMap.get(s[r])||0) +1)
                    r++
                }
                console.log('=====', timesMap, l, r,curr)
            }
            maxLen = Math.max(maxLen, curr.length)
            console.log('------', maxLen)
        }
    }
    return maxLen
}
console.log(fn('D', 'ABC1D2D1123'))