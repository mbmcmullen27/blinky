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

    mergeSort(data) {
        if (data.length <= 1) return data

        var mid = data.length/2,
            left = data.slice(0,mid),
            right = data.slice(mid)

        left = this.mergeSort(left)
        right = this.mergeSort(right)

        return this.merge(left, right)
    }

    merge(left, right) {
        var res = []

        while(left.length > 0 && right.length > 0) {
            if (left[0] <= right[0]) res.push(left.shift())
            else res.push(right.shift())
        }

        while(left.length > 0) res.push(left.shift())
        while(right.length > 0) res.push(right.shift())

        return res
    }

    n(len){
        return this.bubbleSort([...Array(len).keys()],(a,b)=>a>b)
    }

    nsquared(len) {
        return this.bubbleSort([...Array(len).keys()],(a,b)=>a<b)
    }

    nlogn(len) {
        let data = [...Array(len).keys()].map(_=>Math.floor(Math.random()*100))
        return this.mergeSort(data)
    }
}

module.exports = Blinky