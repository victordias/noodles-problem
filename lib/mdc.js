/**
 * Calcula o maior divisor comum entre dois números
 * @param {Number} a primeiro número
 * @param {Number} b segundo número
 */
function mdc (a, b) {
  if (b) {
    return mdc(b, a % b)
  }
  else {
    return Math.abs(a) 
  }
}

/**
 * Expose module
 */
module.exports = mdc