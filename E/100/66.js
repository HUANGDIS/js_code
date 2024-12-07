/**
 * 恢复数字序列
 */

const fn = (str, len) => {
    let strArr = str.split('')
    let numMap = new Map()
    for (let s of strArr) {
        numMap.set(s, (numMap.get(s) || 0)+1)
    }
    console.log('-----', numMap)

    let i = 1
    while(i <= 1000-len+1) {
        const count = new Map()
        for (let j = i;j<i+len;j++) {
            const num = String(j)
            for (const c of num) {
                count.set(c, (count.get(c) || 0) + 1)
            }
        }
        let isMatch = true
        for (const k of numMap.keys()) {
            if (numMap.get(k) !== count.get(k)) {
                isMatch = false
                break
            }
        }
        if (isMatch) {
            return i
        }
        i++
    }
    
}

console.log(fn('19801211', 5))