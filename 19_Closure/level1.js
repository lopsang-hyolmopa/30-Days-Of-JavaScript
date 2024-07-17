// Closure - If the inner function accesses the variable of outer function, then it is called closure.

// Create a closure which has one inner function
const outerFunction = () => {
  let count = 0;
  const innerFunction = () => {
    count++;
    return count;
  };
  return innerFunction;
};

const innerFunc = outerFunction();

console.log(innerFunc());
