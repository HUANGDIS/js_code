/**
 * 流浪地球
 */

const fn = (arr1, arr2) => {
    let [n, e] = arr1
    let launches = new Array(n).fill(1001)
    let queue = []
    for (let i=0;i<e;i++) {
        let [t, p] = arr2[i]
        launches[p] = t
        queue.push([p,t])
    }
    while(queue.length > 0) {
        let [pos, time] = queue.shift()
        // 计算相邻位置考虑环状结构
        let neighbors = [(pos-1+n)%n, (pos+1)%n]
        neighbors.forEach(neighbor => {
            if (launches[neighbor] > time +1) {
                launches[neighbor] = time +1
                queue.push([neighbor, time+1])
            }
        })
    }
    let maxT = -Infinity
    let lastEngines = []
    for (let i=0;i<n;i++) {
        if (launches[i] > maxT) {
            maxT = launches[i]
            lastEngines = [i]
        }else if (launches[i] === maxT) {
            lastEngines.push(i)
        }
    }
    return lastEngines.sort((a,b) => a-b)
}
console.log(fn([8,2], [[0,2], [0,6]]))