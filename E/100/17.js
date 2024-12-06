/**
 * 敏感字段加密
 */

const fn = (index, str) => {
  let charArray = str.split('')
  let command = ''
  let commandList = []

  for (let i=0;i<charArray.length;i++) {
    let ch = charArray[i]
    if (ch === '"' && command.includes(ch)) {
      command += '"'
      commandList.push(command)
      command = ''
    } else if (ch === '_' && !command.includes('"')) {
      if (command !== '') {
        commandList.push(command)
        command = ''
      }
    } else if (i === charArray.length -1) {
      command += ch
      commandList.push(command)
      command = ''
    } else {
      command += ch
    }
  }
  console.log('=========', commandList)
  if (index < 0 || index > commandList.length) {
    return 'ERROR'
  } else {
    commandList[index] = '******'
    let result = ''
    console.log('-------', commandList)
    for (let c of commandList) {
      result += '_' + c
    }
    result = result.substring(1)
    return result
  }

}

console.log(fn(2, 'aaa_password_"a12_45678"_timeout__100_""_'))