/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

for (i=0; i<=20; i++) {
  console.log(i);
}

for (i=3; i<=29;i= i+2) {
  console.log(i);
}

for (i=12; i>= -14;i--) {
     console.log(i);
   }

for (i=50; i>=20; i--) {
   if (i%3 == 0) {
    console.log(i);
   }
}




/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].


Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 

  let course = "Launchcode";
  let reverseCourse = "";
  let values = [1, 5, "LC101", "blue", 42]

  for (i=0; i<=values.length-1; i++) {
    console.log(values[i]);
  }

  for (i=0; i<=course.length-1; i++) {
    reverseCourse = course[i]+reverseCourse;
  }
  console.log(reverseCourse);




/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */
   
  let array = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
  
  let even = [];
  let odd = [];

  for (i=0; i<=array.length-1; i++) {
    if (array[i]%2 == 0){
     even.push(array[i])
    } else {
       odd.push(array[i])
    }
   }
  //  even = even.sort();
  //  odd = odd.sort();
    console.log(even);
    console.log(odd);