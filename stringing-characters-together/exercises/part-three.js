//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
console.log(language.slice(0,1)+language.slice(4,5));

//2. Without using slice(), use method chaining to accomplish the same thing.
let firstInitial = language[0];
let secondInitial = language[4];
let result = firstInitial + secondInitial;
console.log (result);

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
let initials = language[0]+language[4];
console.log(`The abbreviation for '${language}' is '${initials}'.`);

//4. Just for fun, try chaining 3 or more methods together, and then print the result.
console.log("The abbreviation for '"+language+"' is '"
    +language.slice(language.indexOf("J"),language.indexOf("J")+1)
    +language.slice(language.indexOf("S"),language.indexOf("S")+1)
    +"'.");

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
notTitleCase = notTitleCase.replace("t","T");
notTitleCase = notTitleCase.replace("c","C");
console.log(notTitleCase);

