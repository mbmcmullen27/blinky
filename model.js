class Blinky {
    static image = require('./blinky.js').image
    constructor(status = 200) {
        this.status = status
        this.hits = 0
    }

    bubbleSort(data, test) {
        for(let i = 0; i < data.length;i++) {
            for(let j = 0; j < data.length-i; j++) {
                if(test(data[j],data[j+1])) {
                    let temp = data[j]
                    data[j]=data[j+1]
                    data[j+1] = temp
                }
            }
        }
        return data
    }

    n(len){
        return this.bubbleSort([...Array(len).keys()],(a,b)=>a>b)
    }

    nsquared(len) {
        return this.bubbleSort([...Array(len).keys()],(a,b)=>a<b)
    }
}

module.exports = Blinky