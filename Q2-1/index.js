//Get Alphabet
//Create Alphabet Reverse Hash
//Loop through string
//If char is in hash, add value to encoded string
//Else add char to encoded string

function getUpperCaseAlphabet() {
    let alphabet = [];
    for (let i = 65; i <= 90; i++) {
        alphabet.push(String.fromCharCode(i));
    }
    return alphabet;
}

function createAlphabetReverse(alphaArray= []){
    let reverseHash = {}
    for (let i = 0; i < alphaArray.length; i++) {
        let index = alphaArray[i];
        let value = alphaArray[alphaArray.length-i-1];
        reverseHash[index] = value;
        reverseHash[index.toLowerCase()] = value.toLowerCase();
    }
    return reverseHash;
}

function f(str) {
    let encoded = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (reverseHash[char]) {
            encoded += reverseHash[char];
        } else {
            encoded += char;
        }
    }
    return encoded;
}


const alphaArray = getUpperCaseAlphabet();
const reverseHash = createAlphabetReverse(alphaArray);

console.log('acp => ' + f("acp"));
if(f("acp") === "zxk"){
    console.log("PASS!");
}
else{
    console.log("FAIL");
}
let phrase = "Errors in strategy cannot be correct through tactical maneuvers"
console.log(phrase +' => ' + f(phrase));
if(f(phrase) === "Viilih rm hgizgvtb xzmmlg yv xliivxg gsilfts gzxgrxzo nzmvfevih"){
    console.log("PASS!");
}
else{
    console.log("FAIL");
}
console.log(f("Viilih rm hgizgvtb xzmmlg yv xliivxg gsilfts gzxgrxzo nzmvfevih"));

