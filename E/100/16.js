/**
 * 计算面积/绘图机器
 */


const fn = (arr1, arr2) => {
  let maxArea = 0
  let e = arr1[1]
  let line = []
  if (arr1[1] === 0) {
    return 0
  }
  const offset = new Array(e).fill(0)
  for (let i=0;i<arr2.length;i++) {
    let x = arr2[i][0]
    let offsetY = arr2[i][1]
    offset[x] = offsetY
  }
  console.log('=====', offset)
  const dp = new Array(e).fill(0)
  dp[0] = offset[0]

  for (let i=1;i<e;i++) {
    dp[i] = offset[i] + dp[i-1]
  }
  console.log('--------',dp)
  let ans = 0
  for (const num of dp) {
    ans += Math.abs(num)
  }
  return ans
}
console.log(fn([2, 4], [[0,1], [2,-2]]))