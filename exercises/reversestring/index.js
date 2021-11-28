// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  /*
    start from end of string, then add to str
  */
  let currentString = ''
  for (let i = str.length - 1; i >= 0; i--) {
    currentString += str[i]
    // console.log('currentStr:', currentString)
  }
  return currentString

}

module.exports = reverse;
