/* 
Write a function called convertToNumber that takes a string as an argument and returns the equivalent
number. If the string cannot be converted to a number, the function should return the string "Invalid number".
Use error handling in javascript to achieve this output.
*/
function convertToNumber(str) {
    try {
        let number = Number(str);
        if (isNaN(number)) {
            throw new Error("Invalid number");
        }
        return number;
    } catch (error) {
        return error.message;
    }
}

console.log(convertToNumber("123"));       // Output: 123
console.log(convertToNumber("12.34"));     // Output: 12.34
console.log(convertToNumber("abc"));       // Output: Invalid number
console.log(convertToNumber("123abc"));    // Output: Invalid number
console.log(convertToNumber(""));          // Output: 0
console.log(convertToNumber(" "));         // Output: 0
console.log(convertToNumber(null));        // Output: 0
console.log(convertToNumber(undefined));   // Output: Invalid number
console.log(convertToNumber(NaN));         // Output: Invalid number

/*
2. Building Robust Functions in JavaScript
Create a function called getPerson that takes an object as a parameter representing a person's name and age.
The function should return the person's name and age as a string in the format "Name: <name>, Age: <age>".
However, if the parameter is not a valid object with the properties "name" and "age", the function should throw
an error with the message "Invalid parameter type". Use try-catch to handle this error and return the error
message if it occurs.
 */
function getPerson(person) {
    try {
        // Check if the input is a valid object with properties 'name' and 'age'
        if (typeof person !== 'object' || person === null || !('name' in person) || !('age' in person)) {
            throw new Error("Invalid parameter type");
        }

        // Return the formatted string
        return `Name: ${person.name}, Age: ${person.age}`;
    } catch (error) {
        // Return the error message if an error occurs
        return error.message;
    }
}

// Test cases
console.log(getPerson({ name: "John", age: 30 }));       // Output: Name: John, Age: 30
console.log(getPerson({ name: "Jane", age: 25 }));       // Output: Name: Jane, Age: 25
console.log(getPerson({ name: "John" }));                // Output: Invalid parameter type
console.log(getPerson({ age: 30 }));                     // Output: Invalid parameter type
console.log(getPerson("Not an object"));                 // Output: Invalid parameter type
console.log(getPerson(null));                            // Output: Invalid parameter type
console.log(getPerson(undefined));                       // Output: Invalid parameter type


/* 
3. Car Description Class.
Create a class called Car with three properties: company, model, and year. The class should have a method
called getDescription that returns a string in the format "This is a <year> <company> <model>". Instantiate an
instance of the Car class and call the getDescription method.
*/
class Car {
    constructor(company, model, year) {
        this.company = company;
        this.model = model;
        this.year = year;
    }

    getDescription() {
        return `This is a ${this.year} ${this.company} ${this.model}`;
    }
}

// Instantiate an instance of the Car class
const myCar = new Car('Toyota', 'Corolla', 2021);

// Call the getDescription method
console.log(myCar.getDescription()); // Output: This is a 2021 Toyota Corolla

/* 
4.Employee Class Challenge.
Create a class called Employee with three properties: name, position, and salary. The class should have a
method called getSalary that returns the employee's salary. Instantiate an instance of the Employee class and
call the getSalary method.
*/

class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    getSalary() {
        return this.salary;
    }
}

// Instantiate an instance of the Employee class
const employee = new Employee('John Doe', 'Software Engineer', 75000);

// Call the getSalary method
console.log(employee.getSalary()); // Output: 75000

/* 
5.Implementing a Person Class with Default Values
Create a class called Person with two properties: name and age. The class should have a method called
getDetails that returns a string in the format "Name: <name>, Age: <age>". Use default parameters in the
constructor to set the values of name and age to "Unknown" and 0 if they are not provided.
*/
class Person {
    constructor(name = "Unknown", age = 0) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

// Test cases

// Instantiate an instance of the Person class with provided values
const person1 = new Person('Alice', 30);
console.log(person1.getDetails()); // Output: Name: Alice, Age: 30

// Instantiate an instance of the Person

/* 
6.Using Static Method to Add Two Numbers with Calculator Class
Create a class called Calculator with a static method called add. The add method should take two numbers as
arguments and return their sum. Instantiate the Calculator class and call the add method.
*/

class Calculator {
    static add(a, b) {
        return a + b;
    }
}

// Call the static add method on the Calculator class
console.log(Calculator.add(5, 3)); // Output: 8
console.log(Calculator.add(10, 20)); // Output: 30
console.log(Calculator.add(-5, 15)); // Output: 10
console.log(Calculator.add(0, 0)); // Output: 0

/*

*/


/* 
7.Password Checker.
Create a class called User with properties username and password. Implement a getter method for password
that returns the password with all characters replaced by asterisks. Implement a setter method for password
that checks if the new password is at least 8 characters long and contains at least one number and one
uppercase letter. If the password is valid, set the new password. If not, log an error message.
*/

class User {
    constructor(username, password) {
        this.username = username;
        this._password = password;
    }

    // Getter method for password
    get password() {
        return '*'.repeat(this._password.length);
    }

    // Setter method for password
    set password(newPassword) {
        const isValid = this.validatePassword(newPassword);
        if (isValid) {
            this._password = newPassword;
        } else {
            console.error("Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.");
        }
    }

    // Password validation method
    validatePassword(password) {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasMinLength = password.length >= 8;
        return hasUpperCase && hasNumber && hasMinLength;
    }
}

// Test cases

// Instantiate an instance of the User class
const user = new User('john_doe', 'Initial1');

// Check the password (should be masked)
console.log(user.password); // Output: ********

// Attempt to set an invalid password
user.password = 'short'; // Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.

// Attempt to set another invalid password
user.password = 'longbutnouppercase'; // Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.

// Attempt to set a valid password
user.password = 'ValidPassword1'; // This should be successful

// Check the password again (should be masked)
console.log(user.password); // Output: *************

/* 
Assignment Questions

Full Stack Web Development

8. Adding a Method to a Prototype.
Create a prototype object called Student with a property name. Add a method called printDetails to the
prototype that logs the string "Hello, my name is {name}" to the console. Instantiate a Student object with the
name "Mithun" and call the printDetails method.
*/

// Create the Student constructor function
function Student(name) {
    this.name = name;
}

// Add the printDetails method to the Student prototype
Student.prototype.printDetails = function() {
    console.log(`Hello, my name is ${this.name}`);
};

// Instantiate a Student object with the name "Mithun"
const student = new Student('Mithun');

// Call the printDetails method
student.printDetails(); // Output: Hello, my name is Mithun

/* 
Check the presence using closures.
9.Create a numberChecker function that takes an array of numbers as an argument and returns a function. The
returned function should take another number as an argument and return true if the number is in the array, and
false otherwise.
*/

function numberChecker(numbersArray) {
    return function(number) {
        return numbersArray.includes(number);
    };
}

// Test cases

// Create an instance of the numberChecker function
const checkNumber = numberChecker([1, 2, 3, 4, 5]);

// Check for the presence of numbers in the array
console.log(checkNumber(3)); // Output: true
console.log(checkNumber(6)); // Output: false
console.log(checkNumber(1)); // Output: true
console.log(checkNumber(10)); // Output: false

/*
10. Filter by Category.
Write a function that takes an array of products and returns a function that filters the array by a given product
category. The function must filter an eCommerce products array by a specific category. The closure filters
products using the filter() method. Finally, it returns a new array containing only the products with the same
category as the input.
*/

function categoryFilter(products) {
    return function(category) {
        return products.filter(product => product.category === category);
    };
}

// Example usage:

// Array of products
const products = [
    { name: 'Laptop', category: 'Electronics' },
    { name: 'Shirt', category: 'Clothing' },
    { name: 'Phone', category: 'Electronics' },
    { name: 'Pants', category: 'Clothing' },
    { name: 'Tablet', category: 'Electronics' }
];

// Create an instance of the categoryFilter function
const filterByCategory = categoryFilter(products);

// Filter products by 'Electronics' category
const electronics = filterByCategory('Electronics');
console.log(electronics);
// Output: [{ name: 'Laptop', category: 'Electronics' }, { name: 'Phone', category: 'Electronics' }, { name: 'Tablet', category: 'Electronics' }]

// Filter products by 'Clothing' category
const clothing = filterByCategory('Clothing');
console.log(clothing);
// Output: [{ name: 'Shirt', category: 'Clothing' }, { name: 'Pants', category: 'Clothing' }]

/*

*/