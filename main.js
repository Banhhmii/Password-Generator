const prompt = require("prompt-sync")();

const pwLength = parseInt(prompt("Please enter password length: "));
const lowerCaseLetters = "abdcefghiklmnopqrstuvwxyz";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+";
let password = "";
g
while(pwLength != 0 && pwLength > 4) {
    let count = 0;
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
        count++;
    }
    break;
}
console.log(password);