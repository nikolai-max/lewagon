const {stringMap}= require ("./index");
//make a function that takes a string imput and a nunber
//and returns the old string multiplied that number of times
//ie; f("a", 3)= "aaa"


const myString = "ali!ush?fa";


function stringMultiply(string, number){
    let newString = "";
    for(let x = 0; x < number; x += 1){
        newString += string;
    }
    return newString;
}

console.log(stringMultiply(myString, 5));

const myString1 = "!";
//make a function that takes a string as an imput,
//if the string is a single exclamation mark, return ten !,
//if the string is a single ?, return 20 ?,
//otherwise rreturn string unchanged:
console.log("before checkSymbols");
function checkSymbols (string1){
    if (string1 === "!"){
        return stringMultiply(string1, 10);
    }
    if (string1 === "?"){
        return  stringMultiply(string1, 20);
    }
    return string1;
}
console.log(checkSymbols(myString1));


const newfvariable = "Hello workd! How are you?";
console.log(stringMap(newfvariable, checkSymbols));
