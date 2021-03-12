//https://www.youtube.com/watch?v=3LOEGS4qcRM&list=PLDlWc9AfQBfZGZXFb_1tcRKwtCavR7AfT&index=1
//https://www.youtube.com/watch?v=h33Srr5J9nY
//https://youtu.be/thXp0_py9X4?t=539

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


//***MAP***
clr();
log("**MAP**");
log("ALL");
log(characters);

//1. Get array of all names
const names = characters.map(character => character.name);
log("NAMES");
log(names);

//2. Get array of all heights
const heights = characters.map(character => character.height);
log("HEIGHT");
log(heights);

//3. Get array of objects with just name and height properties
const nameHeight = characters.map(character => ({
    name: character.name,
    height: character.height
}));
log("NAME/HEIGHT");
log(nameHeight);

//4. Get array of all first names
const firstNames = characters.map(character => character.name.split(' ')[0])
log("FIRST NAMES");
log(firstNames);



//***SOME***
clr();
log("**SOME**");
log("ALL");
log(characters);

// 1. Is there at least one male character?
const isOneMale = characters.some(character => character.gender == 'male');
log("ONE MALE");
log(isOneMale);

// 2. Is there at least one character with blue eyes?
const isOneBlueEyes = characters.some(character => character.eye_color == 'blue');
log("ONE BLUE EYES");
log(isOneBlueEyes);

// 3. Is there at least one character taller than 210?
const isTaller210 = characters.some(character => character.height > 210);
log("TALLER 210");
log(isTaller210);

// 4. Is there at least one character that has mass less than 50?
const isMassLess50 = characters.some(character => character.mass < 50);
log("MASS < 50");
log(isMassLess50);



//***SORT***
clr();
log("**SORT**");
log("ALL");
log(characters);

//1. Sort by mass
const sortByMass = characters.sort((a, b) => a.mass - b.mass);
log("SORT MASS");
log(sortByMass);


//2. Sort by height
const sortByHeight = characters.sort((a, b) => a.height - b.height);
log("SORT HEIGHT");
log(sortByHeight);

//3. Sort by name
const sortByName = characters.sort((a, b) => {
    if (a.name < b.name) return -1;
    return 1;
});
log("SORT NAME");
log(sortByName);

//4. Sort by gender
const sortByGender = characters.sort((a, b) => {
    if (a.gender == 'female') return -1;
    return 1;
});
log("SORT GENDER");
log(sortByGender);



//***REDUCE***
clr();
log("**REDUCE**");
log("ALL");
log(characters);

//1. Get total mass of all characters
const totalMass = characters.reduce((acc, curr) => {
    return acc + curr.mass;
}, 0);
log("TOTAL MASS");
log(totalMass);

//2. Get total height of all characters
const totalHeight = characters.reduce((acc, curr) => {
    return acc + curr.height;
}, 0);
log("TOTAL HEIGHT");
log(totalHeight);

//3. Get total number of characters by eye color
const numByEyeColor = characters.reduce((acc, curr) => {
    const color = curr.eye_color;
    if (acc[color]) {
        acc[color]++;
    } else {
        acc[color] = 1;
    }
    return acc;
}, {});
log("EYE COLOR");
log(numByEyeColor);

//4. Get total number of characters in all the character names






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