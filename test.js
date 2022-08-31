string = "AAAAAAAAAAAAAGGGGGGGGCCCCCCIIIIIIIcccccckkkkkk"

function fractionValue(value) {
  const letter = value[value.length - 1]
  const number = value.slice(0, - 1)
  let result = ''
  for (let index = 0; index < Math.floor(number/9); index++) {
    result = result + (String(9 + letter))
  }
  return result + (number % 9) + letter
}

function countUnit(letter, value) {
  if(value.lastIndexOf(letter) !== 0) {
    if (value.lastIndexOf(letter) > 9) {
      return fractionValue(value.lastIndexOf(letter) + 1 + letter)
    }
    return value.lastIndexOf(letter) + 1 + letter
  }
  return 1 + letter
}

function encode(word) {
  let oldValue = ''
  let result = ''
  for (let i = 0; i < word.length; i++) {
    if (oldValue !== word[i]) {
      if (oldValue === '') {
        result = result.concat(countUnit(word[i], word))
        oldValue = word[i]
      } else {
        result = result.concat(countUnit(word[i], word.slice(word.lastIndexOf(oldValue) + 1)))
        oldValue = word[i]
      }
    }
  }
  console.log('result', result);
}

encode(string)