// var findPeakElement = function(nums) {
//     let res = []
//     for(let i =1;i<nums.length-2;i++){
//         if(nums[i] > nums[i-1] && nums[i]> nums[i+1]){
//             res.push(i)
//         }
//     }
//     console.log(res)
// };
// findPeakElement([1,2,1,3,5,6,4])

// var longestConsecutive = function(numArr) {
//     let arr = new Set([...numArr])
//     let nums = Array.from(arr).sort((a, b) => a -b)
//     if(nums.length <=1) return nums.length
//     let maxLen = 0
//     console.log(nums)
//     console.log(nums.length)
//     for(let i=0;i<nums.length;i++){
//         for(let j=i+1;j<nums.length;j++){
//             console.log(i, j, nums[j])
//             if(nums[j] - nums[j-1] !== 1){
//                 maxLen = Math.max(maxLen, j-1-i+1)
//                 break
//             }else if(j === nums.length-1){
//                 maxLen = Math.max(maxLen, j-i+1)
//                 console.log(maxLen)
//                 break
//             }
//             console.log(maxLen)
//         }
//     }
//     return maxLen
// };
// console.log(longestConsecutive([0,0]))

// const longestConsecutive = function(nums){
//     let count = 1
//     let max = 1
//     nums = nums.sort((a, b) => a-b)
//     for(let i=0;i<nums.length;i++){
//         const next = nums[i+1]
//         if(nums[i] === next) continue
//         if(nums[i]+1 === next){
//             count++
//         }else{
//             count = 1
//         }
//         max = Math.max(max, count)
//     }
//     return max
// }
// console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))

// var moveZeroes = function(nums) {
//     let count = 0
//     let res = []
//     for(let i = 0;i<nums.length;i++){
//         if(nums[i] === 0){
//             count++
//         }else {
//             res.push(nums[i])
//         }
//     }
    
//     for(let i=0;i<count;i++){
//         res.push(0)
//     }
//     return res
// };
// console.log(moveZeroes([0,1,0,3,12]))

/**
 * 
 * @param {给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。} height 
 * 输入：[1,8,6,2,5,4,8,3,7]
    输出：49 
    解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
 */
// var maxArea = function(height) {
//     let left = 0;right = height.length-1
//     let max = 0;res = 0
//     while(left < right){
//         max = Math.min(height[left], height[right]) * (right - left)
//         res = Math.max(res, max)
//         if(height[left] <= height[right]){
//             left++
//         }else{
//             right--
//         }
//     }
//     return res
// };

// console.log(maxArea([1,8,6,2,5,4,8,3,7]))


/**
 * 输入：nums = [-1,0,1,2,-1,-4]
    输出：[[-1,-1,2],[-1,0,1]]
    解释：
    nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
    nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
    nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
    不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
 */

// var threeSum = function(nums) {
//     nums.sort((a,b) => a - b)
//     let res = []
//     for(let i = 0;i<nums.length-2;i++){
//         if(nums[i] > 0) break
//         if(i>0 && nums[i] == nums[i-1]) continue
//         let l = i+1;r = nums.length-1
//         while(l<r){
//             let sum = nums[i] + nums[l] + nums[r]
//             if(sum === 0){
//                 res.push([nums[i],nums[l],nums[r]])
//                 while(l< r && nums[l] === nums[l+1]){
//                     l++
//                 }
//                 while(l< r && nums[r] === nums[r-1]){
//                     r--
//                 }
//                 l++
//                 r--
//             }
//             if(sum>0){
//                 r--
//             }
//             if(sum<0){
//                 l++
//             }
//         }
//     }
//     return res
// };
// console.log(threeSum([-1,0,1,2,-1,-4]))

/**
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 * 输入: s = "abcabcbb"
    输出: 3 
    解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 */
// var lengthOfLongestSubstring = function(s) {
//     let l = 0; res = 0;
//     const map = new Map()
//     for(let i=0;i<s.length;i++){
//         if(map.has(s[i]) && map.get(s[i])>= l){
//             l = map.get(s[i]) +1
//         }
//         res = Math.max(res, i-l+1)
//         map.set(s[i], i)
//     }
// };
// console.log(lengthOfLongestSubstring(' '))



/**
 * 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。
 * 输入: s = "cbaebabacd", p = "abc"
    输出: [0,6]
    解释:
    起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
    起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
 */
// var findAnagrams = function(s, p) {
    // let len = p.length
    // p = p.split('').sort().join('')
    // let res = []
    // for(let i=0;i<s.length;i++){
    //     let str = s.slice(i, i+len).split('').sort().join('')
    //     if(str === p){
    //         res.push(i)
    //     }
    // }
    // return res
// };
// console.log(findAnagrams('cbaebabacd','abc'))

/**
 * 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的连续子数组的个数 。
 * 输入：nums = [1,1,1], k = 2
   输出：2
 */
// var subarraySum = function(nums, k) {
//    let map = {0: 1}
//    let prefixSum = 0;count = 0
//    for(let i=0;i<nums.length;i++){
//       prefixSum += nums[i]
//       if(map[prefixSum - k]){
//          count++
//       }
//       if(map[prefixSum]){
//          map[prefixSum]++
//       }else{
//          map[prefixSum] = 1
//       }
//       console.log(i,prefixSum,map)
//    }
//    return count
// };
// console.log(subarraySum([1,2,3,2,4,5],4))

/**
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
   输出：6
   解释：连续子数组 [4,-1,2,1] 的和最大，为 6 
 */
// var maxSubArray = function(nums) {
//    let max = 0;maxAns = nums[0]
//    for(num of nums){
//       max = Math.max(max+num, num)
//       maxAns = Math.max(maxAns, max)
//    }
//    return maxAns
// };
// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))


/**
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
 * 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
   输出：[[1,6],[8,10],[15,18]]
   解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 */
// var merge = function(intervals) {
//    let res = [];
//    intervals.sort((a,b) => a[0] - b[0])
//    res.push(intervals[0])
//    for(let i=1;i<intervals.length;i++){
//       let temp = res.pop();
//       if(temp[1]>=intervals[i][0]){
//          temp = [Math.min(temp[0], intervals[i][0]), Math.max(intervals[i][1], temp[1])]
//          res.push(temp)
//       }else {
//          res.push(temp)
//          res.push(intervals[i])
//       }
//    }
//    return res
// };
// console.log(merge([[2,3],[4,5],[6,7],[8,9],[1,10]]))

/**
 * 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
 * 输入: nums = [1,2,3,4,5,6,7], k = 3
   输出: [5,6,7,1,2,3,4]
   解释:
   向右轮转 1 步: [7,1,2,3,4,5,6]
   向右轮转 2 步: [6,7,1,2,3,4,5]
   向右轮转 3 步: [5,6,7,1,2,3,4]
 */
// var rotate = function(nums, k) {
//    for(let i=0;i<k;i++){
//       let num = nums.pop()
//       nums.unshift(num)
//    }
//    return nums
// };
// console.log(rotate([1,2,3,4,5,6,7],3))


/**
 * 给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。
 * 输入: nums = [1,2,3,4]
   输出: [24,12,8,6]
 */
// var productExceptSelf = function(nums) {
//    let res = []
//    console.log(nums)
//    let sum = function(arr){
//       let sum = 1
//       for(let a of arr){
//          sum = sum * a
//       }
//       return sum === -0 ? 0 : sum
//    }
//    for(let i=0;i<nums.length;i++){
//       let tmp = []
//       if(i === 0){
//          tmp = nums.slice(1)
//       }else {
//          tmp = nums.slice(0,i).concat(nums.slice(i+1))
//       }
//       res.push(sum(tmp))
//    }
//    return res
// };
// console.log(productExceptSelf([-1,1,0,-3,3]))

/**
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 * 输入：nums = [1,2,3]
   输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]  
 */
// var permute = function(nums) {
//    let res = [],path = []
//    def(nums, nums.length,[])
//    return res

//    function def(arr, len, used){
//       if(path.length === len){
//          res.push(Array.from(path))
//          console.log(res)
//          return
//       }
//       for(let i =0;i<len;i++){
//          if(used[i]) continue
//          path.push(arr[i])
//          used[i] = true
//          console.log(i, path, used)
//          def(nums,len,used)
//          path.pop()
//          used[i] = false
//       }
//    }
// };

// console.log(permute([1,2,3]))

/**
 * 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
   解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
   输入：nums = [1,2,3]
   输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 */
// var subsets = function(nums) {
//    let res = [], path = []
//    function dfs(index){
//       res.push([...path])
//       for(let i=index;i<nums.length;i++){
//          path.push(nums[i])
//          dfs(i+1)
//          path.pop()
//       }
//    }
//    dfs(0)
//    return res
// };
// console.log(subsets([1,2,3]))

// const letterCasePermutation = S => {
//   const ans = []
//   const backTrack = (str,i) => {
//     if(i === S.length){
//       ans.push(str)
//       return
//     }
//     const curr = S[i]
//     if('a'<= curr && curr <= 'z' || 'A' <= curr && curr <= 'Z'){
//       let lower = str + curr.toLowerCase()
//       let upper = str + curr.toUpperCase()
//       backTrack(lower, i+1)
//       backTrack(upper, i+1)
//     }else{
//       backTrack(str+curr, i+1)
//     }
//   }
//   backTrack('', 0)
//   return ans
// }

// console.log(letterCasePermutation('a1b1'))


/**
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
 * 输入：digits = "23"
  输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
 */
// var letterCombinations = function(digits) {
//   let arrMap = {
//     '2': 'abc',
//     '3': 'def',
//     '4': 'ghi',
//     '5': 'jkl',
//     '6': 'mno',
//     '7': 'pqrs',
//     '8': 'tuv',
//     '9': 'wxyz'
//   }
//   let queue = []
//   queue.push('')

//   for(let i=0;i<digits.length;i++){
//     const levelSize = queue.length
//     for(let j=0;j<levelSize;j++){
//       const currStr = queue.shift()
//       const letters = arrMap[digits[i]]

//       for(let l of letters){
//         queue.push(currStr + l)
//       }
//     }
//   }
//   return queue
// };

// console.log(letterCombinations('23'))

/**
 * 给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，
 * 找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，并以列表形式返回。
 * 你可以按 任意顺序 返回这些组合
 * 输入：candidates = [2,3,6,7], target = 7
  输出：[[2,2,3],[7]]
 */
// var combinationSum = function(candidates, target) {
//   let res = []
//   candidates.sort((a,b) => a - b)

//   function dfs(nums, index,sum){
//     if(sum === target){
//       return res.push([...nums])
//     }
//     if(sum>target){
//       return
//     }
//     for(let i=index;i<candidates.length;i++){
//       nums.push(candidates[i])
//       dfs(nums, i, sum + candidates[i])
//       nums.pop()
//     }
//   }
//   dfs([],0,0)
//   return res
// };
// console.log(combinationSum([2,3,6,7],7))


/**
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 输入：n = 3
  输出：["((()))","(()())","(())()","()(())","()()()"]  
 */
// var generateParenthesis = function(n) {
//   let res = []
//   function dfs(left, right,str){
//     if(str.length === n*2){
//       return res.push(str)
//     }
//     if(left>0){
//       dfs(left-1, right, str+'(')
//     }
//     if(left<right){
//       dfs(left, right-1, str+')')
//     }
//   }
//   dfs(n,n,'')
//   return res
// };
// console.log(generateParenthesis(2))

/**
 * 给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums ，原地对它们进行排序，
 * 使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
    我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
    输入：nums = [2,0,2,1,1,0]
    输出：[0,0,1,1,2,2]
 */
// var sortColors = function(nums) {
//   let p = -1
//   let q = nums.length
// };
// console.log(sortColors([2,0,1]))


/**
 * 
 * @param {*} matrix 满足下述两条属性的 m x n 整数矩阵：行中的整数从左到右按非严格递增顺序排列。每行的第一个整数大于前一行的最后一个整数
 * @param {*} target 整数 target ，如果 target 在矩阵中，返回 true ；否则，返回 false 
 * 输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
  输出：true
 */
// var searchMatrix = function(matrix, target) {
//   const m = matrix.length, n = matrix[0].length
//   let left = 0,right = m-1
//   if(matrix[0][0]>target){
//     return false
//   }else if(matrix[m-1][n-1]<target){
//     return false
//   }
//   let  pos = 0
//   while(left<=right){
//     let mid = Math.floor((right+left)/2)
//     if(matrix[mid][0] === target || matrix[mid][n-1] === target){
//       return true
//     }else if(matrix[mid][n-1] < target){
//       left = mid +1
//     }else if(matrix[mid][0]<target && matrix[mid][n-1] > target){
//       pos = mid
//       break
//     }
//     else if(matrix[mid][0]>target){
//       right = mid -1
//     }
//   }
//   if(matrix[pos].indexOf(target) === -1){
//     return false
//   }else {
//     return true
//   }
// };
// console.log(searchMatrix([[1],[3]],3))


/**
 * 
 * @param {*} nums 照非递减顺序排列的整数数组 nums，和一个目标值 target。
 * @param {*} target 请你找出给定目标值在数组中的开始位置和结束位置。
 * 如果数组中不存在目标值 target，返回 [-1, -1]。
 * 输入：nums = [5,7,7,8,8,10], target = 8
    输出：[3,4]
 */
// var searchRange = function(nums, target) {
//   const n = nums.length
//   let left = 0,right = n-1, mid
//   if(nums[0]>target || nums[n-1] < target){
//     return [-1,-1]
//   }
//   if(!nums.length) return [-1,-1]
//   while(left<=right){
//     mid = Math.floor((left+right)/2)
//     if(nums[mid] === target){
//       break
//     }else if(nums[mid]< target){
//       left = mid+1
//     }else{
//       right = mid-1
//     }
//   }
//   if(left> right) return [-1,-1]
//   let i = mid,j = mid
//   while(nums[i] === nums[i-1]) i--
//   while(nums[j] === nums[j+1]) j++
//   return [i,j]
// };
// console.log(searchRange([5,7,7,8,8,10],8))



/**
 * 
 * @param {*} nums 给你一个元素值 互不相同 的数组 nums ，
 * 它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的 最小元素 
 * 输入：nums = [3,4,5,1,2]
    输出：1
    解释：原数组为 [1,2,3,4,5] ，旋转 3 次得到输入数组。
 */
// var findMin = function(nums) {
//   let left =0,right=nums.length-1
//   while(left<right){
//     let mid = (left+right)>>1
//     if(nums[mid]>nums[right]){
//       left = mid+1
//     }else{
//       right = mid
//     }
//   }
//   return nums[left]
// };


/**
 * 
 * @param {*} s 最长回文字符串
 * 输入：s = "babad"
   输出："bab"
 */
// var longestPalindrome = function(s) {
//   if(s.length <= 1) return ''
//   let len = 0,res = s[0]
//   for(let i=0;i<s.length;i++){
//     for(let j=s.length-1;j>i;j--){
//       if(s[i] === s[j]){
//         let flag = isHuiWen(s.slice(i,j+1))
//         if(flag){
//           if(s.slice(i,j+1).length>len){
//             len = s.slice(i,j+1).length
//             res = s.slice(i,j+1)
//           }
//         }
//       }
//     }
//   }
//   function isHuiWen(str){
//     return str === str.split('').reverse().join('')
//   }
//   return res
// };
// console.log(longestPalindrome('babad'))

/**
 * @param {string} s
 * @return {number}
 * 输入: s = "abcabcbb"
  输出: 3 
  解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 */
// var lengthOfLongestSubstring = function(s) {
//   let len = s.length
//   if (!s) return 0
//   if (len=== 1)  return 1
//   let max = 0
//   const arr = s.split('')
//   for (let i=0;i<len;i++) {
//     let j = i + 1
//     const str = []
//     str.push(arr[i])
//     while(!str.includes(arr[j]) && j < len){
//       str.push(arr[j])
//       console.log(str)
//       j++
//     }
//     max = max > str.length ? max : str.length
//   }
//   return max
// };
// console.log(lengthOfLongestSubstring('dvdf'))

/**
 * @param {number} x
 * @return {number}
 * 输入：x = 123
    输出：321 
 */
// var reverse = function(x) {
//   let arr  = x.toString().split('')
//   if (arr[0] !== '-') {
//     let num = Number(arr.reverse().join(''))
//     if (num <= 2147483647 && num >= -22147483648) {
//       return num
//     } else {
//       return 0
//     }
//   } else {
//     arr.shift()
//     let num = Number(arr.reverse().join(''))
//     if (num <= 2147483647 && num >= -22147483648) {
//       return ~num + 1
//     } else {
//       return 0
//     }
//   }
// };
// console.log(reverse('-120'))



/**
 * @param {number[]} height
 * @return {number}
 * 输入：[1,8,6,2,5,4,8,3,7]
输出：49 
解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
 */
// var maxArea = function(height) {
//   let max = 0, len = height.length, left = 0, right = len -1
//   while(right > left){
//     let area = Math.min(height[left], height[right]) * (right - left)
//     max = Math.max(area, max)
//     if (height[left] <= height[right]) {
//       left++
//     }else {
//       right--
//     }
//   }
//   return max
// };
// console.log(maxArea([1,8,6,2,5,4,8,3,7]))

/**
 * @param {number[]} nums
 * @return {number[][]}
 * 输入：nums = [-1,0,1,2,-1,-4]
  输出：[[-1,-1,2],[-1,0,1]]
  解释：
  nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
  nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
  nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
  不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
  注意，输出的顺序和三元组的顺序并不重要。
 */
// var threeSum = function(nums) {
//   nums = nums.sort((a,b) => a - b)
//   let len = nums.length
//   let res = []
//   for (let index=0;index<len-2;index++) {
//     if (nums[index]>0) break
//     if (nums[index] === nums[index-1]) continue
//     let left = index + 1
//     let right = len - 1
//     while(left < right){
//       let sum = nums[index] + nums[left] + nums[right]
//       if (sum === 0) {
//         res.push([nums[index], nums[left], nums[right]])
//         while(left< right && nums[left] === nums[left+1]) left++
//         while(left<right&& nums[right] === nums[right-1]) right--
//         left++
//         right--
//       } else if (sum > 0) {
//         right--
//       } else if (sum < 0){
//         left++
//       }
//     }
//   }
//  return res
// };
// console.log(threeSum([-2,0,0,2,2]))


/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 * 输入: s = "cbaebabacd", p = "abc"
  输出: [0,6]
  解释:
  起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
  起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词
 */
// var findAnagrams = function(s, p) {
//   let l = 0, r = 0, res = []
//   if (s.length < p.length) return []
//   let pMap = new Map(), sMap = new Map(), vaild = 0
//   for(let i of p){
//     pMap.set(i, (pMap.get(i) || 0) + 1)
//   }
//   while(r<s.length){
//     sMap.set(s[r], (sMap.get(s[r]) ||0)+1)
//     if(sMap.get(s[r]) === pMap.get(s[r])){
//       vaild++
//     }
//     if(r-l === p.length){
//       let ll = s[l]
//       if(sMap.get(ll) === pMap.get(ll)){
//         vaild--
//       }
//       sMap.set(ll, sMap.get(ll)-1)
//       l++
//     }
//     if (vaild === pMap.size) {
//       res.push(l)
//     }
//     r++
//   }
//   return res
// }
// console.log(findAnagrams("beeaaedcbc", 'c'))


/**
 * @param {number[]} nums
 * @return {number}
 * 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
  输出：6
  解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
 */
// var maxSubArray = function(nums) {
//   let max = nums[0]
//   if (nums.length === 1) return nums[0]
//   let res = []
//   res[0] = nums[0]
//   for(let i = 1;i<nums.length;i++){
//     res[i] = Math.max(nums[i]+res[i-1], nums[i])
//     console.log(res)
//     max = Math.max(res[i], max)
//   } 
//   return max
// }
// console.log(maxSubArray([-2,-1]))



/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 * 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
 * [ [2,4], [3,4], [2,3], [1,2], [1,3], [1,4], ]
 */

// let res = []
// let path = []
// var combine = function(n, k) {
//   res = []
//   combineHelper(n,k,1)
//   return res
// };
// let combineHelper = function (n,k,startIndex) {
//   if (path.length === k) {
//     res.push([...path])
//     return
//   }
//   for(let i = startIndex; i <= n - ( k - path.length) + 1;i++){
//     path.push(i)
//     combineHelper(n,k,i+1)
//     path.pop()
//   }
// }

// console.log(combine(4,2))


/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 * 找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。
 * 示例 1: 输入: k = 3, n = 7 输出: [[1,2,4]]
 * 示例 2: 输入: k = 3, n = 9 输出: [[1,2,6], [1,3,5], [2,3,4]]
 */
// var combinationSum3 = function(k, n) {
//   let res = [], path = [], sum = 0
//   function backtracking (path, startIndex) {
//     if (sum > n) return
//     if (path.length === k && sum === n) {
//       res.push([...path])
//       return
//     }

//     for(let i=startIndex;i<= 9 - (k - path.length)+1;i++){
//       sum += i
//       path.push(i)
//       startIndex++
//       console.log(startIndex, sum, path,res)
//       backtracking(path, startIndex)
//       sum -= i
//       path.pop()
//     }
//   }
//   backtracking(path,1)
//   return res
// };

// console.log(combinationSum3(3,7))


/**
 * @param {string} digits
 * @return {string[]}
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合
 */
// var letterCombinations = function(digits) {
//   const letterMap = [
//     '',
//     '',
//     "abc", // 2
//     "def", // 3
//     "ghi", // 4
//     "jkl", // 5
//     "mno", // 6
//     "pqrs", // 7
//     "tuv", // 8
//     "wxyz", // 9
//   ]
//   let len = digits.length
//   if (!len) return 
//   if (len === 1) return letterMap[digits].split('')
//   let res = [], path = []

//   function def (len,index) {
//     if (len === path.length) {
//       res.push(path.join(''))
//       return
//     }
//     let letter = letterMap[digits[index]]

//     for (let i of letter) {
//       path.push(i)
//       def(len, index+1)
//       path.pop()
//     }
//   }

//   def(len, 0)
//   return res
// };
// console.log(letterCombinations('233'))



/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 */
// var combinationSum = function(candidates, target) {
//   let res = [], path = [], sum = 0, flag = []
//   candidates.sort((a,b) => a - b)
//   function dfs (index) {
//     if (sum > target) return 

//     if (sum === target) {
//       res.push([...path])
//       return
//     }
//     for(let i=index;i<candidates.length&&candidates[i] <= target - sum;i++){
//       if (i > index && candidates[i] === candidates[i-1]){
//         flag.push(candidates[i])
//         continue
//       } 
//       sum += candidates[i]
//       path.push(candidates[i])
//       console.log(index, path, i)
//       dfs(i+1)
//       path.pop()
//       sum -= candidates[i]
//     }
//   }
//   dfs(0)
//   return res
// };
// console.log(combinationSum([10,1,2,7,6,1,5], 8))

/**
 * @param {string} s
 * @return {string[][]}
 * 给定一个字符串 s，将 s 分割成一些子串，使每个子串都是回文串。
 */
// const isPalindrome = (s, l, r) => {
//   for (let i = l, j = r; i < j; i++, j--) {
//       if(s[i] !== s[j]) return false;
//   }
//   return true;
// }
// var partition = function(s) {
//   let res = [], path = [], len = s.length
//   dfs(0)
//   return res
//   function dfs(index){
//     if (index >= len) {
//       res.push(Array.from(path))
//       return
//     }
//     for(let i=index;i<len;i++) {
//       if (!isPalindrome(s, index, i)) continue
//       let str = s.slice(index, i+1)
//       path.push(str)
//       dfs(i+1)
//       path.pop()
//     }
//   }
  
// };

// console.log(partition('aab'))

/**
 * @param {string} s
 * @return {string[]}
 */

// var restoreIpAddresses = function(s) {
//   let res = [], path = [], len = s.length

//   function dfs(index) {
//     if (path.length > 4) return 
//     if (path.length === 4 && index === s.length) {
//       res.push(path.join('.'))
//       return
//     }
//     for(let i = index;i<len;i++){
//       let str = s.slice(index, i+1)
//       if (str.length>3 || +str > 255) break 
//       if (str.length > 1 && str[0] === '0') break
//       path.push(str)
//       console.log(index,i, path, res)
//       dfs(i+1)
//       path.pop()
//     }
//   }

//   dfs(0)
//   return res
// };

// console.log(restoreIpAddresses('25525511135'))


/**
 * @param {number[]} nums
 * @return {number[][]}
 * 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 * 示例: 输入: nums = [1,2,3] 输出: [ [3],   [1],   [2],   [1,2,3],   [1,3],   [2,3],   [1,2],   [] ]
 */
// var subsets = function(nums) {
//   let res = [], path = [], len = nums.length
//   let sortNums = nums.sort((a,b) =>a-b)
//   function dfs (index) {
//     res.push([...path])
//     if (index > len -1) {
//       return
//     }

//     for(let i=index;i<len;i++){
//       if(i >index && sortNums[i] === sortNums[i-1])continue
//       path.push(sortNums[i])
//       dfs(i+1)
//       path.pop()
//     }
//   }
//   dfs(0)
//   return res
// };
// console.log(subsets([1,2,2]))



/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var findSubsequences = function(nums) {
//   let res = []
//   let path = []

//   function dfs(index) {
//     if (path.length>1){
//       res.push([...path])
//     }
//     let uset = []
//     for(let i = index;i<nums.length;i++){
//       if ((path.length && nums[i] < path[path.length-1]) || uset[nums[i]+100]) {
//         continue
//       }
//       uset[nums[i]+100] = true
//       path.push(nums[i])
//       dfs(i+1)
//       path.pop()
//     }
//   }
//   dfs(0)
//   return res
// };

// console.log(findSubsequences([4,6,7,7]))


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var permute = function(nums) {
//   let res = [], path = []
//   function dfs(used){
//     if (path.length === nums.length) {
//       res.push([...path])
//       return
//     }
//     for(let i=0;i<nums.length;i++){
//       if (used[i]) {
//         continue
//       }
//       used[i] = true
//       path.push(nums[i])
//       dfs(used)
//       path.pop()
//       used[i] = false
//     }
//   }
//   dfs([])
//   return res
// };

// console.log(permute([1,2,3]))


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var permuteUnique = function(nums) {
//   nums = nums.sort((a,b)=>a-b)
//   let res = [], path = []
//   function dfs (used) {
//     if (path.length === nums.length) {
//       res.push([...path])
//       return
//     }
//     for (let i=0;i<nums.length;i++){
//       if (i>0 && (nums[i] === nums[i-1] && used[i-1]) || used[i]) continue
//       used[i] = true
//       path.push(nums[i])
//       dfs(used)
//       path.pop()
//       used[i] = false
//     }
//   }
//   dfs([])
//   return res
// };
// console.log(permuteUnique([1,1,2]))


/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {

};
