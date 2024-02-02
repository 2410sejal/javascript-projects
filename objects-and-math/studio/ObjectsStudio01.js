// Code your selectRandomEntry function here:
let idNumbers = [291, 414, 503, 599, 796, 890];

function selectRandomEntry(x){
 let selectedId = Math.floor(Math.random()*x.length);
 return x[selectedId];
}

let isIdsSelectionPending = true;
let selectedIdNumbers = [];
while (isIdsSelectionPending){
  let x = selectRandomEntry(idNumbers);
  if (selectedIdNumbers.indexOf(x)=== -1){
    selectedIdNumbers.push(x);
    if(selectedIdNumbers.length === 3){
      isIdsSelectionPending = false;
    }
  }  
}

console.log(selectedIdNumbers);

// Code your buildCrewArray function here:

function buildCrewArray(selectedIdArray,animalsArray){
  let crewAnimals = []
  for (let i=0;i<selectedIdArray.length;i++){
    // console.log(selectedIdArray[i]);
    for (let j=0; j<animalsArray.length; j++){
      if (selectedIdArray[i] === animalsArray[j].astronautID ){
        crewAnimals.push(animalsArray[j]);
        
      }
    }
  }
  // console.log("returning crew");
  return crewAnimals;
}



// Here are the candidates and the 'animals' array:
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

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:

let crewArray = buildCrewArray(selectedIdNumbers,animals);
// console.log(animalsArray[j]);
console.log(crewArray);
console.log(`'${crewArray[0].name}, ${crewArray[1].name}, and ${crewArray[2].name} are going to space!'`)