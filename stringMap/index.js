// make a function
// takes a string as an input, return the string in uppercase

// Make a loop that loops throug a string
// Create a new string with all the caracters in uppercase

// const stringNew = () => stringOld.toUpperCase();

function upper(string){
  return string.toUpperCase();
}


// make a function that takes two inputs, a string and another function
// returns the string with the other function applied to each caracter

function newFunction (stringInput, upperFunction) {
  let stringNew = "";
  for (let i = 0; i < stringInput.length; i +=1 ) {
    stringNew += upperFunction(stringInput[i]);
    }
    return stringNew;
}


console.log(newFunction('this is a test string', upper));
