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


class Person {
    constructor(name, email, role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }

    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`EmailId: ${this.email}`);
        console.log(`Role: ${this.role}`);
    }


}


// Create instances of the Person class
const person1 = new Person('Darakhshah', 'darakk5961@gmail.com', 'Backend developer');
const person2 = new Person('Misbah-ul-Haq', 'misbah@gmail.com', 'devops');
const person3 = new Person('Mawra', 'mawra@gmail.com', 'Frontend developer');
const person4 = new Person('Hidayat', 'hidayat@gmail.com', 'QA engineer')
// Display details of person1
console.log('Person-1 Details:');
person1.displayDetails();

// Display details of person2
console.log('\nPerson-2 Details:');
person2.displayDetails();

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




