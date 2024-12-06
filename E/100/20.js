/**
 * 字符串变换最小字符串
 */

const fn = (str) => {
  let strArr = str.split('').sort()
  if (strArr.join('') === str) {
    return str
  }
  let sb = str.split('')
  for (let i=0;i<str.length;i++) {
    if (str.charAt(i) !== strArr[i]) {
      const temp = str.charAt(i)
      let swapIndex = -1

      for (let j = i+1;j<str.length;j++) {
        if (sb[j] === strArr[i]) {
          swapIndex = j
        }
      }
      sb[i] = strArr[i]
      sb[swapIndex] = temp
      break
    }
  }
  return sb.join('')
}
console.log(fn('bcdefa'))