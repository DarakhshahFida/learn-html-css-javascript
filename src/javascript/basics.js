/**
 * JAVASCRIPT >> interpreted language >> line by line execution
 * adds functions to a website
 * both functional and object oriented
 */



/**
 * VARIABLE >> store values for later use
 */
// var a = 7    // we can change variable type during runtime  >> Dyanamically types language >> javascript types are dynamic
// console.log(a)
// var a = 'hello'
// console.log(a)



/**
 * LET, VAR AND CONST KEYWORDS
 */


/* 
    var is globally scoped 
*/
// {
//     var b = 'hi'
//     console.log('value of b', b)
// }
// console.log('global value of b', b)  // even if we defined it inside a block of code, still this will print b outside the block as well



/*
    let is block scoped
*/
// let b = 'Hello'

// {
//     let b = 'hi'
//     b = 5
//     console.log(b)
// }
// console.log(b)



/**
 * 'let' can be updated but not redeclared
 */

// let c = 'Hello'
// // let c = 4
// // c = 4
// console.log(c)

/**
 * 'const' can neither be redeclared nor updated
 */
// const d = 'hello'
// d = 4
// // let d = 5
// console.log(d)


/**
 * Use case of const and let
 */
// let radius = 5;
// let pi = 3.14;  // pi is a const value >> if let is used, it's value can be changed anywhere in the script
// pi = 3.12  // changed it's value
     
// // const pi = 3.14 //value cannot be changed for this const variable 
// let area;
// area = pi * radius * radius
// console.log(area)


/**
 * PRIMITIVE DATA TYPES >> 7 >> Number, string, boolean, null, undefined, bigit, symbol
 */
// const a = null;
// const b = BigInt(3653654)  //cannot be used with the methods in the built-in math object
// console.log(a, typeof a)
// console.log(b, typeof b)

// const exp = 1.5e12
// console.log(exp)


/**
 * Non- Primitive >> OBJECTS  >> key:value >> e.g. json file, arrays, promises, date object
 *
 */
// const colors = ['black', 'blue', 'grey'] //array object
// const date = new Date("2024-05-25") // date object
// const obj = {
//     name: 'Darakhshah',
//     id: 6763,
//     isWorking: true
// }
// console.log('the name of the obj is', obj.name)



/**
 * Arithmetic operators >> +, -, *, **, /, %, ++, --  >> perform arithmetic operations on numbers
 * 
 */
// let x = 5
// x++;  //increment by 1
// let z = x
// console.log(z)

// let x = 5;
// let y = x ** 2;  //using exponential operator
// console.log(y)
// y = Math.pow(x, 3)  //using built-in math object
// console.log(y)

// let num = 5
// console.log(num + 1)  //using + operator
// num++  //using increment
// console.log(num)

//Post increment and Pre increment
// let num = 4;
// // let x = num++  // for x, it first assigns and then increments >> that is why we got 4 for x and 5 for num
// // console.log(x, num)
// let x = ++num  // vice versa
// console.log(x, num)


//Operator precedence >> the order in which operation will be performed
// let x = 100 + 2 * 3;
// console.log(x)
// let y = (100 + 2) * 3
// console.log(y)

// adding boolean >> 0-false, 1-true
// let a = true; 
// let b = true;
// console.log(a + b)


/**
 * Assignment operators >>  assign values to js variables
 */
// let b = 10;
// b += 5;  // addition assignment operator
// console.log(b)

/**
 * Comparison Operators 
 *  == >> equal value, 
 *  === >> equal value and equal type, 
 *  != , 
 *  !== >> not equal value or not equal type,
 * >, <, <=, >=, ?
 */

/**
 * Logical Operators >> Explain in conditional statements
 * && >> logical AND
 * || >> logical OR
 * ! >> logical NOT
 */


/**
 * if else statements VS Ternary operator
 */


// let x = 7, y = 8, z = 9; 
// let res = x < y || x > z;
// let n = !res
// console.log(res, n)

// let num = 5;
// let result;
// if(num%2===0){
//     result = 'even'
// }
// else {
//     result = 'odd'
// }
// console.log(result)

// result = num % 2 === 0 ? 'Even': 'Odd'
// console.log(result)


// let day ='Monday';
// switch(day){
//     case 'Monday':
//         console.log('7 am');
//         break;
//     case 'Tue':
//         console.log('8 am');
//     case 'wed':
//         console.log('9 am')

// }



 










