function randomFromArray(arr){
  //Your code here to select a random element from the array passed to the function.
  function randomFromArray(arr){
    let x = Math.floor(Math.random()*arr.length);
    return arr[x];
 }
}

//TODO: Export the randomFromArray function.
module.exports = randomFromArray;