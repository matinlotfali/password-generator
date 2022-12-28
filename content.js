//Generates a password given a length and whether or not you want uppercase, lowercase, digits, or symbols included
function generatePassword(length, upper, lower, digits, symbols){
    
    let uppercaseAllowed = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowercaseAllowed = "abcdefghijklmnopqrstuvwxyz";
    let digitsAllowed = "0123456789"
    let symbolsAllowed = "!@#$%^&*()+="

    let toJoin = [];

    if(upper){
        toJoin.push(uppercaseAllowed);
    }

    if(lower){
        toJoin.push(lowercaseAllowed);
    }

    if(digits){
        toJoin.push(digitsAllowed);
    }

    if(symbols){
        toJoin.push(symbolsAllowed);
    }

    //If the length of the 
    if(toJoin.length > 0){
        let charsAllowed = toJoin.join("");
        let password = [];
        
        for(i = 0; i < length; i++){
            let randPos = Math.floor(((Math.random() * 100) % charsAllowed.length));
            password.push(charsAllowed.charAt(randPos));
        }
        
        document.getElementById("passwordAppearsHere").innerHTML = password.join("");
        return(password.join(""));
    }
    else{
        document.getElementById("passwordAppearsHere").innerHTML = "No characters permitted";
        return("No characters permitted");
    }
}


let uppercaseChars = true;
let lowercaseChars = true;
let digitChars = true;
let symbolChars = true;

document.getElementById("uppercaseChars").addEventListener("change", function(){
    uppercaseChars = !uppercaseChars;
})

document.getElementById("lowercaseChars").addEventListener("change", function(){
    lowercaseChars = !lowercaseChars;
})

document.getElementById("digitChars").addEventListener("change", function(){
    digitChars = !digitChars;
})

document.getElementById("symbolChars").addEventListener("change", function(){
    symbolChars = !symbolChars;
})

let sliderValue = 0;
document.getElementById("slider").addEventListener("input", function(){
    let slider = document.getElementById("slider");
    sliderValue = document.getElementById("sliderValue");
    sliderValue.innerHTML = slider.value;
})

document.getElementById("generatePasswordButton").addEventListener("click", function(){
    document.getElementById("copyPassword").innerHTML = "Copy password to clipboard";
    generatePassword(slider.value,uppercaseChars,lowercaseChars,digitChars,symbolChars);
});

document.getElementById("copyPassword").addEventListener("click", function(){
    document.getElementById("copyPassword").innerHTML = "Copied password to clipboard";

    let toCopy = document.getElementById("passwordAppearsHere");
    navigator.clipboard.writeText(toCopy.textContent);
})


