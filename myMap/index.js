// make a function that takes a number
// as imput and returns it doubled;


function double(x) {
  const doubled = x * 2;
  return doubled;
}
console.log(double(5));

// make a loop that doubles every number in an array

const myArray = [3, 5, 6, 8];
const newArray = [];
for (let x = 0; x < myArray.length; x += 1) {
  const dos = double(myArray[x]);
  newArray.push(dos);
}
console.log(newArray);

// make a function that takes an array as an imput
// and returns an array with every element doubled


function doubledArray(array) {
  const newArray1 = [];
  for (let x = 0; x < array.length; x += 1) {
    const dos = double(array[x]);
    newArray1.push(dos);
  }
  return newArray1;
}
console.log(doubledArray(myArray));


// a function with two parameters: an array and another function.
// instead of using double in the loop, we use the other function
// test the function

function myMap(myArray1, anyFunction) {
  const newArray = [];
  for (let x = 0; x < myArray1.length; x += 1) {
    const dos = anyFunction(myArray1[x]);
    newArray.push(dos);
  }
  return newArray;
}
console.log('before');
console.log(myMap(myArray, double));

// make a function called triple that triples the number,
// then use my map with triples

function triple(x) {
  const tripled = x * 3;
  return tripled;
}
console.log(myMap(myArray, triple));

// javascript built in function
console.log('print built in function');
const lower = (string) => string.toLowerCase();
const array = ['UIOU', 'GHGJH', 'HKHKJH'];
const print = array.map(lower);
console.log(print);
