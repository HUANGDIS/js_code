// let  countpeaks = (hill_map) => {
//   let count = 0, len = hill_map.length
//   if (hill_map[0] > hill_map[1]){
//     count++
//   }
//   if (hill_map[len-1] > hill_map[len-2]) {
//     count++
//   }
//   for (let i=1;i<len;i++) {
//     if (hill_map[i] > hill_map[i-1] && hill_map[i]>hill_map[i+1]) {
//       count++
//     }
//   }
//   return count
// } 
// console.log(countpeaks([0,1,4,3,1,0,0,1,2,3,1,2,1,0]))


// let countDistinctString = (str, len) => {
//   let resultArr = []
//   let dfs = (curr, store, len) => {
//     if (curr.length === len) {
//       resultArr.push(curr)
//       return
//     }
//     for (let i=0;i<store.length;i++) {
//       if (curr.length > 0 && curr.charAt(curr.length-1) === store.charAt(i)) {
//         continue
//       }
//       dfs(curr+store[i], store.slice(0,i)+store.slice(i+1), len)
//     }
//   }
//   dfs('', str, len)
//   resultArr = [...new Set(resultArr)]
//   console.log(resultArr)
//   return resultArr.length
// }
// console.log(countDistinctString('abc', 2))



// let checkPassword = (str) => {
//   let newStr = ''
//   for (let i=0;i<str.length;i++) {
//     if (str[i] !== '<' && str[i+1] !== '<') {
//       newStr = newStr + str[i]
//     }
//   }
//   let isBig = false, isSmall = false, isNum = false, isSpc = false
//   for (let c of newStr) {
//     if (/[A-Z]/.test(c)) {
//       isBig = true
//     }else if (/[a-z]/.test(c)) {
//       isSmall = true
//     }else if (/[0-9]/.test(c)) {
//       isNum = true
//     }else {
//       isSpc = true
//     }
//   }
//   let res = isBig && isSmall && isNum && isSpc && newStr.length >= 8
//   return newStr + ',' + res
// }

// console.log(checkPassword('ABC<c89%000<'))

// let  fn = (S,L) => {
//   let i=0;j=0
//   while(i<S.length&&j<L.length){
//     if (S.charAt(i) === L.charAt(j)) {
//       i++
//     }
//     j++
//   }
//   if (i === S.length) return j-1
//   return -1
// }
// console.log(fn('aec', 'abcde'))

// let fn = (num) => {
//   console.log(num + '=' + num)
//   let expressions = []
//   for (let i=1;i<num;i++) {
//     let sum = 0
//     let expression = ''
//     for (let j=i;sum<num;j++){
//       sum += j
//       expression += j + '+'
//       if (sum ===num) {
//         expressions.push(num +  '=' + expression.slice(0,-1))
//         break
//       }
//     }
//   }
//   expressions.sort((a,b) => a.length-b.length)
//   expressions.forEach((item) => console.log(item))
//   console.log('Result:'+ (expressions.length+1))
// }
// console.log(fn(100))

// let fn = (arr) => {
//   let map = new Map()
//   arr.forEach(item => {
//     map.set(item, map.has(item) ? map.get(item) + 1 : 1)
//   })
//   console.log(map)
//   let sortedEntries = [...map.entries()].sort((a,b)=>b[1] - a[1])
//   console.log(sortedEntries)
//   let newArr = []
//   let maxLen = sortedEntries[0][1]
//   sortedEntries.forEach(item => {
//     if (item[1] === maxLen) {
//       newArr.push(item[0])
//     }
//   })
//   newArr.sort((a,b) => a-b)
//   console.log(newArr)
//   let res = newArr.length % 2 === 1 ? newArr[(newArr.length-1)/2] : (newArr[newArr.length/2] + newArr[newArr.length/2-1])/2
//   return res
// }
// console.log(fn([5 ,1, 5, 3 ,5, 2, 5 ,5, 7 ,6, 7, 3 ,7 ,11, 7 ,55 ,7, 9, 98 ,9 ,17, 9 ,15, 9 ,9, 1, 39]))

// let fn = (str) => {
//   let newStrArr = str.split('@')
//   newStrArr = newStrArr.map(item => item.split(','))
//   newStrArr = newStrArr.map(item => {
//     return item.map(s => s.split(':'))
//   })
//   newStrArr = [...newStrArr[0], ...newStrArr[1]]
//   let map = new Map()
//   newStrArr.forEach(el => {
//     map.set(el[0], map.has(el[0]) ? map.get(el[0]) - Number(el[1]): Number(el[1]))
//   });
//   let res = [...map].map(item => item.join(':')).join(',')
//   console.log(newStrArr, map, res)
// }
// console.log(fn('a:3,b:5,c:2@a:1,b:2'))

// let fn = (len, str) => {
//   let i = 0, tmp = '', reg = 'aoeiuAOEIU', maxLen = 0, res = []
//   while(i<str.length){
//     if (reg.includes(str[i])) {
//       tmp += str[i]
//       if (maxLen === len && !reg.includes(str[i+1])){
//         res.push(tmp)
//         tmp = ''
//         maxLen = 0
//       }
//       i++
//       console.log('11111111',str[i], tmp)
//     }else {
//       maxLen += 1
//       if (maxLen < len) {
//         tem += str[i]
//         i++
//       }else if (maxLen === len){
//         res.push(tmp)
//         tmp = ''
//         maxLen = 0
//         i++
//       }else {
//         tmp = ''
//         maxLen = 0
//         i++
//       }
//       console.log('22222222',str[i], tmp)
//     }
//   }
//   console.log(res)
// }
// console.log(fn(0, 'asdbuiodevauufgh'))

// let fn = (arr) => {
//   arr.sort((a,b) => a[1] - b[1])
//   console.log(arr)
//   let len = arr.length
//   let minDiff = Number.MAX_SAFE_INTEGER, paris = []
//   for (let i=0;i<len-1;i++) {
//     for (let j=i+1;j<len;j++) {
//       let currDiff = arr[j][1] - arr[i][1]
//       if (currDiff < minDiff) {
//         paris.length = 0
//         minDiff = currDiff
//         paris.push({id1: Math.min(arr[i][0], arr[j][0]), id2: Math.max(arr[i][0], arr[j][0])})
//       }else if (currDiff === minDiff){
//         paris.push({id1: Math.min(arr[i][0], arr[j][0]), id2: Math.max(arr[i][0], arr[j][0])})
//       }else{
//         break
//       }
//     }
//   }
//   paris.sort((a,b) => a.id1-b.id1 || a.id2 - b.id2)
//   paris.forEach(item => {
//     console.log(`${item.id1} ${item.id2}`)
//   })
// }
// console.log(fn([[1 ,90],[2, 91],[3 ,92], [4 ,85], [5 ,86]]))


// let fn = (str) => {
//   let count = 0
//   for(let s of str){
//     if (s === 'o') {
//       count++
//     }
//   }
//   if (count % 2 === 0) return str.length
//   return str.length-1
// }
// console.log(fn('looxdolx'))

// let fn = (str) => {
//   let sits = 0
//   for (let i=0;i<str.length-1;i++) {
//     console.log(i, str[i], str[i+1])
//     if (Number(str[i]) === 0 && Number(str[i+1]) === 0) {
//       sits += 1
//       i += 1
//     }
//   }
//   console.log(sits)
// }
// console.log(fn('0101'))

// let fn = (str) => {
//   let arr = str.split(' ').map(Number)
//   let res = []
//   arr.forEach((el,index) => {
//     let tmp = arr.slice(index+1).concat(arr.slice(0, index))
//     let firstMax = tmp.filter(item => item < el)[0] || 0
//     res.push(firstMax+el)
//   });
//   return res
// }
// console.log(fn('3 15 6 14'))

// let fn  = (arr) => {
//   let res = Array(arr.length).fill(0)
//   arr.forEach((el,index) => {
//     let j = index+1
//     while(j<arr.length){
//       if (arr[j] > el) {
//         res[index] = j
//         break
//       }else {
//         j++
//         if (j === arr.length) {
//           res[index] = 0
//           break
//         }
//       }
//     }
//   });
//   return res
// }
// console.log(fn([123, 124, 125, 121, 119 ,122, 126, 123]))


let fn = (arr) => {
  let res = Number.MAX_SAFE_INTEGER, totalSum = 0, targetSum = 0
  let dfs = (nums, index, count, currentSum) => {
    if (count === 5) {
      let otherTeamSum = totalSum - currentSum
      res = Math.min(res, Math.abs(otherTeamSum-currentSum))
      return
    }
    if (index === 10) {
      return
    }
    dfs(nums, index+1, count+1, currentSum+nums[index])
    dfs(nums, index+1, count, currentSum)
  }
  totalSum = arr.reduce((pre ,curr) => pre + curr)
  targetSum = targetSum/2
  dfs(arr, 0, 0, 0)
  console.log(res)
}
console.log(fn([1,2,3,4,5,6,7,8,9,10]))
