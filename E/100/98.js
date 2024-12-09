/**
 * 双十一 最大花费金额
 */
const fn = (price, num) => {
    let prices = price.split(',').map(Number).sort((a,b) => a - b)
    let maxSpend = prices[0] + prices[1] + prices[2]
    if (maxSpend>num) {
        return -1
    }
    console.log('======', prices)
    let len = prices.length
    let chazhi = 1000
    for (let i=0;i<len-2;i++) {
        let l = i+1;r = len-1
        while(l<r) {
            let sum = prices[i] + prices[l] + prices[r]
            console.log('------', l, r, sum)

            if (sum === num) {
                return sum
            }
            if (l< r && sum<num) {
                l++
            }
            if (l< r && sum>num) {
                r--
            }
            console.log('=====', l,r, num-sum, chazhi)
            if (num-sum > 0) {
                maxSpend = Math.max(maxSpend, sum)
            }
            
        }
    }
    return maxSpend

}

console.log(fn('23,26,36,27', 78))