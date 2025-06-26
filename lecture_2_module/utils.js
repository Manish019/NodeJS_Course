


//old way of exporting functions
//  const sum = (a,b) => (a + b)
//  const sub = (a,b) => (a - b)
//  const mul = (a,b) => (a * b)
//  const div = (a,b) => (a / b)
//  const mod = (a,b) => (a % b)



// New way of exporting functions using ES6 syntax


export const sum = (a,b) => (a + b)
export const sub = (a,b) => (a - b)
export const mul = (a,b) => (a * b)
export const div = (a,b) => (a / b)
export const mod = (a,b) => (a % b)


//we can export multiple functions from a single file


//we can not use module.exports
//module.exports = {sum, sub, mul, div, mod}
// or we can export a single function