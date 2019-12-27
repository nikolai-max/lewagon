// make a function that takes a string & number (two inputs)
// console.log() that sting number of times

/*
function multilog(string, number){
  for (let i=0; i<number; i+=1) {
    console.log(string)
  }
}
*/

/* multilog("lord", 5);

/* let lord = "lord ";
console.log(lord.repeat(10)); */

// 1. make an test array with strings in
// 2. loop through that test array and print each string x10

/* const testArray = ["hello mars", "hello Spain", "hello aliens"];

for (let i=0; i<testArray.length; i+=1) {
  multilog(testArray[i], 10)
}
*/

/* make a new function that takes a string as input and print it 10 times */

/* function stringParty(string) {
	let stringNew = string + "\n";
  console.log(stringNew.repeat(10));
}

// stringParty("hello you there");


/*
1. Make a function that takes an input an array of strings
2. Prints each string in the array 10x
 */

/* function printString(stringArray) {
  for (let i=0; i<stringArray.length; i+=1) {
    stringParty(stringArray[i])
  }
}

 printString(["hello mars", "hello Spain", "hello aliens"]);


/*
make a function that takes two inputs (array, function) and call the function
on each of the other array
*/

function stringParty(string) {
	let stringNew = string + "\n";
  console.log(stringNew.repeat(10));
}

function myForEach(array, functionNew) {
  for (let i=0; i<array.length; i+=1) {
    functionNew(array[i]);
  };
}

let anArray = ["array", "arrayAgain"];

myForEach(anArray, stringParty);


/*
.forEach go through every element inside a loop
*/

anArray.forEach(stringParty);
