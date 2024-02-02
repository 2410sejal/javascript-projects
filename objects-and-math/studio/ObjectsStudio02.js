// Code your orbitCircumference function here:

function orbitCircumference(radius){
  return Math.round(2*Math.PI*radius);
}

// Code your missionDuration function here:

function missionDuration(numOfOrbitscompleted,orbitRadius=2000,orbitalSpeed=28000){
   return Math.round(
    (orbitCircumference(orbitRadius)*numOfOrbitscompleted)/orbitalSpeed
  );
}

console.log(`The mission will travel ${orbitCircumference(2000)} km around the planet, and it will take ${missionDuration(5)} hours to complete.'`)

// Copy/paste your selectRandomEntry function here:

function selectRandomEntry(x){
  let selectedId = Math.floor(Math.random()*x.length);
  return x[selectedId];
 }

// Code your oxygenExpended function here:

 function oxygenExpended (astronaut,orbRad,speed) {
  let duration = missionDuration(3,orbRad,speed);
  
   let oxygenUsed = Math.round(astronaut.o2Used(duration))*1000/1000;
   return oxygenUsed;
}
// console.log(oxygenExpended());
// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 
 console.log(`${selectRandomEntry(crew) } will perform the spacewalk, which will last${missionDuration}  hours and require ${orbitCircumference}  kg of oxygen.'`);