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