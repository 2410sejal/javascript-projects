let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   move: function () {return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   move: function () {return Math.floor(Math.random()*11)}
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   move: function () {return Math.floor(Math.random()*11)}
};

let puppies = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   move: function () {return Math.floor(Math.random()*11)}
};

let waterBears = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   move: function () {return Math.floor(Math.random()*11)}
};


// After you have created the other object literals, add the astronautID property to each one.

superChimpOne["astronautID"] = 2;
salamander["astronautID"] = 4;
superChimpTwo["astronautID"] = 6;
puppies["astronautID"] = 10;
waterBears["astronautID"] = 5;

// Create an array to hold the animal objects.

let crew = [superChimpOne,salamander,superChimpTwo,puppies,waterBears];

// Print out the relevant information about each animal.

// console.log(crew[0].age);
// console.log(crew[1].name);
// console.log(crew[2].mass);
// console.log(crew[3].species);
// console.log(crew[4].astronautID);

// Start an animal race!

function crewReports(x) {
   console.log(`${x.name} is a ${x.species}. They are ${x.age} years old and ${x.mass} kilograms. Their ID is ${x.astronautID}.`);
}
// crewReports(salamander);
// crewReports(superChimpOne);
// crewReports(superChimpTwo);
// crewReports(waterBears);
// crewReports(puppies);

function fitnessTest(candidates){
   let results = [], numSteps, turns;
   for (let i = 0; i < candidates.length; i++){
       numSteps = 0;
       turns = 0;
       while(numSteps < 20){
       numSteps += candidates[i].move();
       turns++;
       }
       results.push(candidates);
       console.log(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;
  }
  fitnessTest(crew);
  