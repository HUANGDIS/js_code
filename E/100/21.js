/**
 * 字符串分割转换
 */

const fn = (len, str) => {
  let strArr = str.split('-')
  console.log('------', strArr)
  let fir = strArr.shift()
  let others = strArr.join('').split('')
  let curr = ''
  let res = [fir]
  for (let i=0;i<others.length;i++) {
    if (curr.length === len || i === others.length-1) {
      let lowerNum = 0;upperNum = 0
      for (let c of curr) {
        let charCode = c.charCodeAt()
        if (charCode >= 65 && charCode <= 90) {
          upperNum++
        }
        if (charCode >= 97 && charCode <= 122) {
          lowerNum++
        }
      }
      if (lowerNum > upperNum) {
        curr = curr.toLocaleLowerCase()
      }
      if (lowerNum < upperNum) {
        curr = curr.toUpperCase()
      }
      res.push(curr)
      curr = ''
    }
    curr += others[i]
  }
  console.log('000000', res)
  return res.join('-')
}

console.log(fn(12,'12abc-abCABc-4aB@'))