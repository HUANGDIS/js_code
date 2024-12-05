/**
 * 增强的strstr
 */


const fn = (s1,s2) => {
  s2 = s2.replace(/\[(.*?)\]/g, '[$1]')

  console.log('========', s2)
  const pattern = new RegExp(s2)
  const matcher = pattern.exec(s1)

  if (matcher) {
    return(matcher.index)
  }else {
    return(-1)
  }
}

console.log(fn('abcd', 'b[cd]'))