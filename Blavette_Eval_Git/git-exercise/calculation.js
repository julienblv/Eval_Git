const add = a => b => a + b

const multiply = a => b => new Array(a).reduce(add(b), 0)

const equals = a => b => a === b

const isBiggerThan = a => b => b > a
const isSmallerThan = a => b => b < a

const isNegativeNumber = a => isNumeric(a) && a < 0

const absolute = a => isNegativeNumber(a) ? -a : a

const power = a => b => new Array(b).reduce(multiply(b), 1)

function isNumeric(a){
  return !isNaN(a)
}
