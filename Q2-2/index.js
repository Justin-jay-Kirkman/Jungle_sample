//Get lowercase alphabet
//Fill with zeros
//Loop through string
//--If char is in hash, add value to encoded string
//--Else add char to encoded string

function getLowerCaseAlphabet() {
    let alphabet = [];
    for (let i = 65; i <= 90; i++) {
        alphabet.push(String.fromCharCode(i).toLowerCase());
    }
    return alphabet;
}

function fillWithZeros(alphabet) {
    let alphabetHash = {};
    for (let i = 0; i < 26; i++) {
        alphabetHash[alphabet[i]] = 0;
    }
    return alphabetHash;
}

function g(str){
    const alphabet = getLowerCaseAlphabet();
    const alphabetHash = fillWithZeros(alphabet);
    str = str.toLowerCase();
    for(let i = 0; i < str.length; i++){
        let char = str[i];
        if(alphabetHash[char] !== undefined){
            alphabetHash[char] = alphabetHash[char] + 1;
        }
    }
    return alphabetHash;
}

let hash = g("Hello there! Apple!");

console.log(hash);
