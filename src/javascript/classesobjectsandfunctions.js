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


function emp1(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
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
function profile(id, name) {
    this.id = id;
    this.name = name;
}

console.log(id)

// class Pen {
//     constructor(name, color, price) {
//         this.name = name;
//         this.color = color;
//         this.price = price;
//     }
//     showPrice() {
//         console.log(`Price of ${this.name} is ${this.price}`);
//     }
// }

// const pen1 = new Pen("Marker", "Blue", "$3");


// pen1.showPrice();


class Chair {
    constructor(color, seatHeight, recliningAngle, backSupport, headSupport, padding, armRests, seatSize, isHeightAdjustable, isMovable) {
        //Defaults which can be changed by the subclass class.
        this.color = color;
        this.seatHeight = seatHeight;
        this.recliningAngle = recliningAngle;
        this.backSupport = true;
        this.headSupport = false;
        this.padding = "3 inch";
        this.armRests = true;
        this.seatSize = "16 inch";
        this.isHeightAdjustable = false;
        this.isMovable = false;
        this.type = "Chair";
    }

    adjustableHeight() { };
    adjustAngle() { };
    moveChair() { };
}

const newChair = new Chair();

newChair;

/**
 * Inherit from parent class Chair
 * super keyword to call the constructor of its parent class >> it's properties
 */
class OfficeChair extends Chair {
    constructor(color, isHeightAdjustable, seatHeight, recliningAngle) {
        super();
        this.type = "Office Chair";
        this.color = color;
        this.isHeightAdjustable = isHeightAdjustable;
        this.seatHeight = seatHeight;
        this.recliningAngle = recliningAngle;
        this.isMovable = true;
    }

    adjustableHeight(height) {
        if (height > this.seatHeight) {
            console.log(`Chair height changed to ${height}`);
        } else {
            console.log(`Height cannot be decreased more than the seat height ${this.seatHeight}`);
        }
    }

    adjustAngle(angle) {
        if (angle >= this.recliningAngle) {
            console.log(`Chair angle changed to ${angle}`);
        } else {
            console.log(`Angle cannot be decreased more than the min reclining angle ${this.recliningAngle}`);
        }
    }

    moveChair(x, y) {
        console.log(`Chair moved to co-ordinates = (${x}, ${y})`);
    }
}

const newOfficeChair = new OfficeChair("Red", true, 30, 30);

console.log(newOfficeChair.adjustableHeight(31));
console.log(newOfficeChair.adjustAngle(40));
console.log(newOfficeChair.moveChair(10, 20));

//class Numbers with two methods
class Numbers {
    constructor(num1, num2, num3) {
        this.num1 = parseInt(num1);
        this.num2 = parseInt(num2);
        this.num3 = parseInt(num3)
    }
    displaySum() {
        const sum = this.num1 + this.num2 + this.num3;
        console.log(`Sum of numbers = ${sum} `)
    }
    displayProduct() {
        const product = this.num1 * this.num2 * this.num3;
        console.log(`Product of numbers = ${product} `)
    }
}
const number1 = process.argv[2];
const number2 = process.argv[3];
const number3 = process.argv[4];

const initialize = new Numbers(number1, number2, number3)
initialize.displaySum();
initialize.displayProduct();