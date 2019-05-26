class NoodlesReport {
  constructor (info) {
    this.info = info
  }

  show () {
    console.info(`
      ======== Relatório ========\n
      Ampulheta 1: ${this.info.hg1} minutos
      Ampulheta 2: ${this.info.hg1} minutos
      Tempo de cozimento: ${this.info.checkTime}
      Tempo total para preparo perfeito: ${this.info.totalTime}
      ----------------------------
      Interações: ${this.info.count}\n`)
  }
}

/**
 * Expose module
 */
module.exports = (info) => new NoodlesReport(info)