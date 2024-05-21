/**
 * JAVASCRIPT >> interpreted language >> line by line execution
 * adds functions to a website
 * both functional and object oriented
 */



/**
 * VARIABLE >> store values for later use
 */
var a = 7    // we can change variable type during runtime  >> Dyanamically types language
// console.log(a)
var a = 'hello'
console.log(a)



/**
 * LET, VAR AND CONST KEYWORDS
 */


/* 
    var is globally scoped 
*/
{
    var b = 'hi'
    console.log('value of b', b)
}
console.log('global value of b', b)  // even if we defined it inside a block of code, still this will print b outside the block as well



/*
    let is block scoped
*/
let b = 'Hello'

{
    let b = 'hi'
    console.log(b)
}
console.log(b)



/**
 * 'let' can be updated but not redeclared
 */

let c = 'Hello'
// let c = 4
// c = 4
console.log(c)

/**
 * 'const' can neither be redeclared nor updated
 */
const d = 'hello'
d = 4
// let d = 5
console.log(d)


/**
 * PRIMITIVE DATA TYPES >> 7 AND OBJECTS
 */
const a = null;
const b = BigInt(3653654)
console.log(a, b)


/**
 * Non- Primitive >> OBJECTS  >> key:value >> e.g. json file
 */
// const obj = {
//     name: 'Darakhshah',
//     id: 6763,
//     isWorking: true
// }
// console.log('the name of the obj is', obj.name)