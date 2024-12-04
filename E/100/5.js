/**
 * boss的收入
 */

const fn = (n, arr) => {
  let ids = new Set()
  let parentToChildren = {}
  let childrenToParent = {}
  let income = {}
  for (let input of arr) {
    let  childId = input[0]
    let parentId = input[1]
    let childIncome = input[2]
    income[childId] = childIncome
    ids.add(childId)
    ids.add(parentId)
    childrenToParent[childId] = parentId

    if (!parentToChildren[parentId]) {
      parentToChildren[parentId] = []
    }
    parentToChildren[parentId].push(childId)
  }
  console.log('============', parentToChildren, childrenToParent, ids)
  for (let id of ids) {
    if (!childrenToParent.hasOwnProperty(id)) {
      income[id] = 0
      calcTotalIncome(id, parentToChildren, income)
      console.log(`${id} ${income[id]}`)
      break
    }
  }
}

function calcTotalIncome (parentId, parentToChildren, income) {
  const children = parentToChildren[parentId] || []
  console.log('--------', parentId, parentToChildren, income)
  for (let child of children) {
    calcTotalIncome(child, parentToChildren, income)
    const additionalIncome = Math.floor(income[child]/100)*15
    income[parentId] += additionalIncome
    console.log('00000000000', income)
  }
}

console.log(fn(6, [[1,0,100],[2,1,100],[3,1,200],[4,2,100],[5,2,100],[6,3,100]]))