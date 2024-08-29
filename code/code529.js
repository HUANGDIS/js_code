/**
 * 
 */
let fn = (str) => {
  let len = str.length
  let left = 0;right = 0
  let maxLen = -1
  let hasLetter = false
  let letterIdx = []
  while(right< len){
    let c = str.charAt(right)
    if (c.match(/[a-zA-Z]/)) {
      hasLetter = true
      letterIdx.push(right)
      if (letterIdx.length > 1) {
        left = letterIdx.shift() + 1
      }
      if (right === left) {
        right++;
        continue
      }
    }
    maxLen = Math.max(maxLen, right-left+1)
    right++
  }
  if (!hasLetter) {
    return -1
  }else {
    return maxLen
  }
}

console.log('11111111', fn('abcd1234abc'))