const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]

// Find a union b
const union = [...a, ...b]
const unionOfSets = new Set(union)
console.log("Union of sets:", unionOfSets)

// Find a intersection b
let setB = new Set(b) 

const intersection = a.filter((number) => setB.has(number))
const intersectionOfSets = new Set(intersection)

console.log("Intersection of sets:", intersectionOfSets)

// Find a with b
const difference = a.filter((number) => !setB.has(number))
const differenceOfSets = new Set(difference)

console.log("Difference of sets:", differenceOfSets)