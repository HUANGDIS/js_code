/**
 * 连续字母长度
 */


const fn = (str, k) => {
  let set = new Set(str)
  let obj = {}
  for (let letter of set) {
    const reg = new RegExp(`${letter}+`, 'g')

    while(true) {
      let res = reg.exec(str)
      console.log('------',res)
      if (res === null) {
        break
      } else {
        // 获取匹配字符串的长度
        let repeatTimes = res[0].length
        obj[letter] = obj[letter] ? Math.max(obj[letter], repeatTimes) : repeatTimes
      }
    }
  }
  let res = Object.values(obj).sort((a,b) => b-a)[k-1] ?? -1
  return res
}

console.log(fn('AAAAHHHBBCDHHHH', 3))