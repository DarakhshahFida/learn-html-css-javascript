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
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`EmailId: ${this.age}`);
        console.log(`Role: ${this.country}`);
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