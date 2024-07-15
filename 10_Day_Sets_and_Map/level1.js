// create an empty set
const emptySet = new Set()
console.log("Empty Set: ", emptySet)

// Create a set containing 0 to 10 using loop
const setOfNumbers = new Set()

for(let num=1; num<=10; num++){
    setOfNumbers.add(num)
}
console.log("Set after adding numbers from 0 to 10: ", setOfNumbers)

// Remove an element from a set
const names = ['ram', 'shyam', 'hari']
const setOfNames = new Set(names)
setOfNames.delete('ram')
console.log("Set after removing an element: ", setOfNames)

// Clear a set
const vowels = ['a', 'e', 'i', 'o', 'u']
const setOfVowels = new Set(vowels)
setOfVowels.clear()
console.log("Set after clearing: ", setOfVowels)

// Create a set of 5 string elements from array
const elements = ['Hydrogen', 'Helium', 'Nitrogen', 'Oxygen', 'Carbon']
const setOfElements = new Set(elements)
console.log("Set of 5 string elements from array", setOfElements)

// Create a map of countries and number of characters of a country
const countries = ['Finland', 'Sweden', 'Norway']

const countriesMap = new Map()
countries.forEach(country => {
    countriesMap.set(country, country.length)
})

console.log("Map :", countriesMap)