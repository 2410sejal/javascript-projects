const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

//Use a template literal to print the original and modified string in a descriptive phrase.

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

let str1 = str.slice(3)+str.slice(0,3);
console.log(str1);
console.log(`Here is the value of current string : ${str}, And the value of modifies string : ${str1}.`);

let numOfLetters = input.question("Enter number of letter to be relocated");
if (numOfLetters > str.length ){
    console.log(`Erorr in the input: Number of letter ${numOfLetters} is greater than string length ${str.length}`);
    numOfLetters = 3
}

let newStr = str.slice(numOfLetters) + str.slice(0,numOfLetters);
console.log(`Current Value of str is ${str} and the new value is ${newStr}`);
