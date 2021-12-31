class Blinky {
    static image = require('./blinky.js').image
    constructor(status = 200) {
        this.status = status
        this.hits = 0
    }
}

module.exports = Blinky