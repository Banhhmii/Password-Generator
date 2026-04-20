const prompt = require("prompt-sync")();

const pwLength = parseInt(prompt("Please enter password length: "));
const lowerCaseLetters = "abdcefghiklmnopqrstuvwxyz";
let password = "";
while(pwLength != 0 && pwLength > 4) {
    let count = 0;
    for (let i = 0; i < pwLength; i++) {
        password += lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
        count += 1;
    }
    break;
}
console.log(password);