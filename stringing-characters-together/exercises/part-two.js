//Part Two Section One

let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    ";

// First, print out the dna strand in it's current state.
console.log("Original DNA "+dna);

//1) Use the .trim() method to remove the leading and trailing whitespace, then print the result.
console.log("dna.trim() "+dna.trim());

//2) Change all of the letters in the dna string to UPPERCASE, then print the result.
console.log("dna.toUpperCase() "+dna.toUpperCase());

//3) Note that after applying the methods above, the original, flawed string is still stored in dna. To fix this, we need to reassign the changes to back to dna.
//Apply these fixes to your code so that console.log(dna) prints the DNA strand in UPPERCASE with no whitespace.
dna = dna.trim().toUpperCase();
console.log("Changed DNA dna.trim().toUpperCase() "+dna);

//Part Two Section Two
let dnaTwo = "TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT";
console.log("Original DNA TWO "+dnaTwo)
//1) Replace the gene "GCT" with "AGG", and then print the altered strand.
dnaTwo = dnaTwo.replace("GCT", "AGG");
console.log("dnaTwo.replace('GCT', 'AGG') "+dnaTwo);

//2) Look for the gene "CAT" with ``indexOf()``. If found print, "CAT gene found", otherwise print, "CAT gene NOT found".
console.log("dnaTwo.indexOf('ABC')"+dnaTwo.indexOf("ABC"));
console.log("dnaTwo.indexOf('CAT')"+dnaTwo.indexOf("CAT"));
if (dnaTwo.indexOf("CAT") != -1) {
    console.log("CAT gene found");
 } else {
    console.log("CAT gene NOT found");
}

//3) Use .slice() to print out the fifth gene (set of 3 characters) from the DNA strand.
console.log("dnaTwo.slice(16,19) "+dnaTwo.slice(16,19));

//4) Use a template literal to print, "The DNA strand is ___ characters long."
console.log(`The DNA strand is ${dnaTwo.length} characters long.`)

//5) Just for fun, apply methods to ``dna`` and use another template literal to print, 'taco cat'.
let firstWord = dna.slice(4,7).toLowerCase();
let secondWord = dna.slice(40,43).toLowerCase();
console.log(`${firstWord}o ${secondWord}`);

let tacIndex = dna.indexOf('TAC');
let catIndex = dna.indexOf('CAT');
console.log(dna.slice(tacIndex+3).toLowerCase());
let thirdWord = dna.slice(tacIndex,tacIndex+3).toLowerCase();
let fourthWord = dna.slice(catIndex,catIndex+3).toLowerCase();
console.log(`${thirdWord}o ${fourthWord}`);
