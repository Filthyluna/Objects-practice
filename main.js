// Exercise #1
// Create an object to hold information on your favorite recipe.
//It should have properties for *title* (a string), *servings*(a number)
// and *ingredients*(an array of strings)
// On separate lines (one console.log statement for each), log the 
//recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa
const recipe = {
  title: "Mole",
  Serving: 2,
  ingredients: ["cinnamon", "cumin", "cocoa"]
};

console.log(recipe.title);
console.log(`Serves: ${recipe.Serving}`);
console.log("Ingredients: ");
recipe.ingredients.forEach(element => {
  console.log(element);
});




//Exercise #2
// Create an array of objects, where each object describes
// a book and has properties for the *title*(a string), *author*(a string)
// and *alreadyRead* (a boolean indicating if you read it yet)
// Iterate through the array of objects of books. For each book, log the book title and book
// author like so: "1984 by George Orwell"
// Now use an if/else statement to change the output depending on whether you read it
// or not. If you read it, log a string like "You already read "1984" by George Orwell"
// and vice versa
let books = [
  {
    title: "Lord of The Flies",
    author: "William Golding",
    alreadyRead: false
  },
  {
    title: "Red Rising",
    author: "Pierce Brown",
    alreadyRead: true
  }];

books.map(i => {
  if (i.alreadyRead == true) {
    console.log(`You already read "${i.title}" by ${i.author}`);
  }
  else if(i.alreadyRead == false){
    console.log(`You still need to read "${i.title}" by ${i.author}`);
  }
  })




//Exercise #3
//Create your object representing your favorite movie, like so
// const shawshank = {
//   title: 'Shawshank Redemption',
//   director: 'Frank Darabont',
//   actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
//   releaseYear: 1994, 
//   duration: 142
// }
// After you have crreated your movie object, print the title 
// of your movie using dot notation
// Print the director's name
// Print the release year
// Maybe your favorite came with an extended cut, including deleted scenes. 
// Write a statement that increases your movie object's duration by 30 minutes. 
const spaceBalls = {
  title: "Space Balls",
  director: "Mel Brooks",
  actors: ["John Candy", "Rick Moranis", "Bill Pullman", "Daphne Zuniga"],
  releaseYear: 1987,
  duration: 96
};

console.log(`Movie Title: ${spaceBalls.title} \nDirector: ${spaceBalls.director}\nRelease Year: ${spaceBalls.releaseYear}`);
console.log(`Director's Cut: ${spaceBalls.duration + 30} minutes`);






//Exercise #4 
//using the array provided below, 
// How do you check if an object is an array or not? 
// You are checking if arrayList is an array, assuming it were an object before testing it
// That it is not an object

//Checking array on its own
let arrayList = [1, 2, 3];
console.log(Array.isArray(arrayList));

//Checking if it were in an object
let randomObject = {
  title: "Random Object",
  array: [1, 2, 3]
};
//Just use dot operator inside isArray()
// :D
console.log(Array.isArray(randomObject.array));


//Exercise #5
// Write a function countCharacters that, when given a string as an argument,
// returns an object containing counts of the ocurrences of each character in 
// the string
// function countCharacters(){
// 
//  }
// countCharacters("hello"); => {"h": 1, "e": 1, "l": 2, "o": 1}

function countCharacters(string) {
  let stringObject = {};
  for (let i = 0; i < string.length; i++){
    let char = string.charAt(i);
    if (stringObject[char]) {
      stringObject[char]++;
    }
    else {
      stringObject[char] = 1;
    }
  }
  console.log(stringObject);
}
countCharacters("hello");


//Exercise #6
// Write a function that accepts two objects
// as arguments and 
// *extends* all of the key/value pairs of the second one to the first one
// function extend(obj1, obj2) {
  
// }
// extend({a: 1, c: 3}, {b: 2, c: 4}) => {a: 1, b:2, c:4}

object1 = {
  a: 1,
  b: 2,
  c: 3
};

object2 = {
  c: 4,
  d: 5,
  e: 6
};

function mergeObjects(obj1, obj2) {
  //One line way to do it - :D
  let newObject = Object.assign(obj1, obj2);
  console.log(newObject);
}

mergeObjects(object1, object2);