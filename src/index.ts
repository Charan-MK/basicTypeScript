const greeting: string = 'Hello, Typescript!';
console.log('gereeting with type string: ', greeting);

const personName: string = 'John';
const personAge: number = 25;
console.log(`${personName} is ${personAge} years old`);

// an array of number
const arr: number[] = [];
arr.push(10);
arr.push(20);
arr.push(30);
console.log(arr.forEach((item, index) => console.log(`arr item: ${item} and its index: ${index}`)));

const strArr: readonly string[] = ['this is a readonly array of string', 'you cannot change its contents'];
console.log('Readonly array: ', strArr);

const ourTuple : [string, number, boolean] = ['john', 25, true];
console.log('this is a typeScript tuple: ', ourTuple, 'it is used when we know the length of the arry and types of it items');

const namedTuple: readonly [name: string, age: number, isMajor: boolean] = ['john', 25, true];
console.log(`namedTuple is used to set context about its items: ${namedTuple}`);

const [pAge, pName, pMajority] = namedTuple;
console.log('destructured named tuple: ', pAge, pName, pMajority);

const myObj: { name: string, age: number, isMajor: boolean, address: string} = {
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
const bike: { type: string, model: number, owner?: string} = {
    type: 'bajaj',
    model: 2023,
};
console.log('an object with optional property owner: ', bike);

const nameAgeMap: { [index: string]: number} = {}; // Index Signatures: can be used for objects without a defined list of properties.
nameAgeMap.bob = 26; nameAgeMap.alice = 21;
console.log('example of an index signature: ', nameAgeMap);