"use strict";
const greeting = 'Hello, Typescript!';
console.log('gereeting with type string: ', greeting);
const personName = 'John';
const personAge = 25;
console.log(`${personName} is ${personAge} years old`);
// an array of number
const arr = [];
arr.push(10);
arr.push(20);
arr.push(30);
console.log(arr.forEach((item, index) => console.log(`arr item: ${item} and its index: ${index}`)));
const strArr = ['this is a readonly array of string', 'you cannot change its contents'];
console.log('Readonly array: ', strArr);
const ourTuple = ['john', 25, true];
console.log('this is a typeScript tuple: ', ourTuple, 'it is used when we know the length of the arry and types of it items');
const namedTuple = ['john', 25, true];
console.log(`namedTuple is used to set context about its items: ${namedTuple}`);
const [pAge, pName, pMajority] = namedTuple;
console.log('destructured named tuple: ', pAge, pName, pMajority);
const myObj = {
    name: 'john',
    age: 25,
    isMajor: true,
    address: 'Bengaluru, Karnataka, India'
};
console.log('an object defined with its properties types, myObj: ', myObj);
// myObj.occupation = 'Engineer'; results in an error since occupation is not defined in type
const car = {
    type: 'Toyata',
    model: 2024,
}; // types can be inferenced from an object defined with properties and value, type can only be string and model can only be number
// an object can be declared with optional property
const bike = {
    type: 'bajaj',
    model: 2023,
};
console.log('an object with optional property owner: ', bike);
const nameAgeMap = {}; // Index Signatures: can be used for objects without a defined list of properties.
nameAgeMap.bob = 26;
nameAgeMap.alice = 21;
console.log('example of an index signature: ', nameAgeMap);
/**
 * Enums - Numeric enums
 */
var directions;
(function (directions) {
    directions[directions["East"] = 0] = "East";
    directions[directions["West"] = 1] = "West";
    directions[directions["North"] = 2] = "North";
    directions[directions["South"] = 3] = "South";
})(directions || (directions = {}));
;
console.log('an enum of direction: ', directions);
console.log('First direction is: ', directions.East, 'second is: ', directions.West);
// assigned enums
var grades;
(function (grades) {
    grades[grades["S"] = 100] = "S";
    grades[grades["A"] = 90] = "A";
    grades[grades["B"] = 75] = "B";
    grades[grades["C"] = 60] = "C";
    grades[grades["D"] = 40] = "D";
})(grades || (grades = {}));
;
// initialised enums
var sampleEnum;
(function (sampleEnum) {
    sampleEnum[sampleEnum["first"] = 1] = "first";
    sampleEnum[sampleEnum["second"] = 2] = "second";
    sampleEnum[sampleEnum["third"] = 3] = "third";
})(sampleEnum || (sampleEnum = {}));
;
console.log('Assigned enums: ', grades, 'and initialized enums: ', sampleEnum);
console.log('accessing grade enum: ', grades.S);
/**
 * String enums
 */
var cardinalDirections;
(function (cardinalDirections) {
    cardinalDirections["North"] = "North";
    cardinalDirections["East"] = "East";
    cardinalDirections["South"] = "South";
    cardinalDirections["West"] = "West";
})(cardinalDirections || (cardinalDirections = {}));
;
console.log('string enums: ', cardinalDirections);
const firstCar = {
    year: 2014,
    bodyType: 'hatchback',
    model: 'swift',
    type: 'suzuki',
};
console.log('firstCar defined from types: ', firstCar);
const secondCar = {
    year: 2022,
    bodyType: 'sedan',
    model: 'dzire',
    type: 'suzuki'
};
console.log('secondCar defined with Car type: ', secondCar);
;
const rectangle = {
    heightInCm: 12,
    widthInCm: 8,
};
console.log('Area of rectangle is: ', rectangle.heightInCm * rectangle.widthInCm, 'square centimeter');
const firstRes = { success: true };
const secondRes = { error: 'service temparoriy down' };
console.log('an exampleof union in type alas: ', firstRes, secondRes);
/**
 * Union types
 */
/**
 * a function whuich receives a parameter of type string on number and returns nothing
 */
function printCode(code) {
    console.log('thsis is a code: ', code);
}
printCode(404);
printCode('401');
// Union of types can result in error while performing some actions on the declared variable
// eg., in the above function printCode, code.toUpperCase() can result in error when the code is of type number
/**
 *  Functions
 *  receives two parameters of type number and return value of type number
*/
function addTwoNumber(param1, param2) {
    return param1 + param2;
}
console.log(addTwoNumber(10, 5)); // outputs 15
const negateFnction = (value) => value * -1;
console.log(negateFnction(10)); // outputs -10 as result
// Casting: Casting is the process of overrriding a type
/**
 * casting with as
 */
let x = 'hey';
console.log(x.length);
/**
 * casting with <>
 */
let y = 'hello';
console.log(y.length);
// Note: Casting doesn't chaneg the type of the data within the variable 
// example:
let z = 5;
console.log(z.length, z.length);
/**
 * Force casting
 */
// Force casting is overriding TypeScripts's type saftey to reat a value as different type
// syntax with example: (value as unknown as TargetType)
/**
 * x is unknown, holding a number.
 * force-cast it to string.
 * At runtime, it's still a number, so length is undefined.
 */
let temp = 4;
console.log(temp.length); // outputs undefined
/**
 * Classes in typescript
 */
class Person {
    constructor(pName, pAge) {
        this.name = pName;
        this.age = pAge;
    }
    getName() {
        return this.name;
    }
    getPersonDetails() {
        if (this.age > 17) {
            return {
                name: this.name,
                isMajor: true,
            };
        }
        return {
            name: this.name,
            isMajor: false,
        };
    }
}
const person1 = new Person('John', 26);
console.log(person1.getName());
console.log(person1.getPersonDetails());
const person2 = new Person('Jessy', 17);
console.log(person2.getName());
console.log(person2.getPersonDetails());
/**
 * Generics
 * Generics allow creating "type variables" which can be used to create classes, functions and type aliases
 * that they don't need to explicitly define the types that they use
 */
// generics with function
function filterArray(arr, predicate) {
    return arr.filter(predicate);
}
// Usage
const words = ["apple", "banana", "cherry"];
const longWords = filterArray(words, word => word.length > 5); // ['banana', 'cherry']
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = filterArray(numbers, num => num % 2 === 0); // [2, 4]
console.log('long words: ', longWords, 'even numbers: ', evenNumbers);
;
// const testPoint: Point = { x: 23 }; throws an error since the testPint is missing y which is a required property
const point1 = { x: 12 };
console.log('this is an object created using Partial: ', point1);
;
const testanimal = { species: 'Cat', category: 'domestic' }; // does not throw an error
const animal = { species: 'dog', category: 'domestic', sound: 'woof' };
console.log('this is an object created using Required utility: ', animal);
// Record: a shortcut to defining an object type with a specific key type and value type
const ageNameMap = {
    21: 'John',
    17: 'Jessy',
};
// Record<string, number> is equivalent to { [key: string]: number }
console.log('ageNameMap created using Record: ', ageNameMap);
;
const rectangleVar = {
    len: 12,
    breadth: 15,
};
const value = true; // a string cannot be used here since Exclude removed it from the type.
// ReturnType extracts the return type of a function type.
// Parameters extracts the parameter types of a function type as an array.
// Readonly is used to create a new type where all properties are readonly, meaning they cannot be modified once assigned a value.
