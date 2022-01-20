const Blinky = require('./model.js')

let b = new Blinky()
console.log(Blinky.image)

console.log(b.status)
console.log(b.hits)

// console.log(b.bubbleSort([5,5,5,5,1,2,3]))
console.log(JSON.stringify(b.n(1000)))
// console.log(b.mergeSort([55,10,1,9,4,23]))
// console.log(b.nlogn(10))