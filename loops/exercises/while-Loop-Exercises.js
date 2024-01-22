//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
// const input = require('readline-sync');
const input = require('C:\\sejalvsc\\practice\\node_modules\\readline-sync');
let fuelLevel = "";
let numberOfAstronauts = "";
let altitude = 0;

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
fuelLevel = input.question("Please enter a starting fuel level:");
fuelLevel = Number(fuelLevel);

while (fuelLevel<5000 || fuelLevel>30000){
 fuelLevel =  input.question("Invalid input Fuel Level should be between 5000 to 30000. Please enter a positive, integer value:");
  fuelLevel = Number(fuelLevel);
}

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
numberOfAstronauts = input.question("Please enter number of astronauts aboard:");
numberOfAstronauts = Number(numberOfAstronauts);

while (numberOfAstronauts < 1 || numberOfAstronauts > 7){
 numberOfAstronauts = input.question("Invalid input Number should be in the range of 1 to 7. Please enter a number of astronauts aboard:");
 numberOfAstronauts = Number(numberOfAstronauts);
}
  
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
while (fuelLevel >= 0) {
  altitude += 50;
  fuelLevel -= 100*numberOfAstronauts;
}

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
console.log(`The shuttle gained an altitude of ${altitude} km.`);

if (altitude >= 2000) {
  console.log("Orbit achieved!");
} else {
  console.log("Failed to reach orbit.");
}
