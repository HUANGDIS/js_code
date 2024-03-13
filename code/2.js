/**
 * 
 */
function fn(len, arr, target){
  let num = 0
  for(let i = 0;i<len-1;i++){
    for(let j=i+1;j<len;j++){
      console.log(i,j,arr[i], arr[j])
      if(arr[i] + arr[j] === target){
        num +=1
      }
      console.log('_____',num)
    }
  }
  return num
}
console.log(fn(5, [1,2,2,2,3], 4))