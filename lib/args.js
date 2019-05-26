const {
    USAGE,
    AMP_TIME_CANNOT_BE_LESS_THEN_COOKING_TIME,
    CANNOT_COOK_WITH_THESE_TIMES
  } = require('../config/messages'),
  MDC = require('../lib/mdc')

/**
 * Parse process arguments basead on Game Parameters Rules
 * @param {Array} args game arguments
 * @returns {Array<Number>} parsed arguments
 * @throws {Error} if cannot parse params
 */
function parser (args) {
  const UsageError = new Error (USAGE)
  if (args.length !== 3) throw UsageError
  
  const parsedValue = args.map(el => {
      const value = parseInt(el)
      if (isNaN(value)) throw UsageError
      return value
  })

  return validate(parsedValue)
}

/**
 * Validate Game Parameters
 * @param {Array} params parsed game parameters
 * @returns {Array} return the same passed params
 * @throws {Error} if there are some problem rules
 */
function validate (params) {
  const [ cookingTime, hg1, hg2 ] = params
  if (hg1 <= cookingTime || hg2 <= cookingTime) {
    throw new Error(AMP_TIME_CANNOT_BE_LESS_THEN_COOKING_TIME)
  }
  // the cooking time must have an exact division by the MDC
  if (cookingTime % MDC(hg1, hg2)) {
    throw new Error(CANNOT_COOK_WITH_THESE_TIMES)
  }
  return params
}

/**
 * Expose Parser
 */
module.exports = parser