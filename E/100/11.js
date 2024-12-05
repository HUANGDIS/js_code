/**
 * 最左侧冗余覆盖子串
 */

const fn = (s1, s2, k) => {
  const s1Count = new Array(26).fill(0)
  for (let c of s1) {
    s1Count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++
  }

  let left = 0;right=0;s1CharsLeft = s1.length
  const windowCount = new Array(26).fill(0)
  while(right < s2.length) {
    const rightChar = s2.charAt(right)
    windowCount[rightChar.charCodeAt(0) - 'a'.charCodeAt(0)]++

    if (windowCount[rightChar.charCodeAt(0) - 'a'.charCodeAt(0)] <= s1Count[rightChar.charCodeAt(0) - 'a'.charCodeAt(0)]) {
      s1CharsLeft--
    }

    if (right - left + 1 > s1.length + k) {
      const leftChar = s2.charAt(left)

      if (windowCount[leftChar.charCodeAt(0) - 'a'.charCodeAt(0)] <= s1Count[leftChar.charCodeAt(0) - 'a'.charCodeAt(0)]) {
        s1CharsLeft++
      }

      windowCount[leftChar.charCodeAt(0) - 'a'.charCodeAt(0)]--
      left++
    }
    if (s1CharsLeft === 0) {
      return left
    }
    right++
  }
  return -1
}

console.log(fn('ab', 'dcabd', 1))