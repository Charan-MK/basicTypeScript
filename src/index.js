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
function printCode(code) {
    console.log('thsis is a code: ', code);
}
printCode(404);
printCode('401');
// Union of types can result in error while performing some actions on the declared variable
// eg., in the above function printCode, code.toUpperCase() can result in error when the code is of type number
