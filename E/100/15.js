/**
 * 最长连续子序列
 */


const fn = (str, n) => {
  let strArr = str.split(',').map(Number)
  let left = 0;right=0;sum = 0; maxLen = -1
  while(right < strArr.length) {
    sum += strArr[right]
    right++
    while(sum > n && left < right) {
      sum -= strArr[left]
      left++
    }
    if (sum === n) {
      maxLen = Math.max(maxLen, right - left)
    }
    console.log('-------', sum, maxLen, n, left, right)
  }
  return maxLen
}

console.log(fn('10,20,30,40,50', 90))