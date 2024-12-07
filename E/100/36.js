/**
 * 高矮个子排队
 */


const fn = (height) => {
    if (/\^[0-9\s]+$/.test(height)) {
        return []
    }
    let heights = height.split(' ').map(Number)
    let i=0, j=1
    while(j< heights.length) {
        if (heights[i] !== heights[j] && (heights[i] > heights[j]) !== (i%2 === 0)) {
            [heights[i], heights[j]] = [heights[j], heights[i]]
        }
        i++
        j++
    }
    return heights.join(' ')
}

console.log(fn('4 1 3 5 2'))