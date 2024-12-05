/**
 * 分糖果
 */


const fn = (num) => {
  let count = 0
  while(num>1) {
    if (num === 3) {
      count += 2
      break
    }
    if (num%2 === 0) {
      num = num/2
      count++
    }else {
      console.log('=======', ((num-1)/2)%2)
      if (((num-1)/2)%2 === 0) {
        num -= 1
      }else {
        num += 1
      }
      count++
    }
  }
  return count
}
console.log(fn(3))