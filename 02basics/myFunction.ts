function addTwo(num: number){
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

export {}