const MAX_ATTEMPTS = Number.MAX_SAFE_INTEGER,
  { MAX_ATTEMPTS_REACHED } = require('../config/messages'),
  MiojoReport = require('./report')

/**
 * Start the preparation of Noodles
 * @param {Number} cookingTime Cooking Time
 * @param {Number} hg1 hourglass one
 * @param {Number} hg2 hourglass two
 */
function cooking (cookingTime, hg1, hg2) {
  let tempHg1 = hg1,
    tempHg2 = hg2,
    checkTime = 0,
    count = 0,
    totalTime = 0

  while (checkTime < MAX_ATTEMPTS) {
    // set checkTime with lowest hourglass value
    checkTime = tempHg1 > tempHg2 ? tempHg2 : tempHg1

    if (checkTime === cookingTime) {
      totalTime += checkTime
      break
    }
    else {
      // resolve differences and add it to totalTime
      if (tempHg1 > tempHg2) {
        tempHg1 = tempHg1 - tempHg2
        totalTime += tempHg2
        tempHg2 = hg2
      }
      else {
        tempHg2 = tempHg2 - tempHg1
        totalTime += tempHg1
        tempHg1 = hg1
      }
    }
    count++
  }

  if (checkTime >= MAX_ATTEMPTS) {
      throw new Error(MAX_ATTEMPTS_REACHED)
  }
 
  MiojoReport({ hg1, hg2, count, totalTime, checkTime }).show()
}

/**
 * Expose module
 */
module.exports = { cooking }