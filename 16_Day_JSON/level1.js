const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}

// Change skills array to JSON using JSON.stringify()
const txt = JSON.stringify(skills)
console.log(txt) 

// Stringify the age variable
const stringifiedAge = JSON.stringify(age)
console.log(stringifiedAge)

// Stringify the isMarried variable
const stringifiedIsMarried = JSON.stringify(isMarried)
console.log(stringifiedIsMarried)

// Stringify the student object
const studentJSON = JSON.stringify(student, undefined, 4)
console.log(studentJSON)