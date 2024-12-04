/**
 * 猜数字
 */

const fn = (arr) => {
  let vaildCount = 0
  let vaildAnswer = ''
  for (let num =0;num<=9999;num++) {
    const answer = num.toString().padStart(4,'0')
    let isVaild = true

    for (const a of arr) {
      let guess = a[0]
      let expectResult = a[1]
      console.log('===========',answer, guess, expectResult)
      let countA = 0
      let countB = 0

      let answerArr = new Array(10).fill(0)
      let guessArr = new Array(10).fill(0)

      for (let i=0;i<guess.length;i++) {
        let c1Int = parseInt(guess[i])
        let c2Int = parseInt(answer[i])
        if (c1Int === c2Int) {
          countA++
        }else {
          guessArr[c1Int]++
          answerArr[c2Int]++
        }
      }
      
      for (let i=0;i<10;i++) {
        countB += Math.min(guessArr[i], answerArr[i])
      }
      let realResult = `${countA}A${countB}B`
      console.log('---------', realResult)
      if (expectResult !== realResult) {
        isVaild = false
        break
      }
    }
    if (isVaild) {
      vaildCount++
      vaildAnswer = answer

      if (vaildCount>1) {
        break
      }
    }
  }
  if (vaildCount !== 1) {
    console.log('NA')
  }else {
    return vaildAnswer
  }
}

console.log(fn([['4815', '1A1B'],['5716', '0A1B'],['7842', '0A1B'],['4901', '0A0B'],['8585', '3A0B'],['8555', '2A1B']
  ]))