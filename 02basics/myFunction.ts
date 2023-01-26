function addTwo(num: number): number{
    return num +2;
}

function getUpper(val: string){
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean){
    return `Name: ${name} | Email: ${email} | IsPaid: ${isPaid}`;
}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {

}

addTwo(5);
getUpper('mikhael kevin');
signUpUser("exhale-now", "exhale-test@gmail.com", false);
loginUser("exhale-now", "exhale-test@gmail.com");

// Situation when the function having conditional check to return a value, the return value could be boolean or string or anything else (depends on ur case)
function getValue(myVal: number): string | boolean{
    if (myVal > 5) {
        return true;
    }

    return "200 Ok!";
}

const getHello = (s: string): string => {
    return "";
}

const heroes = ["thor", true, 1];
// A variable value that declared as parameter will automaticly changing its value depends on the array type
heroes.map((hero): string => {
    return `Hero is ${hero}`;
});

// Void type will return nothing (not a null also not a undefined, its void)
function consoleError(errMsg: string): void{
    console.log(errMsg);
}

// Never type will never return a value
function handleError(errMsg: string): never{
    throw new Error(errMsg);
}

export {}