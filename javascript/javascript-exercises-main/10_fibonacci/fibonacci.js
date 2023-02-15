const fibonacci = function (n) {
  if (n <= 0) {
    return 'OOPS'
  } else if (n === 1 || n === 2) {
    return 1
  } else {
    let current = 1
    let previous = 1
    let next
    let count = 2
    while (count < n) {
      next = current + previous
      previous = current
      current = next
      count++
    }
    return current
  }
}

// Do not edit below this line
module.exports = fibonacci
