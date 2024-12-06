/**
 * 通过软盘拷贝文件
 */

const fn = (n, input) => {
  let blockCount = 1474560 / 512
  console.log('========', blockCount)
  const dp = new Array(blockCount+1).fill(0)
  for (let i=0;i<input.length;i++) {
    const weight = Math.ceil(input[i]/512)
    const worth = input[i]
    console.log('000000000', weight, worth)
    for (let j = blockCount;j>=weight;j--) {
      dp[j] = Math.max(dp[j], dp[j-weight] + worth)
    }
    console.log('---------', dp)
  }
  return dp[blockCount]
}

console.log(fn(3, [400000,200000,200000,200000,400000,400000]))