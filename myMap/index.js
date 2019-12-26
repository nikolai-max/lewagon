// make a function that takes a number as input
// returns it dubled;
// const double = (number) => number * 2;

// console.log(double(4));

// Make a loop that dobble evry number in an array
// Use the function you made

// const numberArray = [3, 5, 32, 5, 13];
// const newArray = [];

// Make a function that takes an array as an input
// and returns every array dubbled

/* function arrayParty(array) {
  for (let i = 0; i < array.length; i += 1) {
    const dumb = double(array[i]);
    newArray.push(dumb);
  }
  return newArray;
}
console.log(arrayParty(numberArray)); */

// Make a function, similar
// Two inputs, array and another function
// Instead of using dubble, use the other function

const trippel = (number) => number * 3;

function myMap(array, functionNum) {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    const dumb = functionNum(array[i]);
    newArray.push(dumb);
  }
  return newArray;
}
console.log(myMap([5, 2, 6, 7, 8], trippel));


// Make a function called "trippel"
// That trippel a function
// and put it inside the myMap
