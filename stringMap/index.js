//make a funciton that takes a string as an imput
//and returns the string in upper case;
const myString = "asdgasg";
function upperCaseString (string){
    return string.toUpperCase();
}
console.log("uppercase function", upperCaseString(myString));


//make a loop that loops through a string and
//creates a new string with all the characters uppercased
let newString = "";
for( let x = 0; x < myString.length; x += 1){
    let y = upperCaseString(myString[x]);
    newString += y;
}
console.log("for loop", newString);


// make a function that takes two imputs a string and another function
//and returns the string with the other function applied to each character


function stringMap (string2, functionb){
    let newString1 = "";
    for( let x = 0; x < string2.length; x += 1){
        let y = functionb(string2[x]);
        newString1 += y;
    }
    return newString1;
}
console.log("function func", stringMap(myString, upperCaseString));

function doubleString (string) {
    return string + string;
}

console.log("test doubleString(hei på deg)", doubleString("hei på deg"));

console.log("test stringMap(hola carino, doubleString)", stringMap("hola carino", doubleString));

function addDashToString(string) {
    return string + "-";
}

console.log("test addDashToString(boing)", addDashToString("boing"));

console.log("test stringMap(boing, addDashToString)", stringMap("boing", addDashToString));
