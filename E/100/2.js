/**
 * 斗地主之顺子
 */

const fn = (str) => {
    let CARD_TO_NUMBER  = {
        '3':3,'4':4,'5': 5,'6':6,'7':7,'8':8,'9':9,'10':10,'J':11,'Q': 12,'K': 13,'A': 14, '2':16
    }
    let cards = str.split(' ')
    cards.sort((a,b) => CARD_TO_NUMBER[a] - CARD_TO_NUMBER[b])

    let straights = [] //存储所有可能的顺子序列
    let currentStraight = [cards[0]]
    straights.push(currentStraight)

    //从第二张牌开始遍历所有牌
    for (let i =1;i<cards.length;i++) {
        let card = cards[i]
        let added = false
        for (let straight of straights) {
            if (CARD_TO_NUMBER[card] - CARD_TO_NUMBER[straight[straight.length -1]] === 1) {
                straight.push(card)
                added = true
                break
            }
        }
        if (!added) {
            let newStraight = [card]
            straights.push(newStraight)
        }
    }
    let vaildStraights = straights.filter(item => item.length >= 5)

    if (!vaildStraights.length) {
        return 'No'
    }else {
        vaildStraights.sort((a,b) => CARD_TO_NUMBER[a[0]] - CARD_TO_NUMBER[b[0]])
        vaildStraights = vaildStraights.map(straight => straight.join(''))
    }
    return vaildStraights
}

console.log(fn('2 9 J 10 3 4 K A 7 Q A 5 6'))