/**
 * 出租车计费 / 靠谱的车
 */

const fn = (num) => {
  const realNumArr = num.toString().split('').map(Number)
  console.log(realNumArr.length)
  let res = 0
  for (let i=0;i<realNumArr.length;i++) {
    let digit = realNumArr[i]
    console.log('------', i,digit)
    if (digit > 4) {
      digit--
    }
    console.log('=======', res, digit)
    res = res*9 + digit
  }
  return res
}

console.log(fn(17))