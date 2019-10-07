// Gets the myBands object from the bands file.

//Since it's importing from bands.js
//the name of the object should be preserved or fixed
const bandList = require("./bands.js");

// Loop through band list and print out details

//key is the name of the property in the object
//bandList is the object
// To destructure or get the value, 
//you must use bandList[key]
for (var key in bandList) {
  console.log("A " + key + " band is " + bandList[key] + ".");
}
