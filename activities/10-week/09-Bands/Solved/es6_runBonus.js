// Gets the myBands object from the bands file.

//Since it's importing from bands.js
//the name of the object should be preserved or fixed
//const should be use here
const bandList = require("./bands.js");
  
// Grabs the genre information
if (process.argv[2]) {
  //input text from commandline should be unchanged or constant
//const should be use here
  const genre = process.argv[2];
}


//key is the name of the property in the object
//bandList is the object
// To destructure or get the value, 
//you must use bandList[key]

//key is always changing,
//let should be use here
for (let key in bandList) {

  // If the genre matches the key then print that band.
  if (key === genre || genre === undefined) {
    console.log("A " + key + " band is " + bandList[key] + ".");
  }
}

// Example:
// User Input: node runBonus rap
// Output: A rap band is Run DMC.

