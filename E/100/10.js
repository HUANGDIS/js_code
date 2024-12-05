/**
 * 日志采集系统
 */

const fn = (logInfo) => {
  let logs = logInfo.split(' ').map(item => Number(item))
  const len = logs.length
  let scoreArr = new Array(len).fill(0)
  let maxNum = 0
  let maxScore = 0
  for (let i=0;i<len;i++) {
    let logScore = logs[i]

    maxNum += logScore
    let score = 0
    for (let j=0;j<=i;j++) {
      console.log('999999', j,i,maxNum)
      if (maxNum> 100 && i === j) {
        score += logScore - (maxNum - 100)
      } else {
        score += logs[j] - (i-j)*logs[j]
      }
      console.log('888888', score)
    }
    scoreArr[i] = score

    console.log('---------', score, maxScore)
    maxScore = Math.max(maxScore, score)
  }
  console.log('000000', scoreArr)
  return maxScore
}

console.log(fn('3 7 40 10 60'))