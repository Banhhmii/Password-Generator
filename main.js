const prompt = require("prompt-sync")();

function getLength() {
    const length = parseInt(prompt("Please enter password length: "));
    if (isNaN(length) || length < 8) {
        console.log("Invalid input. Please enter a number greater than or equal to 8.");
        return getLength();
    }
    return length;

}

function genratePassword() {
    const pwLength = getLength();

    const lowerCaseLetters = "abdcefghiklmnopqrstuvwxyz";
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+";
    let password = "";

    for (let i = 0; i < pwLength; i++) {
        let char = Math.floor(Math.random() * 4);
        if (char === 0) {
            password += upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
        } else if (char === 1) {
            password += numbers[Math.floor(Math.random() * numbers.length)];
        } else if (char === 2) {
            password += symbols[Math.floor(Math.random() * symbols.length)];
        } else {
            password += lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
        }
    }

    return password;
}

function printPassword() {
    const password = genratePassword();
    console.log("Generated Password: " + password);
}


printPassword();