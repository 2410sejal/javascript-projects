function findMinValue(arr){
  let min = arr[0];
  for (let i = 0; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}

//Create a function with an array of numbers as its parameter. This function will return a new array with the numbers sorted from least to greatest value.

/*Within the function:
1) Define a new, empty array to hold the final sorted numbers.
2) Use the findMinValue function to find the minimum value in the old array.
3) Add the minimum value to the new array, and remove the minimum value from the old array.
4) Repeat parts b & c until the old array is empty.
5) Return the new sorted array.
6) Be sure to print the results in order to verify your code.*/

let sortingArray = function (x){
  let sortedArray = [];
  // let i=0;
  while (x.length > 0){
    // i++;
    // console.log("x.length "+x.length);
    // console.log("x array "+x);

    let minValue = findMinValue(x);
    // console.log("min value "+minValue);

    sortedArray.push(minValue);
    x.splice(x.indexOf(minValue),1);
  }
  return sortedArray;
};
//Your function here...

/* BONUS MISSION: Refactor your sorting function to use recursion below:
 */

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

console.log("nums1 array "+nums1);
console.log("Sorting array "+sortingArray(nums1));
console.log("nums1 array "+nums1);
// console.log(sortingArray(nums2));
// console.log(sortingArray(nums3));

let sortedArray = [];
let i = 0;
let sortingArrayUsingRecursion = function (y){
  i++;
  console.log("y length is "+y.length);
  if (y.length === 1 || i > 2){
    console.log("Met base condition");
    sortedArray.push(y[0]);
    return
  } else {
    let minValue = findMinValue(y);
    sortedArray.push(minValue);
    y.splice(y.indexOf(minValue),1);
    console.log("removed min value "+minValue+" | Updated Array is "+y);
    sortingArrayUsingRecursion(y);
  }
  return sortedArray;
};



console.log(sortingArrayUsingRecursion(nums1));
