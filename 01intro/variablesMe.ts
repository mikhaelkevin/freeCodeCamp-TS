// STRING PRIMITIVE TYPE
// A syntax to declare variable types
let greetings: string = "Mikhael Kevin";

/* If we using helper to define a static method like below. It will only show us a method that related to variable type
    *   Example: const firstExample: number = 19; 
    *   When we do firstExample. it will show us a static method for number type, instead of showing all static method like on javascript
*/ 
greetings.toLowerCase();
console.log(greetings);

// NUMBER PRIMITIVE TYPE
let userId: number = 334455;

// BOOLEAN PRIMITIVE TYPE
let isLoggedIn: boolean = false;

// TYPES INFERENCE
let anotherUserId = 12345;
anotherUserId.toFixed();

// Below code will show an error, because TS already know that anotherUserId variable is a number. So it cannot be replaced by another type.
// anotherUserId.toLowerCase();

// AVOID TYPE ANY - THIS TYPE MAKES YOUR CODE LOOKS BAD, ITS LIKE U USING TS FOR NOTHING
// EXAMPLE OF BAD CODE ON TS
let hero;
const getHero = () => {
    return "thor";
}

//Below is a bad code, which is variable hero will be a any type that allows any primitive types/other type allowed to be its value.
hero = getHero();

// EXAMPLE OF BETTER CODE ON TS
let anotherHero: string;

const getAnotherHero = () => {
    return "Captain America";
}

//Below is a result of better code in TS, which will only allows string as its variable value.
anotherHero = getAnotherHero();

// This export only temp to avoid an redeclare block scope error.
export {}