//! Objects

//Comparable to arrays just more detailed - short summary - michael


//syntax for objects
let favoriteCharacter = {
    fName: "Bob",
    lName: "Ross",
    hobbies: ["painting","Animal Caring"],
    occupations: ["Drill Sargent", "TV Personality"],
    age: 52,
    currentHealth: "Dead",
    catchphase: quoter()
};

//This calls the entire object data.
console.log(favoriteCharacter);
//Calling one of the property values;
console.log(`My favorite character's first name is ${favoriteCharacter.fName}`)
//Calling a property that has a ARRAY data type
console.log(`One of my favorite character's hobbies is ${favoriteCharacter.hobbies[1]} ${favoriteCharacter.hobbies[0]}`)


//This will update a property value
favoriteCharacter.currentHealth = "Alive and well in spirit!";

console.log(favoriteCharacter.currentHealth);

//ADDING a NEW property to the object 
favoriteCharacter.paintingSkills = "HE WAS SO GOOOOD!";

console.log(favoriteCharacter);


//Objects can store functions

function quoter() {
    let quote = "There are no mistakes only happy accidents."
    return quote
}