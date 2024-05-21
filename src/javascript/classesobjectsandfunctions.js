/**
 * Objects >> Non-Primitive data type
 * basically key: value pairs
 * 
 * In JavaScript, everything is an object except for the primitive data types (boolean, number, and string), and undefined. 
 * On the other hand null is actually an object reference even though you may at first believe otherwise. This is the reason typeof null returns "object".
 */


//Ways of creating objects

//1. creating instance of object
var obj = new Object()
obj.id = 1
obj.name = 'Darakhshah'
obj.profile = 'developer'
console.log(obj.id)

//2. 
const c = {
    'name': 'Darakhshah',
    'contact': 3776476,
    'job': true
}
console.log(c)
console.log(c.name)


//3. using object constructor
//you need to create function with arguments. Each argument value can be assigned in the current object by using this keyword.
//The this keyword refers to the current object.


function emp1(id,name,salary){  
    this.id=id;  
    this.name=name;  
    this.salary=salary;  
    }  
obj = new emp1(121, 'Darakhshah', 5443)
console.log(obj.id)


/**
 * The function above can be converted into a class
 * Classes and functions can be used interchangeably
 * FUNDAMENTAL DIFFERENCE: functions are hoisted unlike classes >> If I create an instance of a function before its declaration there will be no error >> unlike classes
 */

class emp {
    constructor(id, name, salary) {
        this.id = id
        this.name = name
        this.salary = salary
    }
}  
obj = new emp(121, 'Darakhshah', 5443)
console.log(obj.id)


/**
 *  * FUNDAMENTAL DIFFERENCE: functions are hoisted unlike classes >> If I create an instance of a function before its declaration there will be no error >> unlike classes
    CLASS >> template from where an object inherits its properties
 */
const id = new profile(1, 'darakhshah')
function profile(id, name){
    this.id = id;
    this.name = name;
}

console.log(id)