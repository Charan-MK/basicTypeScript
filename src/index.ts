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

/**
 * Enums - Numeric enums
 */

enum directions {
    East, West, North, South,
};
console.log('an enum of direction: ', directions);
console.log('First direction is: ', directions.East, 'second is: ', directions.West);

// assigned enums
enum grades {
    S = 100,
    A = 90,
    B = 75,
    C = 60,
    D = 40,
};

// initialised enums
enum sampleEnum {
    first = 1,
    second,
    third,
};
console.log('Assigned enums: ', grades, 'and initialized enums: ', sampleEnum);
console.log('accessing grade enum: ', grades.S);

/**
 * String enums
 */
enum cardinalDirections {
    North = 'North',
    East = "East",
    South = "South",
    West = "West",
};
console.log('string enums: ', cardinalDirections);

/**
 * Aliases and Interfaces
 */

// Aliases can be used to define types separately

type CarYear = number;
type CarType = string;
type CarModel = string;
type BodyType = string;

const firstCar: { year: CarYear, bodyType: BodyType, model: CarModel, type: CarType } = {
    year: 2014,
    bodyType: 'hatchback',
    model: 'swift',
    type: 'suzuki',
};
console.log('firstCar defined from types: ', firstCar);

type Car = {
    year: CarYear,
    model: CarModel,
    bodyType: BodyType,
    type: CarType,
};

const secondCar: Car = {
    year: 2022,
    bodyType: 'sedan',
    model: 'dzire',
    type: 'suzuki'
}
console.log('secondCar defined with Car type: ', secondCar);

// interfaces
interface Rectangle {
    heightInCm: number,
    widthInCm: number,
};

const rectangle: Rectangle = {
    heightInCm: 12,
    widthInCm: 8,
}
console.log('Area of rectangle is: ', rectangle.heightInCm * rectangle.widthInCm, 'square centimeter');

/**
 * Key differences between type Alias and Interface are:
 * 1. Alias can represent a verity of types such as promitive, arrays, tuples, unions or intersection
 * 2. Alias support unions(|) and intersections (&): 
 */

type Cordinate = [number, number];
type ApiResponse = { success: boolean } | { error: string };
const firstRes = { success: true };
const secondRes = { error: 'service temparoriy down' };
console.log('an exampleof union in type alas: ', firstRes, secondRes);

/**
 * Union types
 */

/**
 * a function whuich receives a parameter of type string on number and returns nothing
 */
function printCode(code: string | number): void {
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
function addTwoNumber(param1: number, param2: number): number {
    return param1 + param2;
}

console.log(addTwoNumber(10, 5)); // outputs 15

// sending parameters to function can vary based on the situations, below are the five different types

/**
 * 1. regular: where parameters are just passed (param1: <type>, parame2: <type>)
 * 2. optional: (param1: <type>, parame2: <type>, param3?: <type>)
 * 3. default: (param1: <type>, parame2: <type>, param3: <type> = <value>)
 * 4. named: ({ param1, param2 }: { param1: <type>, param2: <type>})
 *          example: ({ sum, difference }: { sum: number, difference: number})
 * 5. rest: (param1, param2, rest: <typeOfArray>[]). the rest parameter is always an array
 */

// function types can be specified separately from functons using type aliases

type Negate = (value: number) => number;
const negateFnction: Negate = (value) => value * -1;

console.log(negateFnction(10)); // outputs -10 as result

// Casting: Casting is the process of overrriding a type

/**
 * casting with as
 */
let x: unknown = 'hey';
console.log((x as string).length);

/**
 * casting with <>
 */

let y: unknown = 'hello';
console.log((<string>y).length)

// Note: Casting doesn't chaneg the type of the data within the variable 
// example:

let z: unknown = 5;
console.log((z as string).length, (<string>z).length);

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

let temp: unknown = 4;
console.log((temp as unknown as string).length); // outputs undefined

/**
 * Classes in typescript
 */

class Person {
    public name: string;
    private age: number;
    
    constructor(pName: string, pAge: number) {
        this.name = pName;
        this.age = pAge;
    }

    public getName(): string {
        return this.name;
    }

    public getPersonDetails(): { name: string, isMajor: boolean } {
        if (this.age > 17) {
            return {
                name: this.name,
                isMajor: true,
            }
        }

        return {
            name: this.name,
            isMajor: false,
        }
    }
}

const person1 = new Person('John', 26);
console.log(person1.getName())
console.log(person1.getPersonDetails())

const person2 = new Person('Jessy', 17);
console.log(person2.getName())
console.log(person2.getPersonDetails())


/**
 * Generics
 * Generics allow creating "type variables" which can be used to create classes, functions and type aliases
 * that they don't need to explicitly define the types that they use 
 */

// generics with function

function filterArray<T>(arr: T[], predicate: (item: T) => boolean): T[] {
  return arr.filter(predicate);
}

// Usage
const words = ["apple", "banana", "cherry"];
const longWords = filterArray<string>(words, word => word.length > 5); // ['banana', 'cherry']

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = filterArray<number>(numbers, num => num % 2 === 0); // [2, 4]

console.log('long words: ', longWords, 'even numbers: ', evenNumbers);


/**
 * Utility types
 */

// Partial: changes all properties in an object to be optional
interface Point {
    x: number,
    y: number
};

// const testPoint: Point = { x: 23 }; throws an error since the testPint is missing y which is a required property
const point1: Partial<Point> = { x: 12 };
console.log('this is an object created using Partial: ', point1);

// Required: changes all the properties in an object to be required
interface Animal {
    species: string,
    category: string,
    sound?: string,
};

const testanimal: Animal = { species: 'Cat', category: 'domestic' }; // does not throw an error
const animal: Required<Animal> = { species: 'dog', category: 'domestic', sound: 'woof' };
console.log('this is an object created using Required utility: ', animal);

// Record: a shortcut to defining an object type with a specific key type and value type
const ageNameMap: Record<number, string> = {
    21: 'John',
    17: 'Jessy',
};
// Record<string, number> is equivalent to { [key: string]: number }
console.log('ageNameMap created using Record: ', ageNameMap);

// Omit: removes keys from an object type.
interface Triangle {
    len: number,
    breadth: number,
    height: number,
};

const rectangleVar: Omit<Triangle, 'height'> = {
    len: 12,
    breadth: 15,
};

// similarly Pick removes all but the specified keys from an object type.
// Exclude removes types from a union.
type Primitive = string | number | boolean
const value: Exclude<Primitive, string> = true; // a string cannot be used here since Exclude removed it from the type.

// ReturnType extracts the return type of a function type.

// Parameters extracts the parameter types of a function type as an array.

// Readonly is used to create a new type where all properties are readonly, meaning they cannot be modified once assigned a value.