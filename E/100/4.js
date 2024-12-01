/**
 * 最大利润，贪心的商人
 */

const fn = (number, day, quantity, prices) => {
    let max = 0
    for (let i=0;i<prices.length;i++) {
        let price = prices[i]
        let minPrice = Math.max(...price), minIndex = 0
        let maxPrice = 0, maxIndex = 0
        for (let i=0;i<price.length;i++) {
            minPrice = Math.min(minPrice, price[i])
            maxPrice = Math.max(maxPrice, price[i])
        }
        minIndex = price.indexOf(minPrice)
        maxIndex = price.lastIndexOf(maxPrice)
        if (minIndex < maxIndex) {
            max += quantity[i] * (maxPrice- minPrice)
        }
    }
    return max
}

console.log(fn(1,1,1,1))