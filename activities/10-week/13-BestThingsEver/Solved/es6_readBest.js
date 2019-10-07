// Includes the FS package for reading and writing packages
const fs = require("fs");

// Running the readFile module that's inside of fs.
// Stores the read information into the variable "data"
fs.readFile("best_things_ever.txt", "utf8", function(err, data) {
  if (err) {
    return console.log(err);
  }

  // Break the string down by comma separation and store the contents into the output array.
  let output = data.split(",");

  // Loop Through the newly created output array
  for (let index in output) {

    // Print each element (item) of the array/
    console.log(output[index]);
  }
});
