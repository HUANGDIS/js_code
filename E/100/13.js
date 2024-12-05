/**
 * 报文响应时间
 */


const fn = (num, arr) => {
  let numQueries = num
  let arrivalTime = []
  let maxRespCode = []
  let minResponseTime = Number.MAX_SAFE_INTEGER

  arr.forEach(input => {
    arrivalTime.push(input[0])
    maxRespCode.push(input[1])

    if (arrivalTime.length === numQueries) {

      for (let i=0;i<numQueries;i++) {
        let maxRespTime = 0

        if (maxRespCode[i] < 128) {
          maxRespTime = maxRespCode[i]
        }else {
          const exp = (maxRespCode[i] & 0x70) >> 4
          const mant = maxRespCode[i] & 0x0f
          maxRespTime = (mant || 0x10) << (exp + 3)
          console.log('11111', exp, mant)
        }

        const responseTime = arrivalTime[i] + maxRespTime

        minResponseTime = Math.min(minResponseTime, responseTime)
      }
    }
  })
  return minResponseTime
}

console.log(fn(2,[[0, 255], [200, 60]] ))