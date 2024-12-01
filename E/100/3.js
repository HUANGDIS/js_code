/**
 * 数大雁
 *
 */

const fn = (chars) => {
    const quack = 'quack'
    const states = new Array(quack.length).fill(0)
    const dp = []
    let max_ = 0

    for (let i=0;i<chars.length;i++) {
        let index = quack.indexOf(chars[i])
        if (index === -1) {
            return -1
        }
        if (index === 0) {
            states[index] += 1
        }else {
            if (states[index-1]) {
                states[index-1] -= 1
                states[index] += 1
            }
            console.log('-----', states)
            if (quack[quack.length-1] === chars[i]) {
                if (states[states.length-1] !== 0) {
                    const temp = [...states]
                    max_ = Math.max(max_, temp.reduce((a,b) => a + b))

                    for(let j = i;j<chars.length;j++) {
                        const index = quack.indexOf(chars[j])
                        if (temp[index-1]) {
                            temp[index-1] -= 1
                            temp[index] += 1
                        }
                        if (temp[temp.length-1] === max_){
                            break
                        }
                    }
                    console.log('88888', index, temp, max_, dp)
                    dp.push(temp[temp.length-1])
                    states[states.length-1] -= 1
                }
            }
        }
    }

    console.log(dp)
    return dp.length? Math.max(...dp) : -1
}

console.log(fn('quacqkuquacqkacuqkackuack'))