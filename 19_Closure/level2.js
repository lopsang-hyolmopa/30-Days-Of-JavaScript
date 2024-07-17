// Create a closure which has three inner functions
const calculate = () => {
  let a = 10,
    b = 20,
    sum = 0,
    product = 1,
    difference = 0;
  const add = () => {
    sum = a + b;
    return sum;
  };

  const subtract = () => {
    difference = b - a;
    return difference;
  };

  const multiply = () => {
    product = a * b;
    return product;
  };

  return {
    add: add(),
    subtract: subtract(),
    multiply: multiply(),
  };
};

const outerFunction = calculate();

console.log(outerFunction.add); // 30
console.log(outerFunction.subtract); // 10
console.log(outerFunction.multiply); // 200
