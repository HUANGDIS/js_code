/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
// var findContentChildren = function(g, s) {
//   g.sort((a,b) => a-b)
//   s.sort((a,b) => a-b)
//   let index = 0
//   for (let i =0;i<s.length;i++) {
//     if (index < g.length && g[index] <= s[i]) {
//       index++
//     }
//   }
//   return index
// };

// console.log(findContentChildren([1,2,3],[1,1]))

/**
 * @param {number[]} nums
 * @return {number}
 */
// var wiggleMaxLength = function(nums) {
//     let cur = 0; pre = 0;result = 1
//     for(let i =0;i<nums.length-1;i++){
//       cur = nums[i+1] - nums[i]
//       if ((pre <=0 && cur > 0) ||(pre>=0 && cur < 0)) {
//         result++
//         pre = cur
//       }
//     }
//     return result
// };
// console.log(wiggleMaxLength([1,2,3,4,5,6,7,8,9]))




/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function(nums) {
//   let sum = 0; res = -Infinity
//   for(let i= 0;i<nums.length;i++) {
//     sum += nums[i]
//     if (sum > res) {
//       res = sum
//     }
//     if (sum <= 0) sum = 0
//   }
//   return res
// };
// console.log(maxSubArray([-2,-1]))


/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//   let res = 0
//   for (let i=1;i<prices.length;i++) {
//     res += Math.max(prices[i]-prices[i-1], 0)
//   }
//   return res
// };
// console.log(maxProfit([7,1,5,3,6,4]))


/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var canJump = function(nums) {
//   let cover = 0
//   for(let i=0;i<=cover;i++){
//     cover = Math.max(cover, i + nums[i])
//     if (cover >= nums.length-1) return true
//   }
//   return false
// };
// console.log(canJump([2,3,1,1,4]))

/**
 * @param {number[]} nums
 * @return {number}
 */
// var jump = function(nums) {
//   let curCover = 0;step = 0; nextCover = 0
//   for (let i=0;i<nums.length-1;i++) {
//     nextCover = Math.max(nextCover, nums[i]+i)
//     if (i === curCover) {
//       curCover = nextCover
//       step++
//     }
//   }
//   return step
// };
// console.log(jump([2,3,1,1,4]))


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var largestSumAfterKNegations = function(nums, k) {
//   nums.sort((a,b) => Math.abs(b) - Math.abs(a))
//   for(let i=0;i<nums.length;i++){
//     if (k>0 && nums[i] < 0) {
//       nums[i] = Math.abs(nums[i])
//       k--
//     }
//   }
//   while (k > 0) {
//     nums[nums.length -1] = -nums[nums.length-1]
//     k--
//   }
//   return nums.reduce((a,b) => a + b)
// };
// console.log(largestSumAfterKNegations([3,-1,0,2], 3))

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
// var canCompleteCircuit = function(gas, cost) {
//   let start = []; min = 0 
//   for (let i=0;i<gas.length;i++) {
//     let rest = gas[i] - cost[i]
//     min = Math.min(min, rest)
//     start.push(rest)
//   }
//   console.log(start, min)
//   let sum = start.reduce((a,b) => a+b)
//   if (sum < 0) return -1
//   if (min >=0 ) return 0
//   for (let i=start.length-1;i>=0;i--) {
//     const rest = gas[i] - cost[i]
//     if (min + rest >= 0) {
//       return i
//     }
//   }
//   return -1
// };

// console.log(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]))

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
};
// console.log(candy([1,0,2]))



/**
 * @param {number[]} bills
 * @return {boolean}
 */
// var lemonadeChange = function(bills) {
//   let map = {}
//   while (bills.length) {
//     let bill = bills.shift()
//     if (bill === 5) {
//       map[5] =  map[5]  ?  map[5]+=1 : 1
//     }else if(bill === 10){
//       if (!map[5]) {
//         return false
//       }else {
//         map[5] -= 1
//         map[10] =  map[10]  ?  map[10]+=1 : 1
//       }
//     }else if(bill === 20){
//       if (map[10] && map[5]) {
//         map[10] -= 1
//         map[5] -= 1
//         map[20] =  map[20]  ?  map[20]+=1 : 1
//       }else if (!map[10] && map[5] >= 3 ) {
//         map[5] -= 3
//         map[20] =  map[20]  ?  map[20]++ : 1
//       }else {
//         return false
//       }
//     }
//   }
//   return true
  
// };
// console.log(lemonadeChange([5,5,5,20]))

/**
 * @param {number[][]} people
 * @return {number[][]}
 */
// var reconstructQueue = function(people) {
//   people.sort((a,b) => {
//     if (a[0] !== b[0]) {
//       return b[0] - a[0]
//     }else {
//       return a[1] - b[1]
//     }
//   })
//   console.log(people)
//   let res = []
//   for(let i=0;i<people.length;i++){
//     res.splice(people[i][1], 0 , people[i])
//     console.log(res)
//   }
//   return res
// };

// console.log(reconstructQueue([[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]))



/**
 * @param {number[][]} points
 * @return {number}
 */
// var findMinArrowShots = function(points) {
//   points.sort((a,b) => a[0] - b[0])
//   if (points.length <= 1) return points.length 
//   console.log(points)
//   let cur = points[0], times = 0,index = 1
//   while(index < points.length){
//     console.log(cur,index, points[index])
//     if (points[index][0] <= cur[1] || (points[index][1] === cur[1] && points[index][0] === cur[0])) {
//       cur[0] = Math.max(cur[0], points[index][0])
//       cur[1] = Math.min(cur[1], points[index][1])
//       index++
//     } else {
//       cur = points[index]
//       index++
//       times += 1
//     }
//     if (index === points.length) {
//       times += 1
//     }
//     console.log('-------',cur, index, times)
//   }
//   return times
// };
// console.log(findMinArrowShots([[2,3],[2,3]]))


/**
 * @param {number[][]} intervals
 * @return {number}
 */
// var eraseOverlapIntervals = function(intervals) {
//   intervals.sort((a,b) => a[0] - b[0])
//   let num = 0
//   for (let i = 1;i<intervals.length;i++) {
//     console.log('111111111',i, intervals, num)
//     if (intervals[i][0] < intervals[i-1][1]) {
//       num += 1
//       intervals[i][1] = Math.min(intervals[i-1][1], intervals[i][1])
//     } 
//     console.log(i, intervals, num)
//   }
//   return num
// };


// var eraseOverlapIntervals = function(intervals) {
//   intervals.sort((a, b) => {
//       return a[1] - b[1]
//   })

//   let count = 1
//   let end = intervals[0][1]

//   for(let i = 1; i < intervals.length; i++) {
//       let interval = intervals[i]
//       console.log(interval, end)
//       if(interval[0] >= end) {
//           end = interval[1]
//           count += 1
//       }
//   }
  
//   return intervals.length - count
// };
// var eraseOverlapIntervals = function(intervals) {
//   intervals.sort((a,b) => a[0] - b[0])
//   let count = 1
//   let end = intervals[intervals.length-1][0]
//   for (let i=intervals.length-1;i>=0;i--) {
//     let interval = intervals[i]
//     if (interval[1] <= end) {
//       count +=1
//       end = interval[0]
//     }
//   }
//   return intervals.length - count
// }
// console.log(eraseOverlapIntervals([[1,6],[2,8],[7,12],[10,16]]))

/**
 * @param {string} s
 * @return {number[]}
 */
// var partitionLabels = function(s) {
//   let hash = {}; res =[]
//   s = s.split('')
//   for(let i=0;i<s.length;i++) {
//     hash[s[i]] = i
//   }
//   let left = 0;right = 0
//   console.log(hash)
//   for (let j=0;j<s.length;j++) {
//     right = Math.max(right, hash[s[j]])
//     console.log(right, j)
//     if (right === j) {
//       console.log(j, s[j])
//       res.push(right - left +1)
//       left = j+ 1
//     }
//   }
//   return res
// };
// console.log(partitionLabels('ababcbacadefegdehijhklij'))


/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// var merge = function(intervals) {
//   intervals.sort((a,b) =>a[0] - b[0])
//   if (intervals.length === 1) return intervals
//   let res = []
//   for(let i=1;i<intervals.length;i++) {
//     let interval = intervals[i]
//     if (interval[0] <= intervals[i-1][1]) {
//       interval[0] = Math.min(interval[0], intervals[i-1][0])
//       interval[1] = Math.max(interval[1], intervals[i-1][1])
//       if (i === intervals.length-1) {
//         res.push(interval)
//       }
//     }else {
//       res.push(intervals[i-1])
//       if (i === intervals.length-1) {
//         res.push(intervals[i])
//       }
//     }
//   }
//   return res
// };

// console.log(merge([[1,4],[4,5]]))

// var preorderTraversal = function(root, res=[]){
//   if (!root) return null
//   let stack = [root]
//   let cur = null
//   while(stack.length){
//     cur = stack.pop()
//     res.push(cur.val)
//     cur.right && stack.push(cur.right)
//     cur.left && stack.push(cur.left)
//   }
//   return res
// }

// var inorderTraversal = function(root, res =[]){
//   if (!root) return null
//   let stack = []
//   let cur = root 
//   while(stack.length || cur){
//     if (cur) {
//       stach.push(cur)
//       cur = cur.left
//     }else{
//       cur = stack.pop()
//       res.push(cur.val)
//       cur = cur.right
//     }
//   }
//   return res
// }


// var postorderTraversal = function(root, res = []){
//   if (!root) return null
//   let cur = null, stack = [root]
//   do {
//     cur = stack.pop()
//     res.push(cur.val)
//     cur.left && stack.push(cur.left)
//     cur.right && stack.push(cur.right)
//   }while(stack.length)
//   return res.reverse()
// }



/**
 * @param {number[]} cost
 * @return {number}
 */
// var minCostClimbingStairs = function(cost) {
//   let dp = []
//   dp[0] = 0,dp[1] = 0
//   for (let i=2;i<=cost.length;i++) {
//     dp[i] = Math.min(dp[i-1]+ cost[i-1], dp[i-2]+cost[i-2])
//   }
//   return dp[cost.length]
// };
// var minCostClimbingStairs = function(cost){
//   let before = 0,after = 0
//   for(let i=2;i<=cost.length;i++){
//     let dpi = Math.min(cost[i-2] + before, cost[i-1]+after)
//     before = after
//     after = dpi
//   }
//   return after
// }
// console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// var uniquePaths = function(m, n) {
//   let pathArr = Array(m).fill(1).map(() => Array(n).fill(1))
//   for(let j=1;j<m;j++){
//     for(let k=1;k<n;k++){
//       pathArr[j][k] = pathArr[j-1][k] + pathArr[j][k-1]
//     }
//   }
//   return pathArr[m-1][n-1]
// };
// console.log(uniquePaths(3,7))



/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
// var uniquePathsWithObstacles = function(obstacleGrid) {
//   let len = obstacleGrid.length, len2 = obstacleGrid[0].length
//   let pathArr = Array(len).fill(0).map(() => Array(len2).fill(0))
//   for (let i=0;i<len&&obstacleGrid[i][0]!== 1;i++) {
//     pathArr[i][0] = 1
//   }
//   for (let i=0;i<len2&&obstacleGrid[0][i] !== 1;i++) {
//     pathArr[0][i] = 1
//   }
//   for(let i=1;i<len;i++){
//     for(let j=1;j<len2;j++){
//       if (obstacleGrid[i][j] === 1) {
//         pathArr[i][j] = 0
//       }else{
//         pathArr[i][j] = pathArr[i-1][j] + pathArr[i][j-1]
//       }
//     }
//   }
//   return pathArr[len-1][len2-1]
// };
// console.log(uniquePathsWithObstacles([[0,1],[0,0]]))



/**
 * @param {number} n
 * @return {number}
 */
// var integerBreak = function(n) {
//   let dp = Array(n+1).fill(0)
//   dp[2] = 1
//   for (let i=3;i<=n;i++) {
//     for(let j=1;j<=i;j++){
//       dp[i] = Math.max(dp[i],(i-j)*j, dp[i-j]*j)
//     }
//   }
//   return dp[n]
// };
// console.log(integerBreak(10))


var BagProblem  = function(weight, value, size){
  let len = weight.length
  let dp = Array(len).fill().map(() => Array(size+1).fill(0))
  for(let j=weight[0];j<=size;j++){
    dp[0][j] = value[0]
  }
  for (let i=1;i<len;i++) {
    for (let j=0;j<=size;j++) {
      if (j<weight[i]) {
        dp[i][j] = dp[i-1][j]
      }else{
        dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-weight[i]]+ value[i])
      }
    }
  }
  console.table(dp)
  return dp[len-1][size]
}
console.log(BagProblem([1, 3, 4], [15, 20, 30], 4))