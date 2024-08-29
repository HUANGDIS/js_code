/**
 * @param {number[]} cost
 * @return {number}
 */
// var minCostClimbingStairs = function(cost) {
//   const dp = [0,0]
//   for (let i=2;i<= cost.length;i++){
//     dp[i] = Math.min(dp[i-2] + cost[i-2], dp[i-1]+cost[i-1])
//   }
//   return dp[cost.length]
// };
// console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// var uniquePaths = function(m, n) {
//   let dp = Array(m).fill(0).map(item => Array(n).fill(0))
//   for (let i=0;i<m;i++) {
//     dp[i][0] = 1
//   }
//   for(let j=0;j<n;j++){
//     dp[0][j] = 1
//   }
//   for (let i=1;i<m;i++) {
//     for (let j=1;j<n;j++) {
//       dp[i][j] = dp[i-1][j] + dp[i][j-1]
//     }
//   }
//   return dp[m-1][n-1]
// }
// console.log(uniquePaths(3,7))

// var uniquePathsWithObstacles = function(obstacleGrid) {
//   let m = obstacleGrid.length, n = obstacleGrid[0].length
//     let dp = Array(m).fill(0).map(item => Array(n).fill(0))
//     for (let i=0;i<m;i++) {
//       dp[i][0] = 1
//     }
//     for(let j=0;j<n;j++){
//       dp[0][j] = 1
//     }
//     for (let i=1;i<m;i++) {
//       for (let j=1;j<n;j++) {
//         dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i-1][j] + dp[i][j-1]
//       }
//     }
//     return dp[m-1][n-1]
// }
// console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]))

/**
 * 
 */
// var testWeightBagProblem  = (weight, value, size) => {
//   let dp = Array(weight.length).fill().map(() => Array(size+1).fill(0))
//   console.log(dp)
//   for (let i=weight[0];i<=size;i++) {
//     dp[0][i] = value[0]
//   }
//   console.log('111111',dp)
//   for (let j=1;j<weight.length;j++) {
//     for (let k=0;k<=size;k++) {
//       if (k<weight[j]) dp[j][k] = dp[j-1][k]
//       else dp[j][k] = Math.max(dp[j-1][k], dp[j-1][k-weight[j]] + value[j])
//     }
//   }
//   console.log('444444444',dp)
//   return dp[weight.length-1][size]
// }
// console.log(testWeightBagProblem([1,3,4, 5], [15, 20, 30, 55], 6))


/**
 * @param {number[]} nums
 * @return {boolean}
 * 输入: [1, 5, 11, 5]
  输出: true
  解释: 数组可以分割成 [1, 5, 5] 和 [11]
 */
// var canPartition = function(nums) {
//   let sum = nums.reduce((cur, pre) => cur + pre)
//   if (sum%2 !== 0) return false
//   let half = sum / 2
//   let dp = Array(half+1).fill(0)
//   for (let i=0;i<nums.length;i++) {
//     for (let j=half;j>=nums[i];j--) {
//       dp[j] = Math.max(dp[j], dp[j-nums[i]] + nums[i])
//       console.log(dp)
//       if (dp[j] === half) {
//         return true
//       }
//     }
//   }
//   return dp[half] === half
// };

// console.log(canPartition([1, 5, 11, 5]))

/**
 * @param {number[]} stones
 * @return {number}
 * 输入：[2,7,4,1,8,1]
    输出：1
 */
var lastStoneWeightII = function(stones) {

};