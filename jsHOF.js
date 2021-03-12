//https://www.youtube.com/watch?v=3LOEGS4qcRM&list=PLDlWc9AfQBfZGZXFb_1tcRKwtCavR7AfT&index=1

let log = console.log;
let clr = console.clear;

//***FILTER***
clr();
log("**FILTER**");
log("ALL");
log(characters);
//1. Get characters with mass greater than 100

const massGreater100_ = characters.filter(massGreater_);
log("MASS_");
log(massGreater100_);

function massGreater_(char) {
    return char.mass > 100;
}

const massGreater100 = characters.filter((character) => { return character.mass > 100; });
// const massGreater100 = characters.filter(character => character.mass > 100)
log("MASS");
log(massGreater100);

//2. Get characters with height less than 200
const heightLess200 = characters.filter(characters => characters.height < 200);
log("HEIGHT");
log(heightLess200);

//3. Get all male characters
const males = characters.filter(characters => characters.gender == "male");
log("MALES");
log(males);

//4. Get all female characters
const females = characters.filter(characters => characters.gender == "female");
log("FEMALES");
log(females);


// //***MAP***
// clr();
// log("**MAP**");
// log("ALL");
// log(characters);

// //1. Get array of all names

// const names = characters.map(character => character.name);
// log("NAMES");
// log(names);

// //2. Get array of all heights
// const heights = characters.map(character => character.height);
// log("HEIGHT");
// log(heights);

// //3. Get array of objects with just name and height properties
// const nameHeight = characters.map(character => ({
//     name: character.name,
//     height: character.height
// }));
// log("NAME/HEIGHT");
// log(nameHeight);

// //4. Get array of all first names
// const firstNames = characters.map(character => character.name.split(' ')[0])
// log("FIRST NAMES");
// log(firstNames);


//***FILTER***
//1. Get characters with mass greater than 100
//2. Get characters with height less than 200
//3. Get all male characters
//4. Get all female characters

//***MAP***
//1. Get array of all names
//2. Get array of all heights
//3. Get array of objects with just name and height properties
//4. Get array of all first names

//***REDUCE***
//1. Get total mass of all characters
//2. Get total height of all characters
//3. Get total number of characters by eye color
//4. Get total number of characters in all the character names

//***SORT***
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?