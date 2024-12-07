/**
 * 补种未成活胡杨
 */

const fn = (totalNum, dieNum, dieArr, saveNum) => {
    let treeList = new Array(totalNum).fill(0).map((item, index) => {
        if (dieArr.includes(index+1)) {
            return 1
        }else {
            return 0
        }
    })
    console.log('----', treeList)
    let maxLen = 0
    let left = 0;right=1;sumLeft=0;sumRight=0;
    for(let right=0;right < totalNum;right++){
        sumRight += treeList[right]
        console.log('111111',left, right, treeList[left])
        while(sumRight - sumLeft > saveNum) {
            sumLeft += treeList[left]
            console.log('222222222', sumLeft, treeList[left])
            left++
        }
        maxLen = Math.max(right-left+1, maxLen)
        console.log('======', left, right, maxLen, sumRight, sumLeft)
    }
    return maxLen
}

console.log(fn(10, 3, [2,4,7],1))