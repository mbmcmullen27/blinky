const assert = require('assert'),
    Blinky = require('./src/model.js'),
    unsortedList = [8,1,4,3,2,5,6,7,9,0],
    sortedList = [0,1,2,3,4,5,6,7,8,9] 

let b = new Blinky()
console.log(Blinky.image)
console.log(
    'Testing Blinky...\n'
    +`status: ${b.status}\n`
    +`hits: ${b.hits}`
)

// Bubble Sort
// static list
assert.deepStrictEqual(
    b.bubbleSort(unsortedList, (a,b)=>a>b), 
    sortedList
)

// random list
let subject = randomList(100)
let sorted = b.bubbleSort(subject,(a,b)=>a>b)
assert.ok(inOrder(sorted))

// calling methods
assert.deepStrictEqual(b.n(5),[0,1,2,3,4])
assert.ok(inOrder(b.n(100)))
assert.deepStrictEqual(b.nsquared(5),[4,3,2,1,0])
assert.ok(inOrder(b.nsquared(100), true))

// Merge Sort
// static list
assert.deepStrictEqual(
    b.mergeSort(unsortedList, (a,b)=>a>b), 
    sortedList
)

// random list
assert.ok(inOrder(b.mergeSort(subject,(a,b)=>a<b)))

// calling method
assert.ok(inOrder(b.nlogn(100)))


function randomList(length) {
    let rand = () => Math.floor(Math.random()*length)
    return [...Array(length).keys()].map(_=>rand())
}

function inOrder(list, reversed = false) {
    let ordered = reversed ? (a,b)=>a>=b : (a,b)=>a<=b
    for(let i = 0; i < list.length -1; i++) {
        if(!ordered(list[i],list[i+1])) return false
    }
    return true
}