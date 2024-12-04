/**
 * 猜字谜
 */

const fn = (str1, str2) => {
  let puzzles = str1.split(',')
  let answers = str2.split(',')
  const matchAnswers = []

  for(let puzzleIndex=0;puzzleIndex<puzzles.length;puzzleIndex++) {
    const sortedPuzzle = puzzles[puzzleIndex].split('').sort().filter((char, index, array) => {
      return index === 0 || char !== array[index - 1]
    }).join('')
    let found = false

    for(let answerIndex=0;answerIndex<answers.length;answerIndex++) {
      const sortedAnswer = answers[answerIndex].split('').sort().filter((char, index,array) => {
        return index === 0 || char !== array[index-1]
      }).join('')
      if (sortedPuzzle === sortedAnswer) {
        found = true
        matchAnswers.push(answers[answerIndex])
        break
      }
    }
    if (!found) {
      matchAnswers.push('not found')
    }
  }
  return matchAnswers
}

console.log(fn('bdni,wooood','bind,wrong,wood'))